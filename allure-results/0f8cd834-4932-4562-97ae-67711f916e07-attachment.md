# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: filtering\genre.spec.js >> Genre Filter >> TC-GNR-07: All 19 genre options can be selected without errors
- Location: tests\filtering\genre.spec.js:126:1

# Error details

```
TimeoutError: page.waitForSelector: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('div.grid.grid-cols-3 > div.flex.flex-col') to be visible

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
    - generic [ref=e22]: No results found.
  - complementary [ref=e23]:
    - paragraph [ref=e24]: DISCOVER OPTIONS
    - generic [ref=e25]:
      - paragraph [ref=e26]: Type
      - generic [ref=e29]:
        - generic [ref=e30]:
          - generic [ref=e31]: Movie
          - textbox [ref=e34]
        - img [ref=e38]
      - paragraph [ref=e40]: Genre
      - generic [ref=e41]:
        - generic [ref=e42]: option Documentary, selected. Select is focused ,type to refine list, press Down to open the menu, press left to focus selected values
        - generic [ref=e43]:
          - generic [ref=e44]:
            - generic [ref=e45]:
              - generic [ref=e46]: Action
              - img [ref=e48]
            - generic [ref=e50]:
              - generic [ref=e51]: Adventure
              - img [ref=e53]
            - generic [ref=e55]:
              - generic [ref=e56]: Animation
              - img [ref=e58]
            - generic [ref=e60]:
              - generic [ref=e61]: Comedy
              - img [ref=e63]
            - generic [ref=e65]:
              - generic [ref=e66]: Crime
              - img [ref=e68]
            - generic [ref=e70]:
              - generic [ref=e71]: Documentary
              - img [ref=e73]
            - textbox [active] [ref=e77]
          - generic [ref=e78]:
            - img [ref=e80]
            - img [ref=e84]
      - paragraph [ref=e86]: Year
      - generic [ref=e87]:
        - generic [ref=e90]:
          - generic [ref=e91]:
            - generic [ref=e92]: "1900"
            - textbox [ref=e95]
          - img [ref=e99]
        - generic [ref=e101]: "-"
        - generic [ref=e104]:
          - generic [ref=e105]:
            - generic [ref=e106]: "2025"
            - textbox [ref=e109]
          - img [ref=e113]
      - paragraph [ref=e115]: Ratings
      - radiogroup [ref=e116]:
        - listitem [ref=e117] [cursor=pointer]:
          - radio "★ ★" [ref=e118]:
            - generic [ref=e119]: ★
            - generic [ref=e120]: ★
        - listitem [ref=e121] [cursor=pointer]:
          - radio "★ ★" [ref=e122]:
            - generic [ref=e123]: ★
            - generic [ref=e124]: ★
        - listitem [ref=e125] [cursor=pointer]:
          - radio "★ ★" [ref=e126]:
            - generic [ref=e127]: ★
            - generic [ref=e128]: ★
        - listitem [ref=e129] [cursor=pointer]:
          - radio "★ ★" [ref=e130]:
            - generic [ref=e131]: ★
            - generic [ref=e132]: ★
        - listitem [ref=e133] [cursor=pointer]:
          - radio "★ ★" [ref=e134]:
            - generic [ref=e135]: ★
            - generic [ref=e136]: ★
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
  13 |     await this.page.goto(path);
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
> 39 |     await this.page.waitForSelector('div.grid.grid-cols-3 > div.flex.flex-col', {
     |                     ^ TimeoutError: page.waitForSelector: Timeout 15000ms exceeded.
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