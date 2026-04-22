# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: filtering\genre.spec.js >> Genre Filter >> TC-GNR-02: Genre dropdown opens and lists all 19 options
- Location: tests\filtering\genre.spec.js:22:3

# Error details

```
Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://tmdb-discover.surge.sh/
Call log:
  - navigating to "https://tmdb-discover.surge.sh/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e5]:
    - heading "Press space to play" [level=1] [ref=e6]
    - generic [ref=e7]:
      - paragraph [ref=e8]: "Try:"
      - list [ref=e9]:
        - listitem [ref=e10]: Checking the network cables, modem, and router
        - listitem [ref=e11]: Reconnecting to Wi-Fi
        - listitem [ref=e12]:
          - link "Running Windows Network Diagnostics" [ref=e13] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
    - generic [ref=e14]: ERR_INTERNET_DISCONNECTED
  - application "Dino game, press space to play" [ref=e16]
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
     |                     ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://tmdb-discover.surge.sh/
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