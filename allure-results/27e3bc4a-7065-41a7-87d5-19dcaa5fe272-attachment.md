# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: filtering\genre.spec.js >> Genre Filter >> TC-GNR-06: Genre + Type combined filter returns relevant results
- Location: tests\filtering\genre.spec.js:94:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Animation"
Received: "Comedy"
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
          - paragraph [ref=e26]: "LBW: Love Beyond Wicket"
          - paragraph [ref=e27]: Drama, 2026
        - generic [ref=e28]:
          - img "Movie Poster" [ref=e29]
          - paragraph [ref=e30]: "Mama Is a Bartender: Let's Dance Tonight"
          - paragraph [ref=e31]: Comedy, 2023
        - generic [ref=e32]:
          - img "Movie Poster" [ref=e33]
          - paragraph [ref=e34]: Wooju Bakery
          - paragraph [ref=e35]: Comedy, 2026
        - generic [ref=e36]:
          - img "Movie Poster" [ref=e37]
          - paragraph [ref=e38]: Nonstop
          - paragraph [ref=e39]: Drama, 2000
        - generic [ref=e40]:
          - img "Movie Poster" [ref=e41]
          - paragraph [ref=e42]: Uncle Grandpa
          - paragraph [ref=e43]: Comedy, 2013
        - generic [ref=e44]:
          - img "Movie Poster" [ref=e45]
          - paragraph [ref=e46]: HK 80's
          - paragraph [ref=e47]: Comedy, 1981
        - generic [ref=e48]:
          - img "Movie Poster" [ref=e49]
          - paragraph [ref=e50]: The Share House's Secret Rule
          - paragraph [ref=e51]: Animation, 2025
        - generic [ref=e52]:
          - img "Movie Poster" [ref=e53]
          - paragraph [ref=e54]: Sweet Tasks
          - paragraph [ref=e55]: Talk, 2019
        - generic [ref=e56]:
          - img "Movie Poster" [ref=e57]
          - paragraph [ref=e58]: El hormiguero
          - paragraph [ref=e59]: Comedy, 2006
        - generic [ref=e60]:
          - img "Movie Poster" [ref=e61]
          - paragraph [ref=e62]: Bez Bebek
          - paragraph [ref=e63]: Kids, 2007
        - generic [ref=e64]:
          - img "Movie Poster" [ref=e65]
          - paragraph [ref=e66]: A Kindred Spirit
          - paragraph [ref=e67]: Drama, 1995
        - generic [ref=e68]:
          - img "Movie Poster" [ref=e69]
          - paragraph [ref=e70]: Plus belle la vie
          - paragraph [ref=e71]: Drama, 2004
        - generic [ref=e72]:
          - img "Movie Poster" [ref=e73]
          - paragraph [ref=e74]: Downtown no Gaki no Tsukai ya Arahende!!
          - paragraph [ref=e75]: Action & Adventure, 1989
        - generic [ref=e76]:
          - img "Movie Poster" [ref=e77]
          - paragraph [ref=e78]: Irresistible She
          - paragraph [ref=e79]: Comedy, 2021
        - generic [ref=e80]:
          - img "Movie Poster" [ref=e81]
          - paragraph [ref=e82]: Ulice
          - paragraph [ref=e83]: Drama, 2005
        - generic [ref=e84]:
          - img "Movie Poster" [ref=e85]
          - paragraph [ref=e86]: Pickle & Peanut
          - paragraph [ref=e87]: Comedy, 2015
        - generic [ref=e88]:
          - img "Movie Poster" [ref=e89]
          - paragraph [ref=e90]: Roast
          - paragraph [ref=e91]: Comedy, 2017
        - generic [ref=e92]:
          - img "Movie Poster" [ref=e93]
          - paragraph [ref=e94]: Resort
          - paragraph [ref=e95]: Comedy, 2026
        - generic [ref=e96]:
          - img "Movie Poster" [ref=e97]
          - paragraph [ref=e98]: Moterys meluoja geriau
          - paragraph [ref=e99]: Comedy, 2008
        - generic [ref=e100]:
          - img "Movie Poster" [ref=e101]
          - paragraph [ref=e102]: Wonderful Precure!
          - paragraph [ref=e103]: Animation, 2024
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
          - button "Page 712" [ref=e119]: "712"
        - listitem [ref=e120]:
          - button "Page 713" [ref=e121]: "713"
        - listitem [ref=e122]:
          - button "Page 714" [ref=e123]: "714"
        - listitem [ref=e124]:
          - button "Next page" [ref=e125]: Next
  - complementary [ref=e126]:
    - paragraph [ref=e127]: DISCOVER OPTIONS
    - generic [ref=e128]:
      - paragraph [ref=e129]: Type
      - generic [ref=e132]:
        - generic [ref=e133]:
          - generic [ref=e134]: TV Shows
          - textbox [ref=e137]
        - img [ref=e141]
      - paragraph [ref=e143]: Genre
      - generic [ref=e144]:
        - generic [ref=e145]: option Comedy, selected. Select is focused ,type to refine list, press Down to open the menu, press left to focus selected values
        - generic [ref=e146]:
          - generic [ref=e147]:
            - generic [ref=e148]:
              - generic [ref=e149]: Comedy
              - img [ref=e151]
            - textbox [active] [ref=e155]
          - generic [ref=e156]:
            - img [ref=e158]
            - img [ref=e162]
      - paragraph [ref=e164]: Year
      - generic [ref=e165]:
        - generic [ref=e168]:
          - generic [ref=e169]:
            - generic [ref=e170]: "1900"
            - textbox [ref=e173]
          - img [ref=e177]
        - generic [ref=e179]: "-"
        - generic [ref=e182]:
          - generic [ref=e183]:
            - generic [ref=e184]: "2025"
            - textbox [ref=e187]
          - img [ref=e191]
      - paragraph [ref=e193]: Ratings
      - radiogroup [ref=e194]:
        - listitem [ref=e195] [cursor=pointer]:
          - radio "★ ★" [ref=e196]:
            - generic [ref=e197]: ★
            - generic [ref=e198]: ★
        - listitem [ref=e199] [cursor=pointer]:
          - radio "★ ★" [ref=e200]:
            - generic [ref=e201]: ★
            - generic [ref=e202]: ★
        - listitem [ref=e203] [cursor=pointer]:
          - radio "★ ★" [ref=e204]:
            - generic [ref=e205]: ★
            - generic [ref=e206]: ★
        - listitem [ref=e207] [cursor=pointer]:
          - radio "★ ★" [ref=e208]:
            - generic [ref=e209]: ★
            - generic [ref=e210]: ★
        - listitem [ref=e211] [cursor=pointer]:
          - radio "★ ★" [ref=e212]:
            - generic [ref=e213]: ★
            - generic [ref=e214]: ★
      - text: "& up"
