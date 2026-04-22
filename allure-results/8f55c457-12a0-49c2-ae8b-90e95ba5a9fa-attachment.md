# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\category.spec.js >> Category Tabs >> TC-CAT-07 [NEGATIVE]: Accessing category via direct URL slug may fail
- Location: tests\ui\category.spec.js:105:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('header nav')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('header nav')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - heading "page not found" [level=1] [ref=e3]
    - img [ref=e5]
  - list [ref=e37]:
    - listitem [ref=e38]:
      - text: powered by
      - link "surge.sh" [ref=e39] [cursor=pointer]:
        - /url: https://surge.sh
```

# Test source

```ts
  21  |         const cardCount = await homePage.getCardCount();
  22  |         logger.info(`Cards loaded on Popular tab: ${cardCount}`);
  23  |         expect(cardCount).toBeGreaterThan(0);
  24  |     });
  25  | 
  26  |     // ── TC-CAT-02 ──────────────────────────────────────────────────────────────
  27  |     test('TC-CAT-02: Clicking "Trend" tab loads new content', async () => {
  28  |         logger.step('Capture card titles on Popular tab');
  29  |         const popularCards = await homePage.getAllCardData();
  30  | 
  31  |         logger.step('Click Trend tab');
  32  |         await homePage.selectCategory(CATEGORIES.TREND);
  33  | 
  34  |         logger.step('Verify Trend tab is now active');
  35  |         const trendLink = homePage.page.locator(`a[href="${CATEGORIES.TREND.href}"]`);
  36  |         await expect(trendLink).not.toHaveClass(/text-blue-500/);
  37  | 
  38  |         logger.step('Verify content has changed');
  39  |         const trendCards = await homePage.getAllCardData();
  40  |         expect(trendCards.length).toBeGreaterThan(0);
  41  | 
  42  |         const popularTitles = popularCards.map(c => c.title);
  43  |         const trendTitles = trendCards.map(c => c.title);
  44  |         // At least some titles should differ between categories
  45  |         const hasNewContent = trendTitles.some(t => !popularTitles.includes(t));
  46  |         logger.info(`Trend tab shows different content: ${hasNewContent}`);
  47  |         expect(hasNewContent).toBe(true);
  48  |     });
  49  | 
  50  |     // ── TC-CAT-03 ──────────────────────────────────────────────────────────────
  51  |     test('TC-CAT-03: Clicking "Newest" tab loads content', async () => {
  52  |         logger.step('Click Newest tab');
  53  |         await homePage.selectCategory(CATEGORIES.NEWEST);
  54  | 
  55  |         const newestLink = homePage.page.locator(`a[href="${CATEGORIES.NEWEST.href}"]`);
  56  |         await expect(newestLink).not.toHaveClass(/text-blue-500/);
  57  | 
  58  |         const cardCount = await homePage.getCardCount();
  59  |         logger.info(`Cards on Newest tab: ${cardCount}`);
  60  |         expect(cardCount).toBeGreaterThan(0);
  61  |     });
  62  | 
  63  |     // ── TC-CAT-04 ──────────────────────────────────────────────────────────────
  64  |     test('TC-CAT-04: Clicking "Top rated" tab loads content', async () => {
  65  |         logger.step('Click Top rated tab');
  66  |         await homePage.selectCategory(CATEGORIES.TOP_RATED);
  67  | 
  68  |         const topRatedLink = homePage.page.locator(`a[href="${CATEGORIES.TOP_RATED.href}"]`);
  69  |         await expect(topRatedLink).not.toHaveClass(/text-blue-500/);
  70  | 
  71  |         const cardCount = await homePage.getCardCount();
  72  |         logger.info(`Cards on Top Rated tab: ${cardCount}`);
  73  |         expect(cardCount).toBeGreaterThan(0);
  74  |     });
  75  | 
  76  |     // ── TC-CAT-05 ──────────────────────────────────────────────────────────────
  77  |     test('TC-CAT-05: All four category tabs are visible in the nav', async () => {
  78  |         logger.step('Verify all 4 category links are present');
  79  | 
  80  |         for (const category of Object.values(CATEGORIES)) {
  81  |             const link = homePage.page.locator(`a[href="${category.href}"]`);
  82  |             await expect(link).toBeVisible();
  83  |             logger.info(`Tab visible: ${category.label}`);
  84  |         }
  85  |     });
  86  | 
  87  |     // ── TC-CAT-06 ──────────────────────────────────────────────────────────────
  88  |     test('TC-CAT-06: Only one tab is active at a time', async () => {
  89  |         for (const category of Object.values(CATEGORIES)) {
  90  |             await homePage.selectCategory(category);
  91  | 
  92  |             // Check đúng: class nằm trên <li>, không phải <a>
  93  |             const activeLi = homePage.page.locator(`li:has(a[href="${category.href}"])`);
  94  |             await expect(activeLi).toHaveClass(/text-white/);
  95  | 
  96  |             // Verify chỉ đúng 1 tab có text-white
  97  |             const activeCount = await homePage.page
  98  |                 .locator('header nav ul li.text-white, header nav ul li[class*="text-white"]')
  99  |                 .count();
  100 |             expect(activeCount).toBe(1);
  101 |         }
  102 |     });
  103 | 
  104 |     // ── TC-CAT-07 (Negative) ───────────────────────────────────────────────────
  105 |     test('TC-CAT-07 [NEGATIVE]: Accessing category via direct URL slug may fail', async ({ page }) => {
  106 |         logger.step('Navigate directly to /popular slug');
  107 |         await page.goto('/popular');
  108 |         await page.waitForLoadState('networkidle');
  109 | 
  110 |         // Known issue: direct slug access may not render correctly
  111 |         // We document the behaviour rather than assert a pass
  112 |         const cards = page.locator('div.grid.grid-cols-3 > div.flex.flex-col.items-center');
  113 |         const count = await cards.count();
  114 |         logger.warn(`[KNOWN BUG] Direct slug /popular — cards rendered: ${count}`);
  115 | 
  116 |         // Take screenshot as evidence for bug report
  117 |         await page.screenshot({ path: 'test-results/screenshots/tc-cat-07-direct-slug.png' });
  118 | 
  119 |         // We still check that the page at least renders the nav
  120 |         const nav = page.locator('header nav');
> 121 |         await expect(nav).toBeVisible();
      |                           ^ Error: expect(locator).toBeVisible() failed
  122 |     });
  123 | });
```