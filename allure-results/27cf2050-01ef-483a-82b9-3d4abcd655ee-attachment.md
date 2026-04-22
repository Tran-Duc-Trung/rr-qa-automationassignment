# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: filtering\search.spec.js >> Search Filter >> TC-SRC-02: Typing a keyword filters cards by title
- Location: tests\filtering\search.spec.js:27:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
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
        - textbox "SEARCH" [active] [ref=e20]: Avatar
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
          - paragraph [ref=e34]: "Avatar Aang: The Last Airbender"
          - paragraph [ref=e35]: Animation, 2026
        - generic [ref=e36]:
          - img "Movie Poster" [ref=e37]
          - paragraph [ref=e38]: "Avatar: Fire and Ash"
          - paragraph [ref=e39]: Science Fiction, 2025
        - generic [ref=e40]:
          - img "Movie Poster" [ref=e41]
          - paragraph [ref=e42]: Send Help
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
          - paragraph [ref=e54]: The Mortuary Assistant
          - paragraph [ref=e55]: Horror, 2026
        - generic [ref=e56]:
          - img "Movie Poster" [ref=e57]
          - paragraph [ref=e58]: Hoppers
          - paragraph [ref=e59]: Animation, 2026
        - generic [ref=e60]:
          - img "Movie Poster" [ref=e61]
          - paragraph [ref=e62]: Shelter
          - paragraph [ref=e63]: Action, 2026
        - generic [ref=e64]:
          - img "Movie Poster" [ref=e65]
          - paragraph [ref=e66]: Balls Up
          - paragraph [ref=e67]: Comedy, 2026
        - generic [ref=e68]:
          - img "Movie Poster" [ref=e69]
          - paragraph [ref=e70]: Thrash
          - paragraph [ref=e71]: Horror, 2026
        - generic [ref=e72]:
          - img "Movie Poster" [ref=e73]
          - paragraph [ref=e74]: "Greenland 2: Migration"
          - paragraph [ref=e75]: Adventure, 2026
        - generic [ref=e76]:
          - img "Movie Poster" [ref=e77]
          - paragraph [ref=e78]: Lee Cronin's The Mummy
          - paragraph [ref=e79]: Horror, 2026
        - generic [ref=e80]:
          - img "Movie Poster" [ref=e81]
          - paragraph [ref=e82]: Crime 101
          - paragraph [ref=e83]: Crime, 2026
        - generic [ref=e84]:
          - img "Movie Poster" [ref=e85]
          - paragraph [ref=e86]: The Super Mario Bros. Movie
          - paragraph [ref=e87]: Family, 2023
        - generic [ref=e88]:
          - img "Movie Poster" [ref=e89]
          - paragraph [ref=e90]: "The Strangers: Chapter 3"
          - paragraph [ref=e91]: Horror, 2026
        - generic [ref=e92]:
          - img "Movie Poster" [ref=e93]
          - paragraph [ref=e94]: "Sniper: No Nation"
          - paragraph [ref=e95]: Action, 2026
        - generic [ref=e96]:
          - img "Movie Poster" [ref=e97]
          - paragraph [ref=e98]: GOAT
          - paragraph [ref=e99]: Animation, 2026
        - generic [ref=e100]:
          - img "Movie Poster" [ref=e101]
          - paragraph [ref=e102]: undertone
          - paragraph [ref=e103]: Horror, 2026
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
          - button "Page 56312" [ref=e119]: "56312"
        - listitem [ref=e120]:
          - button "Page 56313" [ref=e121]: "56313"
        - listitem [ref=e122]:
          - button "Page 56314" [ref=e123]: "56314"
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
  2   | import { HomePage } from '../../pages/HomePage.js';
  3   | import logger from '../../utils/logger.js';
  4   | 
  5   | test.describe('Search Filter', () => {
  6   |   let homePage;
  7   | 
  8   |   test.beforeEach(async ({ page }) => {
  9   |     homePage = new HomePage(page);
  10  |     await homePage.goto();
  11  |   });
  12  | 
  13  |   // ── TC-SRC-01 ──────────────────────────────────────────────────────────────
  14  |   test('TC-SRC-01: Search input is visible and has correct placeholder', async () => {
  15  |     logger.step('Verify search input is visible');
  16  |     await expect(homePage.searchInput).toBeVisible();
  17  | 
  18  |     logger.step('Verify placeholder text is "SEARCH"');
  19  |     await expect(homePage.searchInput).toHaveAttribute('placeholder', 'SEARCH');
  20  | 
  21  |     logger.step('Verify search icon is visible');
  22  |     const icon = homePage.page.locator('img[alt="Search Icon"]');
  23  |     await expect(icon).toBeVisible();
  24  |   });
  25  | 
  26  |   // ── TC-SRC-02 ──────────────────────────────────────────────────────────────
  27  |   test('TC-SRC-02: Typing a keyword filters cards by title', async () => {
  28  |     const keyword = 'Avatar';
  29  |     logger.step(`Search for keyword: "${keyword}"`);
  30  |     await homePage.search(keyword);
  31  | 
  32  |     logger.step('Verify at least one card is returned');
  33  |     const cardCount = await homePage.getCardCount();
  34  |     logger.info(`Cards found for "${keyword}": ${cardCount}`);
  35  |     expect(cardCount).toBeGreaterThan(0);
  36  | 
  37  |     logger.step('Verify returned card titles contain the keyword');
  38  |     const cards = await homePage.getAllCardData();
  39  |     const allMatch = cards.every(card =>
  40  |       card.title.toLowerCase().includes(keyword.toLowerCase())
  41  |     );
  42  |     logger.info(`All titles match keyword: ${allMatch}`);
> 43  |     expect(allMatch).toBe(true);
      |                      ^ Error: expect(received).toBe(expected) // Object.is equality
  44  |   });
  45  | 
  46  |   // ── TC-SRC-03 ──────────────────────────────────────────────────────────────
  47  |   test('TC-SRC-03: Search is case-insensitive', async () => {
  48  |     logger.step('Search with lowercase keyword "avatar"');
  49  |     await homePage.search('avatar');
  50  |     const lowercaseCount = await homePage.getCardCount();
  51  | 
  52  |     logger.step('Clear and search with uppercase keyword "AVATAR"');
  53  |     await homePage.clearSearch();
  54  |     await homePage.search('AVATAR');
  55  |     const uppercaseCount = await homePage.getCardCount();
  56  | 
  57  |     logger.info(`lowercase results: ${lowercaseCount}, uppercase results: ${uppercaseCount}`);
  58  |     expect(lowercaseCount).toBe(uppercaseCount);
  59  |   });
  60  | 
  61  |   // ── TC-SRC-04 ──────────────────────────────────────────────────────────────
  62  |   test('TC-SRC-04: Clearing search input restores original results', async () => {
  63  |     logger.step('Capture initial card count');
  64  |     const initialCount = await homePage.getCardCount();
  65  | 
  66  |     logger.step('Search for a keyword');
  67  |     await homePage.search('Batman');
  68  |     const filteredCount = await homePage.getCardCount();
  69  |     logger.info(`Filtered count: ${filteredCount}`);
  70  | 
  71  |     logger.step('Clear the search input');
  72  |     await homePage.clearSearch();
  73  |     await homePage.waitForCardsLoaded();
  74  | 
  75  |     const restoredCount = await homePage.getCardCount();
  76  |     logger.info(`Restored count: ${restoredCount}, initial was: ${initialCount}`);
  77  |     expect(restoredCount).toBe(initialCount);
  78  |   });
  79  | 
  80  |   // ── TC-SRC-05 ──────────────────────────────────────────────────────────────
  81  |   test('TC-SRC-05: Search with partial title returns relevant results', async () => {
  82  |     const partial = 'Ava'; // partial of "Avatar"
  83  |     logger.step(`Search with partial keyword: "${partial}"`);
  84  |     await homePage.search(partial);
  85  | 
  86  |     const cardCount = await homePage.getCardCount();
  87  |     logger.info(`Results for partial "${partial}": ${cardCount}`);
  88  |     expect(cardCount).toBeGreaterThan(0);
  89  | 
  90  |     const cards = await homePage.getAllCardData();
  91  |     const allMatch = cards.every(card =>
  92  |       card.title.toLowerCase().includes(partial.toLowerCase())
  93  |     );
  94  |     expect(allMatch).toBe(true);
  95  |   });
  96  | 
  97  |   // ── TC-SRC-06 (Negative) ───────────────────────────────────────────────────
  98  |   test('TC-SRC-06 [NEGATIVE]: Search with non-existent title shows no results or empty state', async () => {
  99  |     const keyword = 'XYZXYZXYZ_NO_MATCH_123';
  100 |     logger.step(`Search with nonsense keyword: "${keyword}"`);
  101 |     await homePage.search(keyword);
  102 | 
  103 |     // Wait briefly for response
  104 |     await homePage.page.waitForTimeout(2000);
  105 | 
  106 |     const cardCount = await homePage.getCardCount();
  107 |     logger.info(`Cards for non-existent search: ${cardCount}`);
  108 |     expect(cardCount).toBe(0);
  109 | 
  110 |     await homePage.page.screenshot({
  111 |       path: 'test-results/screenshots/tc-src-06-no-results.png',
  112 |     });
  113 |   });
  114 | 
  115 |   // ── TC-SRC-07 ──────────────────────────────────────────────────────────────
  116 |   test('TC-SRC-07: Search result updates as user types (live search)', async () => {
  117 |     logger.step('Type characters one by one and check results change');
  118 | 
  119 |     await homePage.searchInput.click();
  120 |     await homePage.searchInput.pressSequentially('Av', { delay: 150 });
  121 |     await homePage.page.waitForLoadState('networkidle');
  122 |     const twoCharCount = await homePage.getCardCount();
  123 |     logger.info(`Results after "Av": ${twoCharCount}`);
  124 | 
  125 |     await homePage.searchInput.pressSequentially('a', { delay: 150 });
  126 |     await homePage.page.waitForLoadState('networkidle');
  127 |     const threeCharCount = await homePage.getCardCount();
  128 |     logger.info(`Results after "Ava": ${threeCharCount}`);
  129 | 
  130 |     // More specific search should return <= results
  131 |     expect(threeCharCount).toBeLessThanOrEqual(twoCharCount);
  132 |   });
  133 | 
  134 |   // ── TC-SRC-08 (Negative) ───────────────────────────────────────────────────
  135 |   test('TC-SRC-08 [NEGATIVE]: Search with special characters does not crash the page', async () => {
  136 |     const keyword = '!@#$%^&*()';
  137 |     logger.step(`Search with special characters: "${keyword}"`);
  138 |     await homePage.search(keyword);
  139 | 
  140 |     await homePage.page.waitForTimeout(1500);
  141 | 
  142 |     logger.step('Verify page is still functional (nav is visible)');
  143 |     const nav = homePage.page.locator('header nav');
```