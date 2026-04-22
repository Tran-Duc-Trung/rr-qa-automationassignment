# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\category.spec.js >> Category Tabs >> TC-CAT-05: All four category tabs are visible in the nav
- Location: tests\ui\category.spec.js:77:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('a[href="/newest"]')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('a[href="/newest"]')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - banner [ref=e5]:
      - link "Discover" [ref=e6] [cursor=pointer]:
        - /url: /
        - paragraph [ref=e7]: Discover
      - navigation [ref=e8]:
        - list [ref=e9]:
          - listitem [ref=e10] [cursor=pointer]:
            - link "Popular" [ref=e11]:
              - /url: /popular
          - listitem [ref=e12] [cursor=pointer]:
            - link "Trend" [ref=e13]:
              - /url: /trend
          - listitem [ref=e14] [cursor=pointer]:
            - link "Newest" [ref=e15]:
              - /url: /new
          - listitem [ref=e16] [cursor=pointer]:
            - link "Top rated" [ref=e17]:
              - /url: /top
      - generic [ref=e18]:
        - img "Search Icon" [ref=e19]
        - textbox "SEARCH" [ref=e20]
    - generic [ref=e22]:
      - generic [ref=e23]:
        - generic [ref=e24]:
          - img "Movie Poster" [ref=e25]
          - paragraph [ref=e26]: The Super Mario Galaxy Movie
          - paragraph [ref=e27]: Family, 2026
        - generic [ref=e28]:
          - img "Movie Poster" [ref=e29]
          - paragraph [ref=e30]: Your Heart Will Be Broken
          - paragraph [ref=e31]: Romance, 2026
        - generic [ref=e32]:
          - img "Movie Poster" [ref=e33]
          - paragraph [ref=e34]: "Avatar: Fire and Ash"
          - paragraph [ref=e35]: Science Fiction, 2025
        - generic [ref=e36]:
          - img "Movie Poster" [ref=e37]
          - paragraph [ref=e38]: "Avatar Aang: The Last Airbender"
          - paragraph [ref=e39]: Animation, 2026
        - generic [ref=e40]:
          - img "Movie Poster" [ref=e41]
          - paragraph [ref=e42]: The Mortuary Assistant
          - paragraph [ref=e43]: Horror, 2026
        - generic [ref=e44]:
          - img "Movie Poster" [ref=e45]
          - paragraph [ref=e46]: Project Hail Mary
          - paragraph [ref=e47]: Science Fiction, 2026
        - generic [ref=e48]:
          - img "Movie Poster" [ref=e49]
          - paragraph [ref=e50]: Vengeance
          - paragraph [ref=e51]: Action, 2026
        - generic [ref=e52]:
          - img "Movie Poster" [ref=e53]
          - paragraph [ref=e54]: Hoppers
          - paragraph [ref=e55]: Animation, 2026
        - generic [ref=e56]:
          - img "Movie Poster" [ref=e57]
          - paragraph [ref=e58]: Shelter
          - paragraph [ref=e59]: Action, 2026
        - generic [ref=e60]:
          - img "Movie Poster" [ref=e61]
          - paragraph [ref=e62]: Balls Up
          - paragraph [ref=e63]: Comedy, 2026
        - generic [ref=e64]:
          - img "Movie Poster" [ref=e65]
          - paragraph [ref=e66]: Thrash
          - paragraph [ref=e67]: Horror, 2026
        - generic [ref=e68]:
          - img "Movie Poster" [ref=e69]
          - paragraph [ref=e70]: "Greenland 2: Migration"
          - paragraph [ref=e71]: Adventure, 2026
        - generic [ref=e72]:
          - img "Movie Poster" [ref=e73]
          - paragraph [ref=e74]: "Sniper: No Nation"
          - paragraph [ref=e75]: Action, 2026
        - generic [ref=e76]:
          - img "Movie Poster" [ref=e77]
          - paragraph [ref=e78]: Send Help
          - paragraph [ref=e79]: Horror, 2026
        - generic [ref=e80]:
          - img "Movie Poster" [ref=e81]
          - paragraph [ref=e82]: Lee Cronin's The Mummy
          - paragraph [ref=e83]: Horror, 2026
        - generic [ref=e84]:
          - img "Movie Poster" [ref=e85]
          - paragraph [ref=e86]: The Super Mario Bros. Movie
          - paragraph [ref=e87]: Family, 2023
        - generic [ref=e88]:
          - img "Movie Poster" [ref=e89]
          - paragraph [ref=e90]: Crime 101
          - paragraph [ref=e91]: Crime, 2026
        - generic [ref=e92]:
          - img "Movie Poster" [ref=e93]
          - paragraph [ref=e94]: GOAT
          - paragraph [ref=e95]: Animation, 2026
        - generic [ref=e96]:
          - img "Movie Poster" [ref=e97]
          - paragraph [ref=e98]: "The Strangers: Chapter 3"
          - paragraph [ref=e99]: Horror, 2026
        - generic [ref=e100]:
          - img "Movie Poster" [ref=e101]
          - paragraph [ref=e102]: "Demon Slayer: Kimetsu no Yaiba Infinity Castle"
          - paragraph [ref=e103]: Animation, 2025
      - list [ref=e105]:
        - listitem [ref=e106]:
          - button "Previous page" [disabled] [ref=e107]: Previous
        - listitem [ref=e108]:
          - button "Page 1 is your current page" [ref=e109]: "1"
        - listitem [ref=e110]:
          - button "Page 2" [ref=e111]: "2"
        - listitem [ref=e112]:
          - button "Page 3" [ref=e113]: "3"
        - listitem [ref=e114]:
          - button "Page 4" [ref=e115]: "4"
        - listitem [ref=e116]:
          - button "..." [ref=e117]
        - listitem [ref=e118]:
          - button "Page 56291" [ref=e119]: "56291"
        - listitem [ref=e120]:
          - button "Page 56292" [ref=e121]: "56292"
        - listitem [ref=e122]:
          - button "Page 56293" [ref=e123]: "56293"
        - listitem [ref=e124]:
          - button "Next page" [ref=e125]: Next
  - complementary [ref=e126]:
    - paragraph [ref=e127]: DISCOVER OPTIONS
    - generic [ref=e128]:
      - paragraph [ref=e129]: Type
      - generic [ref=e132]:
        - generic [ref=e133]:
          - generic [ref=e134]: Movie
          - textbox [ref=e137]
        - img [ref=e141]
      - paragraph [ref=e143]: Genre
      - generic [ref=e146]:
        - generic [ref=e147]:
          - generic [ref=e148]: Select...
          - textbox [ref=e151]
        - img [ref=e155]
      - paragraph [ref=e157]: Year
      - generic [ref=e158]:
        - generic [ref=e161]:
          - generic [ref=e162]:
            - generic [ref=e163]: "1900"
            - textbox [ref=e166]
          - img [ref=e170]
        - generic [ref=e172]: "-"
        - generic [ref=e175]:
          - generic [ref=e176]:
            - generic [ref=e177]: "2025"
            - textbox [ref=e180]
          - img [ref=e184]
      - paragraph [ref=e186]: Ratings
      - radiogroup [ref=e187]:
        - listitem [ref=e188] [cursor=pointer]:
          - radio "★ ★" [ref=e189]:
            - generic [ref=e190]: ★
            - generic [ref=e191]: ★
        - listitem [ref=e192] [cursor=pointer]:
          - radio "★ ★" [ref=e193]:
            - generic [ref=e194]: ★
            - generic [ref=e195]: ★
        - listitem [ref=e196] [cursor=pointer]:
          - radio "★ ★" [ref=e197]:
            - generic [ref=e198]: ★
            - generic [ref=e199]: ★
        - listitem [ref=e200] [cursor=pointer]:
          - radio "★ ★" [ref=e201]:
            - generic [ref=e202]: ★
            - generic [ref=e203]: ★
        - listitem [ref=e204] [cursor=pointer]:
          - radio "★ ★" [ref=e205]:
            - generic [ref=e206]: ★
            - generic [ref=e207]: ★
      - text: "& up"
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { HomePage, CATEGORIES } from '../../pages/HomePage.js';
  3   | import logger from '../../utils/logger.js';
  4   | 
  5   | test.describe('Category Tabs', () => {
  6   |   let homePage;
  7   | 
  8   |   test.beforeEach(async ({ page }) => {
  9   |     homePage = new HomePage(page);
  10  |     await homePage.goto();
  11  |   });
  12  | 
  13  |   // ── TC-CAT-01 ──────────────────────────────────────────────────────────────
  14  |   test('TC-CAT-01: Default active tab is "Popular" on page load', async () => {
  15  |     logger.step('Verify "Popular" tab is active by default');
  16  | 
  17  |     const activeLink = homePage.page.locator('header nav ul li > a[href="/popular"]');
  18  |     // Active tab uses text-white, inactive tabs use text-blue-500
  19  |     await expect(activeLink).not.toHaveClass(/text-blue-500/);
  20  | 
  21  |     const cardCount = await homePage.getCardCount();
  22  |     logger.info(`Cards loaded on Popular tab: ${cardCount}`);
  23  |     expect(cardCount).toBeGreaterThan(0);
  24  |   });
  25  | 
  26  |   // ── TC-CAT-02 ──────────────────────────────────────────────────────────────
  27  |   test('TC-CAT-02: Clicking "Trend" tab loads new content', async () => {
  28  |     logger.step('Capture card titles on Popular tab');
  29  |     const popularCards = await homePage.getAllCardData();
  30  | 
  31  |     logger.step('Click Trend tab');
  32  |     await homePage.selectCategory(CATEGORIES.TREND);
  33  | 
  34  |     logger.step('Verify Trend tab is now active');
  35  |     const trendLink = homePage.page.locator(`a[href="${CATEGORIES.TREND.href}"]`);
  36  |     await expect(trendLink).not.toHaveClass(/text-blue-500/);
  37  | 
  38  |     logger.step('Verify content has changed');
  39  |     const trendCards = await homePage.getAllCardData();
  40  |     expect(trendCards.length).toBeGreaterThan(0);
  41  | 
  42  |     const popularTitles = popularCards.map(c => c.title);
  43  |     const trendTitles   = trendCards.map(c => c.title);
  44  |     // At least some titles should differ between categories
  45  |     const hasNewContent = trendTitles.some(t => !popularTitles.includes(t));
  46  |     logger.info(`Trend tab shows different content: ${hasNewContent}`);
  47  |     expect(hasNewContent).toBe(true);
  48  |   });
  49  | 
  50  |   // ── TC-CAT-03 ──────────────────────────────────────────────────────────────
  51  |   test('TC-CAT-03: Clicking "Newest" tab loads content', async () => {
  52  |     logger.step('Click Newest tab');
  53  |     await homePage.selectCategory(CATEGORIES.NEWEST);
  54  | 
  55  |     const newestLink = homePage.page.locator(`a[href="${CATEGORIES.NEWEST.href}"]`);
  56  |     await expect(newestLink).not.toHaveClass(/text-blue-500/);
  57  | 
  58  |     const cardCount = await homePage.getCardCount();
  59  |     logger.info(`Cards on Newest tab: ${cardCount}`);
  60  |     expect(cardCount).toBeGreaterThan(0);
  61  |   });
  62  | 
  63  |   // ── TC-CAT-04 ──────────────────────────────────────────────────────────────
  64  |   test('TC-CAT-04: Clicking "Top rated" tab loads content', async () => {
  65  |     logger.step('Click Top rated tab');
  66  |     await homePage.selectCategory(CATEGORIES.TOP_RATED);
  67  | 
  68  |     const topRatedLink = homePage.page.locator(`a[href="${CATEGORIES.TOP_RATED.href}"]`);
  69  |     await expect(topRatedLink).not.toHaveClass(/text-blue-500/);
  70  | 
  71  |     const cardCount = await homePage.getCardCount();
  72  |     logger.info(`Cards on Top Rated tab: ${cardCount}`);
  73  |     expect(cardCount).toBeGreaterThan(0);
  74  |   });
  75  | 
  76  |   // ── TC-CAT-05 ──────────────────────────────────────────────────────────────
  77  |   test('TC-CAT-05: All four category tabs are visible in the nav', async () => {
  78  |     logger.step('Verify all 4 category links are present');
  79  | 
  80  |     for (const category of Object.values(CATEGORIES)) {
  81  |       const link = homePage.page.locator(`a[href="${category.href}"]`);
> 82  |       await expect(link).toBeVisible();
      |                          ^ Error: expect(locator).toBeVisible() failed
  83  |       logger.info(`Tab visible: ${category.label}`);
  84  |     }
  85  |   });
  86  | 
  87  |   // ── TC-CAT-06 ──────────────────────────────────────────────────────────────
  88  |   test('TC-CAT-06: Only one tab is active at a time', async () => {
  89  |     logger.step('Click through each tab and verify only one is active');
  90  | 
  91  |     for (const category of Object.values(CATEGORIES)) {
  92  |       await homePage.selectCategory(category);
  93  |       logger.step(`Active tab: ${category.label}`);
  94  | 
  95  |       // The active tab link should NOT have text-blue-500
  96  |       const activeLink = homePage.page.locator(`a[href="${category.href}"]`);
  97  |       await expect(activeLink).not.toHaveClass(/text-blue-500/);
  98  | 
  99  |       // All other tabs should have text-blue-500
  100 |       for (const other of Object.values(CATEGORIES)) {
  101 |         if (other.href === category.href) continue;
  102 |         const otherLink = homePage.page.locator(`a[href="${other.href}"]`);
  103 |         await expect(otherLink).toHaveClass(/text-blue-500/);
  104 |       }
  105 |     }
  106 |   });
  107 | 
  108 |   // ── TC-CAT-07 (Negative) ───────────────────────────────────────────────────
  109 |   test('TC-CAT-07 [NEGATIVE]: Accessing category via direct URL slug may fail', async ({ page }) => {
  110 |     logger.step('Navigate directly to /popular slug');
  111 |     await page.goto('/popular');
  112 |     await page.waitForLoadState('networkidle');
  113 | 
  114 |     // Known issue: direct slug access may not render correctly
  115 |     // We document the behaviour rather than assert a pass
  116 |     const cards = page.locator('div.grid.grid-cols-3 > div.flex.flex-col.items-center');
  117 |     const count = await cards.count();
  118 |     logger.warn(`[KNOWN BUG] Direct slug /popular — cards rendered: ${count}`);
  119 | 
  120 |     // Take screenshot as evidence for bug report
  121 |     await page.screenshot({ path: 'test-results/screenshots/tc-cat-07-direct-slug.png' });
  122 | 
  123 |     // We still check that the page at least renders the nav
  124 |     const nav = page.locator('header nav');
  125 |     await expect(nav).toBeVisible();
  126 |   });
  127 | });
```