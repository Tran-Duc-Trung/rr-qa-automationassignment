# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: filtering\search.spec.js >> Search Filter >> TC-SRC-01: Search input is visible and has correct placeholder
- Location: tests\filtering\search.spec.js:14:3

# Error details

```
Test timeout of 50000ms exceeded while running "beforeEach" hook.
```

```
Error: page.goto: Test timeout of 50000ms exceeded.
Call log:
  - navigating to "https://tmdb-discover.surge.sh/", waiting until "load"

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
  1  | import { expect } from '@playwright/test';
  2  | 
  3  | export class BasePage {
  4  |   constructor(page) {
  5  |     this.page = page;
  6  |   }
  7  | 
  8  |   /**
  9  |    * Navigate to a given path relative to baseURL
  10 |    * @param {string} path
  11 |    */
  12 |   async navigate(path = '/') {
> 13 |     await this.page.goto(path);
     |                     ^ Error: page.goto: Test timeout of 50000ms exceeded.
  14 |     await this.page.waitForLoadState('domcontentloaded');
  15 |   }
  16 | 
  17 |   /**
  18 |    * Scroll the main content container to bottom to reveal pagination
  19 |    */
  20 |   async scrollToBottom() {
  21 |     const container = this.page.locator('div.w-full.h-full.overflow-scroll');
  22 |     await container.evaluate(el => el.scrollTo(0, el.scrollHeight));
  23 |     await this.page.waitForTimeout(500);
  24 |   }
  25 | 
  26 |   /**
  27 |    * Scroll the main content container to top
  28 |    */
  29 |   async scrollToTop() {
  30 |     const container = this.page.locator('div.w-full.h-full.overflow-scroll');
  31 |     await container.evaluate(el => el.scrollTo(0, 0));
  32 |     await this.page.waitForTimeout(300);
  33 |   }
  34 | 
  35 |   /**
  36 |    * Wait for cards to finish loading (grid becomes visible with at least 1 card)
  37 |    */
  38 |   async waitForCardsLoaded() {
  39 |     await this.page.waitForSelector('div.grid.grid-cols-3 > div.flex.flex-col', {
  40 |       state: 'visible',
  41 |       timeout: 15000,
  42 |     });
  43 |     await this.page.waitForLoadState('networkidle');
  44 |   }
  45 | 
  46 |   /**
  47 |    * Open a React Select dropdown by clicking its container
  48 |    * @param {string} containerSelector - CSS selector for the react-select container
  49 |    */
  50 |   async openReactSelect(containerSelector) {
  51 |     const control = this.page.locator(`${containerSelector} [class*="-control"]`);
  52 |     await control.click();
  53 |     // Wait for menu to appear
  54 |     await this.page.waitForSelector(`${containerSelector} [class*="-menu"]`, {
  55 |       state: 'visible',
  56 |       timeout: 5000,
  57 |     });
  58 |   }
  59 | 
  60 |   /**
  61 |    * Take a screenshot with a descriptive name
  62 |    * @param {string} name
  63 |    */
  64 |   async takeScreenshot(name) {
  65 |     await this.page.screenshot({
  66 |       path: `test-results/screenshots/${name}-${Date.now()}.png`,
  67 |       fullPage: false,
  68 |     });
  69 |   }
  70 | }
```