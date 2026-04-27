# rr-qa-automationassignment

QA Automation Assignment — TMDB Discover  
Test suite for [https://tmdb-discover.surge.sh](https://tmdb-discover.surge.sh), a movie and TV show listing platform powered by the TMDB API.

---

## Table of Contents

1. [Testing Strategy](#testing-strategy)
2. [Test Cases Generated](#test-cases-generated)
3. [Framework Information](#framework-information)
4. [How to Run Tests](#how-to-run-tests)
5. [Test Design Techniques](#test-design-techniques)
6. [Patterns Used](#patterns-used)
7. [Defects Found](#defects-found)
8. [CI/CD Approach](#cicd-approach)

---

## Testing Strategy

The test suite covers two levels of testing:

**UI Testing** — verifying visible behavior through the browser. Each filter feature (Category, Type, Genre, Year, Rating, Search) is tested in isolation and in combination where relevant. Pagination is tested as a standalone feature. All UI tests use the Page Object Model to interact with the application.

**API Testing** — verifying the network calls triggered by user interactions. Rather than calling the TMDB API directly, the suite intercepts browser network traffic using Playwright's `response` event listener. This allows the tests to assert that the correct API endpoints and query parameters are called when filters change — bridging UI behavior with backend correctness.

**Scope decisions:**

The test scope follows the features listed in the assignment brief: Categories, Titles, Type, Year, Rating, Genre, and Pagination. Cross-filter combinations are included where they represent realistic user journeys (e.g. Type + Genre, Genre + Rating). Exhaustive combination testing was intentionally excluded to keep the suite focused and maintainable.

**Known limitations acknowledged upfront:**

Two known issues were documented in the assignment brief — direct URL slug access and last-page pagination failures. Both are covered as negative test cases (TC-CAT-07, TC-PAG-11) with dedicated bug reports rather than being silently skipped.

---

## Test Cases Generated

### Category Tabs — 7 test cases (TC-CAT)

| ID | Description | Why |
|---|---|---|
| TC-CAT-01 | Default active tab is "Popular" on load | Verify correct initial state |
| TC-CAT-02 | All four tabs are visible in the nav | Smoke test — core navigation present |
| TC-CAT-03 | Only one tab is active at a time | Mutual exclusivity of active state |
| TC-CAT-04 | Trend tab loads different content from Popular | Verify tab switching actually changes data |
| TC-CAT-05 | Newest tab loads different content from Popular | Same — each category must be independently functional |
| TC-CAT-06 | Top Rated tab loads different content from Popular | Same |
| TC-CAT-07 ❌ | Direct URL slug access fails (negative) | Documents BUG-002 — known issue from brief |

**Rationale:** TC-CAT-04 to TC-CAT-06 compare titles rather than checking API endpoints, which makes them resilient to backend changes while still verifying meaningful UI output.

---

### Search Filter — 6 test cases (TC-SRC)

| ID | Description | Why |
|---|---|---|
| TC-SRC-01 | Search input is visible with correct placeholder | Smoke test — search feature present |
| TC-SRC-02 | Typing a keyword filters cards by title | Core happy path |
| TC-SRC-03 | Clearing search restores original results | State reset behavior |
| TC-SRC-04 | Partial title search returns relevant results ⚠️ | Documents BUG-004 |
| TC-SRC-05 | Results update as user types (live search) | Verify real-time filtering behavior |
| TC-SRC-06 ❌ | Invalid and special character input handled gracefully | Negative — crash prevention |

**Rationale:** TC-SRC-05 uses `pressSequentially` with delay to simulate realistic typing rather than filling the entire string at once, which better reflects real user behavior and catches debounce-related issues.

---

### Type Filter — 6 test cases (TC-TYP)

| ID | Description | Why |
|---|---|---|
| TC-TYP-01 | Default type is "Movie" on load | Verify correct initial state |
| TC-TYP-02 | Dropdown shows both options | Smoke — both options present |
| TC-TYP-03 | Selecting TV Shows updates content | Core switching behavior |
| TC-TYP-04 | Switching back to Movie restores content | Reversibility — two-way switching |
| TC-TYP-05 | Type filter persists when switching categories | Filter state persistence across navigation |
| TC-TYP-06 | Switching type calls correct API endpoint | API-level verification |

**Rationale:** TC-TYP-05 specifically tests filter persistence — a common source of bugs in filter-heavy UIs where state is reset unintentionally on navigation.

---

### Genre Filter — 8 test cases (TC-GNR)

| ID | Description | Why |
|---|---|---|
| TC-GNR-01 | Placeholder "Select..." shown by default | Verify initial state |
| TC-GNR-02 | Dropdown lists all 19 genre options | Completeness check |
| TC-GNR-03 | Selecting Action genre filters results | Core happy path |
| TC-GNR-04 | Different genres load different content | Each genre produces distinct results |
| TC-GNR-05 | Genre persists when switching category tabs | Filter state persistence |
| TC-GNR-06 | Genre + Type combined filter returns results | Cross-filter combination |
| TC-GNR-07 | All 19 genres can be selected ⚠️ | Documents BUG-001 — AND vs OR logic |
| TC-GNR-08 | Selecting genre triggers API with with_genres param | API-level verification |

**Rationale:** TC-GNR-07 selects all 19 genres sequentially. This was how BUG-001 (AND logic instead of OR) was discovered — results decrease to zero as more genres are added.

---

### Year Filter — 7 test cases (TC-YR)

| ID | Description | Why |
|---|---|---|
| TC-YR-01 | Default range is 1900–2025 | Verify initial state and boundary values |
| TC-YR-02 | From dropdown has options 1900–2025 | Boundary — first and last options present |
| TC-YR-03 | Selecting From year filters results ⚠️ | Documents BUG-005 — year filter inaccuracy |
| TC-YR-04 | Selecting To year filters results | Core happy path |
| TC-YR-05 | Year range 2010–2020 returns relevant results | Range selection end-to-end |
| TC-YR-06 ❌ | Inverted range (From > To) is rejected | Negative — invalid input handling |
| TC-YR-07 | Changing year triggers API with year params | API-level verification |

**Rationale:** Boundary Value Analysis was applied for TC-YR-01 and TC-YR-02 — 1900 and 2025 are the extreme values of the year range and must be explicitly verified.

---

### Rating Filter — 5 test cases (TC-RTG)

| ID | Description | Why |
|---|---|---|
| TC-RTG-01 | Rating widget shows 5 stars | Smoke test |
| TC-RTG-02 | No rating selected by default | Verify initial state |
| TC-RTG-03 | All valid ratings (1–5 including halves) can be set | Full equivalence partition coverage |
| TC-RTG-04 | Rating + Genre combined filter returns results | Cross-filter combination |
| TC-RTG-05 | Setting rating triggers API with vote_average param | API-level verification |

**Rationale:** TC-RTG-03 covers all 9 valid rating values (1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5) including half-star values, which require different click positioning on the star widget.

---

### Pagination — 12 test cases (TC-PAG)

| ID | Description | Why |
|---|---|---|
| TC-PAG-01 | Pagination component is visible | Smoke test |
| TC-PAG-02 | Page 1 selected by default, Previous disabled | Verify initial state and boundary |
| TC-PAG-03 | Next button enabled on page 1 | Boundary — first page behavior |
| TC-PAG-04 | Clicking Next navigates to page 2 with new content | Core next-page behavior |
| TC-PAG-05 | Previous enabled on page 2 | Boundary — enabled after first page |
| TC-PAG-06 | Previous from page 2 returns to page 1 | Back navigation |
| TC-PAG-07 | Clicking specific page number navigates correctly | Direct page navigation |
| TC-PAG-08 | Pagination break (...) is visible | UI structure verification |
| TC-PAG-09 | Each page loads the same number of cards | Consistency across pages |
| TC-PAG-10 | Pagination resets to page 1 when filter changes | State reset on filter change |
| TC-PAG-11 ❌ | Last pages may not load correctly (known bug) | Documents known issue from brief |
| TC-PAG-12 | Next page triggers API with page=2 param | API-level verification |

**Rationale:** Boundary Value Analysis was applied for pagination — page 1 (first boundary) and last page (last boundary) are explicitly tested. TC-PAG-10 tests a common UX bug where changing a filter while on page 3 keeps the user on page 3 of the new filtered results instead of resetting to page 1.

---

### API Network Calls — 7 test cases (TC-API)

| ID | Description | Why |
|---|---|---|
| TC-API-01 | Page load triggers at least one TMDB API call | Baseline — API integration present |
| TC-API-02 | API response has correct data structure | Response contract verification |
| TC-API-03 | All TMDB responses return HTTP 200 | Status code health check |
| TC-API-04 | Switching category changes the API endpoint | Endpoint routing correctness |
| TC-API-05 | Selecting type calls correct API endpoint | /movie/ vs /tv/ routing |
| TC-API-06 | Genre filter passes with_genres param | Query parameter correctness |
| TC-API-07 | Pagination passes correct page param | Pagination API param correctness |

**Rationale:** API tests use Playwright's `response` event listener to intercept real network traffic rather than mocking. This approach verifies that the frontend actually sends the correct requests — not just that the UI looks correct.

**Total: 58 test cases across 8 test files.**

---

## Framework Information

### Libraries

| Library | Version | Purpose |
|---|---|---|
| `@playwright/test` | ^1.43.0 | Test framework and browser automation |
| `allure-playwright` | ^3.0.0 | Allure report integration |
| `allure-commandline` | ^2.27.0 | Generate and open Allure reports |
| `winston` | ^3.13.0 | Structured logging |

### Project Structure

```
rr-qa-automationassignment/
├── docs/
│   ├── Bug report.md
│   └── CI approach.md
├── pages/
│   ├── BasePage.js          # Base class — navigate, scroll, waitForCards
│   └── HomePage.js          # All UI interactions — filters, search, pagination, API helper
├── test-data/
│   └── filterData.js        # Shared test data
├── tests/
│   ├── api/
│   │   └── network.spec.js
│   ├── filtering/
│   │   ├── category.spec.js
│   │   ├── genre.spec.js
│   │   ├── rating.spec.js
│   │   ├── search.spec.js
│   │   ├── type.spec.js
│   │   └── year.spec.js
│   └── pagination/
│       └── pagination.spec.js
├── utils/
│   └── logger.js            # Winston logger
├── .gitignore
├── package.json
├── playwright.config.js
└── README.md
```

### Configuration highlights (`playwright.config.js`)

- **`fullyParallel: false` / `workers: 1`** — tests run sequentially to avoid race conditions on the shared demo site. Parallel execution is discussed in the CI approach document.
- **`retries: 1`** — each failed test is retried once to mitigate network-related flakiness from the external TMDB API.
- **`actionTimeout: 20s` / `navigationTimeout: 50s`** — generous timeouts to account for the demo site's variable response times.
- **Reporters:** `list` (console), `html` (Playwright HTML report), `allure-playwright` (Allure report).
- **Browser:** Chromium only. Firefox and WebKit can be added in `projects` if cross-browser coverage is needed.

---

## How to Run Tests

### Prerequisites

- Node.js 18 or higher
- npm

### Installation

```bash
git clone https://github.com/<your-username>/rr-qa-automationassignment.git
cd rr-qa-automationassignment
npm ci
npx playwright install --with-deps chromium
```

### Run all tests

```bash
npm test
```

### Run a specific feature

```bash
npm run test:category
npm run test:search
npm run test:type
npm run test:genre
npm run test:year
npm run test:rating
npm run test:pagination
npm run test:api
```

### Run all filtering tests

```bash
npm run test:ui
```

### Run in headed mode (see the browser)

```bash
npm run test:headed
```

### Run in debug mode

```bash
npm run test:debug
```

### View reports

```bash
# Playwright HTML report
npm run report:html

# Allure report (requires allure-commandline)
npm run report:allure
```

---

## Test Design Techniques

**Equivalence Partitioning** — applied to Rating (valid ratings 1–5 vs invalid), Year (valid range 1900–2025 vs inverted range), and Search (valid keyword vs non-existent keyword vs special characters).

**Boundary Value Analysis** — applied to Year filter (1900 as lower boundary, 2025 as upper boundary), Pagination (page 1 as first boundary, last page as upper boundary), and Rating (1 as minimum, 5 as maximum, 0.5 as half-star increment).

**State Transition Testing** — applied to Type filter (Movie → TV Shows → Movie) and Pagination (page 1 → next → previous). Verifies that state changes are reversible and correct in both directions.

**Negative Testing** — applied to Search (non-existent keyword, special characters), Year (inverted range From > To), Category (direct URL slug access), and Pagination (last page behavior). These cases are explicitly marked `[NEGATIVE]` in test names.

**Cross-filter Combination Testing** — selected combinations that represent realistic user journeys: Type + Genre (TC-GNR-06), Genre + Rating (TC-RTG-04), Type persists across category switch (TC-TYP-05), Genre persists across category switch (TC-GNR-05), Pagination resets on filter change (TC-PAG-10).

---

## Patterns Used

**Page Object Model (POM)** — all UI interactions are encapsulated in `HomePage.js`. Test files contain only test logic — no raw locators or direct `page` calls. This keeps tests readable and makes locator changes a single-point update.

**Base Page Pattern** — `BasePage.js` contains shared behaviors (`navigate`, `scrollToBottom`, `scrollToTop`, `waitForCardsLoaded`) that all page objects inherit. This avoids duplication across page objects as the suite grows.

**Constants for Selectors and Data** — locators are defined in a `SELECTORS` object at the top of `HomePage.js`. Enumerated values (`CATEGORIES`, `TYPES`, `GENRES`) are exported as constants and imported directly in test files. This prevents magic strings from spreading across the codebase.

**API Helper Pattern** — `collectApiCalls(action)` in `HomePage.js` wraps a user action, captures all TMDB API responses during that action, and returns them for assertion. This keeps API interception logic centralized and reusable across both UI spec files and the dedicated API spec.

**Structured Logging** — Winston logger is used throughout `HomePage.js` and spec files to emit timestamped `info` and `warn` messages. Warnings are used specifically for known bug scenarios (e.g. `[BUG-005]`) so they are visible in console output without failing the test.

---

## Defects Found

See [`docs/bug-report.md`](docs/bug-report.md) for full reproduction steps and impact analysis.

| ID | Severity | Summary | Affects |
|---|---|---|---|
| BUG-001 | Major | Genre multi-select uses AND logic instead of OR — selecting 6+ genres returns 0 results | TC-GNR-07 |
| BUG-002 | Minor | Direct URL slug (e.g. `/popular`) returns "page not found" | TC-CAT-07, TC-PAG-11 |
| BUG-003 | Major | Search splits phrase into individual words — "The Sniper" matches "Sniper: The Last Stand" | TC-SRC-02 |
| BUG-004 | Minor | Search returns results whose titles do not contain the keyword | TC-SRC-04 |
| BUG-005 | Major | Year From filter shows movies outside the selected range (e.g. 1979 appears when From=2020) | TC-YR-03 |
| BUG-006 | Minor | Clicking pagination break (...) jumps to a page instead of showing a page number input | TC-PAG-08 |

BUG-002 and the last-page pagination issue were noted as known issues in the assignment brief. BUG-001, BUG-003, BUG-004, BUG-005, and BUG-006 were discovered during test execution.

---

## CI/CD Approach

See [`docs/ci-approach.md`](docs/ci-approach.md) for the full design proposal including GitHub Actions workflow, Jenkins alternative, parallelization strategy, and handling of known-bug tests.

**Summary:** GitHub Actions is recommended for this project. The pipeline triggers on push to `main`/`develop`, on pull requests to `main`, and on a daily schedule to catch external changes (TMDB API updates or demo site changes). HTML reports and logs are uploaded as artifacts on every run. Known-bug tests (TC-PAG-08, TC-SRC-04) run as non-blocking steps using `continue-on-error: true` so they document existing bugs without blocking PR merges.