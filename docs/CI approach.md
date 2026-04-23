# CI/CD Integration Approach

This document describes the approach for integrating the Playwright test suite into a CI/CD pipeline. Implementation is not included — this is a design proposal.

Two approaches are covered:
- **GitHub Actions** — recommended for this project (hosted on GitHub, zero infrastructure cost)
- **Jenkins** — alternative for teams with existing Jenkins infrastructure

---

## Approach 1: GitHub Actions (Recommended)

### Why GitHub Actions?

Since the project is already hosted on GitHub, GitHub Actions requires zero additional infrastructure. It is free for public repositories and integrates natively with pull requests.

### Trigger Events

```yaml
on:
  push:
    branches: [main, develop]     # Run on every push to main/develop
  pull_request:
    branches: [main]              # Block merge if tests fail
  schedule:
    - cron: '0 8 * * *'          # Run daily at 8AM — catches external changes
```

**Push to main/develop** — catches regressions introduced by merged code.

**Pull request** — enforces quality gate, blocks merging if tests fail.

**Scheduled (daily)** — detects issues caused by external changes such as TMDB API updates or site changes that are not triggered by code changes.

### Workflow File

```yaml
# .github/workflows/playwright.yml
name: Playwright Tests

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]
  schedule:
    - cron: '0 8 * * *'

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Install Playwright browsers
        run: npx playwright install --with-deps chromium

      - name: Run tests
        run: npm test

      - name: Upload HTML report
        uses: actions/upload-artifact@v3
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
          retention-days: 14

      - name: Upload test logs
        uses: actions/upload-artifact@v3
        if: always()
        with:
          name: test-logs
          path: test-results/test-run.log
          retention-days: 14

      - name: Notify Slack on failure
        if: failure()
        uses: 8398a7/action-slack@v3
        with:
          status: ${{ job.status }}
          fields: repo, message, commit, author
        env:
          SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }}
```

### Key Decisions

**`npm ci` instead of `npm install`** — installs exactly what is in `package-lock.json`, making builds fully reproducible across environments.

**`--with-deps chromium`** — installs only Chromium and its system dependencies, keeping CI lean. Firefox and WebKit can be added later if cross-browser coverage is needed.

**`if: always()`** — ensures reports and logs are uploaded even when tests fail, so the team can always investigate failures.

**`retention-days: 14`** — keeps artifacts for 2 weeks, balancing storage cost and debugging window.

### Parallelization Strategy

The current suite runs with `workers: 1` to avoid race conditions on the shared demo site. If run time becomes a concern, the suite can be split by feature group:

```yaml
jobs:
  test:
    strategy:
      matrix:
        feature: [category, search, type, genre, year, rating, pagination, api]
    steps:
      - run: npx playwright test tests/ui/${{ matrix.feature }}.spec.js
```

This runs all feature suites in parallel, reducing total time from the sum of all suites to the time of the slowest individual suite.

---

## Approach 2: Jenkins (Alternative)

### Why Jenkins?

Jenkins is a better fit for teams that already have Jenkins infrastructure, need integration with internal tools (Jira, Confluence, SonarQube), or require complex multi-stage pipelines across many repositories.

### Prerequisites

- Jenkins server with Node.js plugin installed
- Playwright system dependencies available on the Jenkins agent
- GitHub webhook configured to trigger Jenkins on push/PR events

### Jenkinsfile

```groovy
pipeline {
  agent any

  tools {
    nodejs 'NodeJS-18'
  }

  triggers {
    // Trigger on GitHub webhook
    githubPush()
    // Run daily at 8AM
    cron('0 8 * * *')
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install') {
      steps {
        sh 'npm ci'
        sh 'npx playwright install --with-deps chromium'
      }
    }

    stage('Test') {
      steps {
        sh 'npm test'
      }
      post {
        always {
          // Publish HTML report
          publishHTML(target: [
            allowMissing: false,
            alwaysLinkToLastBuild: true,
            keepAll: true,
            reportDir: 'playwright-report',
            reportFiles: 'index.html',
            reportName: 'Playwright Report'
          ])

          // Archive test logs
          archiveArtifacts artifacts: 'test-results/test-run.log',
            allowEmptyArchive: true
        }
        failure {
          // Send email notification on failure
          mail to: 'qa-team@company.com',
            subject: "FAILED: Playwright Tests — ${env.JOB_NAME} #${env.BUILD_NUMBER}",
            body: """
              Build ${env.BUILD_NUMBER} failed.
              Check the report: ${env.BUILD_URL}
              Branch: ${env.GIT_BRANCH}
            """
        }
      }
    }
  }
}
```

### Jenkins vs GitHub Actions — Comparison

| | GitHub Actions | Jenkins |
|---|---|---|
| **Infrastructure** | Managed by GitHub | Self-hosted, team maintains |
| **Setup time** | Minutes | Hours to days |
| **Cost** | Free for public repos | Server cost + maintenance |
| **Integration** | Native GitHub PR checks | Requires webhook configuration |
| **Best for** | Small/medium projects on GitHub | Enterprise, complex pipelines |
| **Plugin ecosystem** | GitHub Marketplace | Extensive Jenkins plugin library |

---

## Common Considerations (Both Approaches)

### Environment Variables

If the TMDB API key ever needs to be passed as a secret:

```bash
# GitHub Actions
TMDB_API_KEY: ${{ secrets.TMDB_API_KEY }}

# Jenkins
withCredentials([string(credentialsId: 'tmdb-api-key', variable: 'TMDB_API_KEY')]) {
  sh 'npm test'
}
```

### Known Limitations

**Demo site stability** — the test target (`tmdb-discover.surge.sh`) is a demo site not under our control. It may be unavailable or changed without notice, causing false failures in CI. This is a known risk of testing against an external environment.

**Flaky tests** — some tests depend on consistent data from the TMDB API. The `retries: 1` setting in `playwright.config.js` mitigates occasional network-related flakiness.

**Known bug tests** — TC-PAG-08 and TC-SRC-04 are intentionally written to fail, documenting existing bugs. These should be excluded from blocking PR merges until the bugs are fixed:

```yaml
# GitHub Actions — run known-bug tests separately
- name: Run known bug tests (non-blocking)
  continue-on-error: true
  run: npx playwright test --grep "BUG"
```