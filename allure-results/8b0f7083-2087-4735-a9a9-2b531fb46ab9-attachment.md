# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: filtering\year.spec.js >> Year Filter >> TC-YR-04: Selecting a specific To year filters results
- Location: tests\filtering\year.spec.js:68:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "2015"
Received: "2025"
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
          - paragraph [ref=e26]: Nefeli
          - paragraph [ref=e27]: Romance, 1980
        - generic [ref=e28]:
          - img "Movie Poster" [ref=e29]
          - paragraph [ref=e30]: The Adolescent
          - paragraph [ref=e31]: Drama, 1979
        - generic [ref=e32]:
          - img "Movie Poster" [ref=e33]
          - paragraph [ref=e34]: Madness
          - paragraph [ref=e35]: Thriller, 1980
        - generic [ref=e36]:
          - img "Movie Poster" [ref=e37]
          - paragraph [ref=e38]: Secret Pleasures
          - paragraph [ref=e39]: Drama, 2002
        - generic [ref=e40]:
          - img "Movie Poster" [ref=e41]
          - paragraph [ref=e42]: Do or Die
          - paragraph [ref=e43]: Action, 1991
        - generic [ref=e44]:
          - img "Movie Poster" [ref=e45]
          - paragraph [ref=e46]: Midnight Matinee
          - paragraph [ref=e47]: Horror, 1988
        - generic [ref=e48]:
          - img "Movie Poster" [ref=e49]
          - paragraph [ref=e50]: レイプ仕掛人
          - paragraph [ref=e51]: Drama, 1997
        - generic [ref=e52]:
          - img "Movie Poster" [ref=e53]
          - paragraph [ref=e54]: Amazon Jail
          - paragraph [ref=e55]: Thriller, 1982
        - generic [ref=e56]:
          - img "Movie Poster" [ref=e57]
          - paragraph [ref=e58]: Triple Crossed
          - paragraph [ref=e59]: Mystery, 2013
        - generic [ref=e60]:
          - img "Movie Poster" [ref=e61]
          - paragraph [ref=e62]: Pussycat, Pussycat, I Love You
          - paragraph [ref=e63]: Comedy, 1970
        - generic [ref=e64]:
          - img "Movie Poster" [ref=e65]
          - paragraph [ref=e66]: The Story of Ong-nyeo
          - paragraph [ref=e67]: Romance, 2014
        - generic [ref=e68]:
          - img "Movie Poster" [ref=e69]
          - paragraph [ref=e70]: Crazy Underwear
          - paragraph [ref=e71]: Comedy, 1992
        - generic [ref=e72]:
          - img "Movie Poster" [ref=e73]
          - paragraph [ref=e74]: Monika
          - paragraph [ref=e75]: Romance, 1974
        - generic [ref=e76]:
          - img "Movie Poster" [ref=e77]
          - paragraph [ref=e78]: Cloud
          - paragraph [ref=e79]: Drama, 2007
        - generic [ref=e80]:
          - img "Movie Poster" [ref=e81]
          - paragraph [ref=e82]: The Diary of Di-Di
          - paragraph [ref=e83]: ", 1978"
        - generic [ref=e84]:
          - img "Movie Poster" [ref=e85]
          - paragraph [ref=e86]: "The Quest of the Sex: A Holly Hole"
          - paragraph [ref=e87]: Drama, 2005
        - generic [ref=e88]:
          - img "Movie Poster" [ref=e89]
          - paragraph [ref=e90]: La svergognata
          - paragraph [ref=e91]: Romance, 1974
        - generic [ref=e92]:
          - img "Movie Poster" [ref=e93]
          - paragraph [ref=e94]: "True Story of a Woman in Jail: Continues"
          - paragraph [ref=e95]: Action, 1975
        - generic [ref=e96]:
          - img "Movie Poster" [ref=e97]
          - paragraph [ref=e98]: Senario XX
          - paragraph [ref=e99]: Comedy, 2005
        - generic [ref=e100]:
          - img "Movie Poster" [ref=e101]
          - paragraph [ref=e102]: The Imp
          - paragraph [ref=e103]: Horror, 1996
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
          - button "Page 21683" [ref=e119]: "21683"
        - listitem [ref=e120]:
          - button "Page 21684" [ref=e121]: "21684"
        - listitem [ref=e122]:
          - button "Page 21685" [ref=e123]: "21685"
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
        - generic [ref=e173]:
          - generic [ref=e174]: option 2015, selected. Select is focused ,type to refine list, press Down to open the menu,
          - generic [ref=e175]:
            - generic [ref=e176]:
              - generic [ref=e177]: "2015"
              - textbox [active] [ref=e180]
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
  5   | test.describe('Year Filter', () => {
  6   |   let homePage;
  7   | 
  8   |   test.beforeEach(async ({ page }) => {
  9   |     homePage = new HomePage(page);
  10  |     await homePage.goto();
  11  |   });
  12  | 
  13  |   // ── TC-YR-01 ───────────────────────────────────────────────────────────────
  14  |   test('TC-YR-01: Default Year range is 1900 to 2025', async () => {
  15  |     logger.step('Verify default Year From and Year To values');
  16  |     const { from, to } = await homePage.getSelectedYears();
  17  |     logger.info(`Default year range: ${from} – ${to}`);
  18  |     expect(from).toBe('1900');
  19  |     expect(to).toBe('2025');
  20  |   });
  21  | 
  22  |   // ── TC-YR-02 ───────────────────────────────────────────────────────────────
  23  |   test('TC-YR-02: Year From dropdown has options from 1900 to 2025', async () => {
  24  |     logger.step('Open Year From dropdown');
  25  |     await homePage.page.locator('aside').locator('[class*="-control"]').nth(2).click();
  26  | 
  27  |     logger.step('Verify first option is 1900');
  28  |     const firstOpt = homePage.page.locator('#react-select-4-option-0');
  29  |     await expect(firstOpt).toHaveText('1900');
  30  | 
  31  |     logger.step('Scroll to verify last option is 2025');
  32  |     const lastOpt = homePage.page.locator('#react-select-4-option-125');
  33  |     await lastOpt.scrollIntoViewIfNeeded();
  34  |     await expect(lastOpt).toHaveText('2025');
  35  | 
  36  |     logger.info('Year From range confirmed: 1900–2025 (126 options)');
  37  | 
  38  |     // Close dropdown
  39  |     await homePage.page.keyboard.press('Escape');
  40  |   });
  41  | 
  42  |   // ── TC-YR-03 ───────────────────────────────────────────────────────────────
  43  |   test('TC-YR-03: Selecting a specific From year filters results', async () => {
  44  |     const fromYear = 2020;
  45  |     logger.step(`Set Year From to ${fromYear}`);
  46  |     await homePage.selectYearFrom(fromYear);
  47  | 
  48  |     const { from } = await homePage.getSelectedYears();
  49  |     logger.info(`Year From after selection: ${from}`);
  50  |     expect(from).toBe(String(fromYear));
  51  | 
  52  |     logger.step('Verify cards are still loaded');
  53  |     const cardCount = await homePage.getCardCount();
  54  |     logger.info(`Cards after Year From ${fromYear}: ${cardCount}`);
  55  |     expect(cardCount).toBeGreaterThan(0);
  56  | 
  57  |     logger.step('Verify all card years are >= fromYear');
  58  |     const cards = await homePage.getAllCardData();
  59  |     const allValid = cards.every(card => {
  60  |       const year = parseInt(card.year);
  61  |       return isNaN(year) || year >= fromYear;
  62  |     });
  63  |     logger.info(`All cards have year >= ${fromYear}: ${allValid}`);
  64  |     expect(allValid).toBe(true);
  65  |   });
  66  | 
  67  |   // ── TC-YR-04 ───────────────────────────────────────────────────────────────
  68  |   test('TC-YR-04: Selecting a specific To year filters results', async () => {
  69  |     const toYear = 2015;
  70  |     logger.step(`Set Year To to ${toYear}`);
  71  |     await homePage.selectYearTo(toYear);
  72  | 
  73  |     const { to } = await homePage.getSelectedYears();
  74  |     logger.info(`Year To after selection: ${to}`);
> 75  |     expect(to).toBe(String(toYear));
      |                ^ Error: expect(received).toBe(expected) // Object.is equality
  76  | 
  77  |     const cardCount = await homePage.getCardCount();
  78  |     logger.info(`Cards after Year To ${toYear}: ${cardCount}`);
  79  |     expect(cardCount).toBeGreaterThanOrEqual(0);
  80  | 
  81  |     logger.step('Verify all card years are <= toYear');
  82  |     const cards = await homePage.getAllCardData();
  83  |     const allValid = cards.every(card => {
  84  |       const year = parseInt(card.year);
  85  |       return isNaN(year) || year <= toYear;
  86  |     });
  87  |     logger.info(`All cards have year <= ${toYear}: ${allValid}`);
  88  |     expect(allValid).toBe(true);
  89  |   });
  90  | 
  91  |   // ── TC-YR-05 ───────────────────────────────────────────────────────────────
  92  |   test('TC-YR-05: Selecting a year range (2010–2020) returns relevant results', async () => {
  93  |     const fromYear = 2010;
  94  |     const toYear   = 2020;
  95  | 
  96  |     logger.step(`Set year range ${fromYear}–${toYear}`);
  97  |     await homePage.selectYearRange(fromYear, toYear);
  98  | 
  99  |     const { from, to } = await homePage.getSelectedYears();
  100 |     logger.info(`Year range confirmed: ${from}–${to}`);
  101 |     expect(from).toBe(String(fromYear));
  102 |     expect(to).toBe(String(toYear));
  103 | 
  104 |     const cards = await homePage.getAllCardData();
  105 |     logger.info(`Cards in range ${fromYear}–${toYear}: ${cards.length}`);
  106 |     expect(cards.length).toBeGreaterThan(0);
  107 | 
  108 |     const allInRange = cards.every(card => {
  109 |       const year = parseInt(card.year);
  110 |       return isNaN(year) || (year >= fromYear && year <= toYear);
  111 |     });
  112 |     logger.info(`All cards within year range: ${allInRange}`);
  113 |     expect(allInRange).toBe(true);
  114 |   });
  115 | 
  116 |   // ── TC-YR-06 ───────────────────────────────────────────────────────────────
  117 |   test('TC-YR-06: Single year range (same From and To) returns results for that year', async () => {
  118 |     const year = 2023;
  119 |     logger.step(`Set both From and To to ${year}`);
  120 |     await homePage.selectYearRange(year, year);
  121 | 
  122 |     const cards = await homePage.getAllCardData();
  123 |     logger.info(`Cards for year ${year} only: ${cards.length}`);
  124 |     expect(cards.length).toBeGreaterThanOrEqual(0);
  125 | 
  126 |     const allMatch = cards.every(card => {
  127 |       const y = parseInt(card.year);
  128 |       return isNaN(y) || y === year;
  129 |     });
  130 |     logger.info(`All cards are from year ${year}: ${allMatch}`);
  131 |     expect(allMatch).toBe(true);
  132 |   });
  133 | 
  134 |   // ── TC-YR-07 (Negative) ────────────────────────────────────────────────────
  135 |   test('TC-YR-07 [NEGATIVE]: Inverted range (From > To) — observe behaviour', async () => {
  136 |     logger.step('Set From year (2024) greater than To year (2000)');
  137 |     await homePage.selectYearFrom(2024);
  138 |     await homePage.selectYearTo(2000);
  139 | 
  140 |     await homePage.page.waitForTimeout(1500);
  141 | 
  142 |     const cardCount = await homePage.getCardCount();
  143 |     const { from, to } = await homePage.getSelectedYears();
  144 |     logger.warn(`[NEGATIVE] From: ${from}, To: ${to} — cards: ${cardCount}`);
  145 | 
  146 |     await homePage.page.screenshot({
  147 |       path: 'test-results/screenshots/tc-yr-07-inverted-range.png',
  148 |     });
  149 |     // Document behaviour; no hard assertion — this is a boundary condition
  150 |   });
  151 | 
  152 |   // ── TC-YR-08 (API) ─────────────────────────────────────────────────────────
  153 |   test('TC-YR-08: Changing year triggers API call with year params', async () => {
  154 |     logger.step('Collect API calls when changing Year From to 2022');
  155 | 
  156 |     const calls = await homePage.collectApiCalls(async () => {
  157 |       await homePage.selectYearFrom(2022);
  158 |     });
  159 | 
  160 |     expect(calls.length).toBeGreaterThan(0);
  161 |     const firstCall = calls[0];
  162 |     logger.info(`API URL: ${firstCall.url.href}`);
  163 | 
  164 |     const params = firstCall.url.searchParams;
  165 |     const hasYearParam =
  166 |       params.has('primary_release_date.gte') ||
  167 |       params.has('first_air_date.gte') ||
  168 |       params.has('year');
  169 | 
  170 |     logger.info(`API has year param: ${hasYearParam}`);
  171 |     logger.info(`All params: ${params.toString()}`);
  172 | 
  173 |     await homePage.page.screenshot({
  174 |       path: 'test-results/screenshots/tc-yr-08-api-year.png',
  175 |     });
```