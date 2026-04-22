# .github/workflows/playwright.yml (document only)
name: Playwright Tests

on:
    push:
        branches: [main, develop]
    pull_request:
        branches: [main]
    schedule:
        - cron: '0 8 * * *'  # Chạy hàng ngày lúc 8AM

jobs:
    test:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v3
            
            - uses: actions/setup-node@v3
              with:
                  node-version: 18
            
            - name: Install dependencies
              run: npm ci
            
            - name: Install Playwright browsers
              run: npx playwright install --with-deps
            
            - name: Run tests
              run: npm test
            
            - name: Upload HTML Report
              uses: actions/upload-artifact@v3
              if: always()
              with:
                  name: playwright-report
                  path: reports/html/
                  retention-days: 30