```

# Test source

```ts
  12  | 
  13  |   // ── TC-GNR-01 ──────────────────────────────────────────────────────────────
  14  |   test('TC-GNR-01: Genre dropdown shows placeholder "Select..." by default', async () => {
  15  |     logger.step('Verify Genre dropdown shows placeholder text');
  16  |     const placeholder = homePage.page.locator('p:has-text("Genre") + div [class*="-placeholder"]');
  17  |     await expect(placeholder).toBeVisible();
  18  |     logger.info('Genre placeholder verified');
  19  |   });
  20  | 
  21  |   // ── TC-GNR-02 ──────────────────────────────────────────────────────────────
  22  |   test('TC-GNR-02: Genre dropdown opens and lists all 19 options', async () => {
  23  |     logger.step('Open Genre dropdown');
  24  |     await homePage.page.locator('p:has-text("Genre") + div [class*="-placeholder"]').click();
  25  | 
  26  |     logger.step('Verify all 19 genre options are present');
  27  |     for (const genre of Object.values(GENRES)) {
  28  |       const option = homePage.page.locator(`#react-select-3-option-${genre.index}`);
  29  |       await expect(option).toBeVisible();
  30  |       logger.info(`Genre option visible: ${genre.label} (index ${genre.index})`);
  31  |     }
  32  |   });
  33  | 
  34  |   // ── TC-GNR-03 ──────────────────────────────────────────────────────────────
  35  |   test('TC-GNR-03: Selecting "Action" genre filters results', async () => {
  36  |     logger.step('Capture initial card count');
  37  |     const initialCount = await homePage.getCardCount();
  38  | 
  39  |     logger.step('Select "Action" genre');
  40  |     await homePage.selectGenre(GENRES.ACTION);
  41  | 
  42  |     logger.step('Verify Genre shows "Action"');
  43  |     const selected = await homePage.getSelectedGenre();
  44  |     logger.info(`Selected genre: "${selected}"`);
  45  |     expect(selected).toBe(GENRES.ACTION.label);
  46  | 
  47  |     logger.step('Verify cards are loaded');
  48  |     const filteredCount = await homePage.getCardCount();
  49  |     logger.info(`Cards after Action filter: ${filteredCount}`);
  50  |     expect(filteredCount).toBeGreaterThan(0);
  51  | 
  52  |     logger.step('Verify card meta contains "Action"');
  53  |     const cards = await homePage.getAllCardData();
  54  |     const actionCards = cards.filter(c => c.genre.includes('Action'));
  55  |     logger.info(`Cards with Action genre in meta: ${actionCards.length} / ${cards.length}`);
  56  |     // At least some cards should reflect the genre (TMDB data may list multiple genres)
  57  |     expect(actionCards.length).toBeGreaterThan(0);
  58  |   });
  59  | 
  60  |   // ── TC-GNR-04 ──────────────────────────────────────────────────────────────
  61  |   test('TC-GNR-04: Selecting different genres loads different content', async () => {
  62  |     logger.step('Select "Comedy" genre');
  63  |     await homePage.selectGenre(GENRES.COMEDY);
  64  |     const comedyCards = await homePage.getAllCardData();
  65  |     const comedyTitles = comedyCards.map(c => c.title);
  66  | 
  67  |     logger.step('Select "Horror" genre');
  68  |     await homePage.selectGenre(GENRES.HORROR);
  69  |     const horrorCards = await homePage.getAllCardData();
  70  |     const horrorTitles = horrorCards.map(c => c.title);
  71  | 
  72  |     const hasNewContent = horrorTitles.some(t => !comedyTitles.includes(t));
  73  |     logger.info(`Horror shows different content from Comedy: ${hasNewContent}`);
  74  |     expect(hasNewContent).toBe(true);
  75  |   });
  76  | 
  77  |   // ── TC-GNR-05 ──────────────────────────────────────────────────────────────
  78  |   test('TC-GNR-05: Genre filter persists when switching Category tabs', async () => {
  79  |     const { CATEGORIES } = await import('../../pages/HomePage.js');
  80  | 
  81  |     logger.step('Select "Drama" genre');
  82  |     await homePage.selectGenre(GENRES.DRAMA);
  83  | 
  84  |     logger.step('Switch to "Newest" category');
  85  |     await homePage.selectCategory(CATEGORIES.NEWEST);
  86  | 
  87  |     logger.step('Verify "Drama" is still selected');
  88  |     const selected = await homePage.getSelectedGenre();
  89  |     logger.info(`Genre after category switch: "${selected}"`);
  90  |     expect(selected).toBe(GENRES.DRAMA.label);
  91  |   });
  92  | 
  93  |   // ── TC-GNR-06 ──────────────────────────────────────────────────────────────
  94  |   test('TC-GNR-06: Genre + Type combined filter returns relevant results', async () => {
  95  |     const { TYPES } = await import('../../pages/HomePage.js');
  96  | 
  97  |     logger.step('Select "TV Shows" type');
  98  |     await homePage.selectType(TYPES.TV_SHOWS);
  99  | 
  100 |     logger.step('Select "Animation" genre');
  101 |     await homePage.selectGenre(GENRES.ANIMATION);
  102 | 
  103 |     const cardCount = await homePage.getCardCount();
  104 |     logger.info(`Cards for TV Shows + Animation: ${cardCount}`);
  105 |     expect(cardCount).toBeGreaterThanOrEqual(0);
  106 | 
  107 |     // Verify selected values
  108 |     const type = await homePage.getSelectedType();
  109 |     const genre = await homePage.getSelectedGenre();
  110 |     logger.info(`Active filters — Type: "${type}", Genre: "${genre}"`);
  111 |     expect(type).toBe(TYPES.TV_SHOWS.label);
> 112 |     expect(genre).toBe(GENRES.ANIMATION.label);
      |                   ^ Error: expect(received).toBe(expected) // Object.is equality
  113 |   });
  114 | 
  115 |   // ── TC-GNR-07 ──────────────────────────────────────────────────────────────
  116 |   test('TC-GNR-07: All 19 genre options can be selected without errors', async () => {
  117 |     for (const genre of Object.values(GENRES)) {
  118 |       logger.step(`Select genre: ${genre.label}`);
  119 |       await homePage.selectGenre(genre);
  120 | 
  121 |       const selected = await homePage.getSelectedGenre();
  122 |       logger.info(`Selected: "${selected}"`);
  123 |       expect(selected).toBe(genre.label);
  124 | 
  125 |       // Brief pause between selections
  126 |       await homePage.page.waitForTimeout(300);
  127 |     }
  128 |   });
  129 | 
  130 |   // ── TC-GNR-08 (API) ────────────────────────────────────────────────────────
  131 |   test('TC-GNR-08: Selecting a genre triggers an API call with correct genre param', async () => {
  132 |     logger.step('Collect API calls when selecting "Thriller" genre');
  133 | 
  134 |     const calls = await homePage.collectApiCalls(async () => {
  135 |       await homePage.selectGenre(GENRES.THRILLER);
  136 |     });
  137 | 
  138 |     expect(calls.length).toBeGreaterThan(0);
  139 | 
  140 |     const firstCall = calls[0];
  141 |     logger.info(`API endpoint: ${firstCall.url.pathname}`);
  142 |     logger.info(`API params: ${firstCall.url.searchParams.toString()}`);
  143 | 
  144 |     // The API call should include genre-related parameter
  145 |     const hasGenreParam =
  146 |       firstCall.url.searchParams.has('with_genres') ||
  147 |       firstCall.url.searchParams.has('genre');
  148 | 
  149 |     logger.info(`API includes genre param: ${hasGenreParam}`);
  150 |     await homePage.page.screenshot({
  151 |       path: 'test-results/screenshots/tc-gnr-08-api-genre.png',
  152 |     });
  153 |   });
  154 | });
```