# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: filtering\rating.spec.js >> Rating Filter >> TC-RTG-09: Setting rating triggers API call with vote_average param
- Location: tests\filtering\rating.spec.js:148:3

# Error details

```
TimeoutError: locator.click: Timeout 20000ms exceeded.
Call log:
  - waiting for locator('ul.rc-rate li:nth-child(4) .rc-rate-star-second')
    - locator resolved to <div class="rc-rate-star-second">★</div>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action
    - <div class="rc-rate-star-first">★</div> intercepts pointer events
  - retrying click action
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not stable
    - retrying click action
      - waiting 100ms
    37 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div class="rc-rate-star-first">★</div> intercepts pointer events
     - retrying click action
       - waiting 500ms

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
          - paragraph [ref=e70]: "Greenland 2: Migration"
          - paragraph [ref=e71]: Adventure, 2026
        - generic [ref=e72]:
          - img "Movie Poster" [ref=e73]
          - paragraph [ref=e74]: Thrash
          - paragraph [ref=e75]: Horror, 2026
        - generic [ref=e76]:
          - img "Movie Poster" [ref=e77]
          - paragraph [ref=e78]: Lee Cronin's The Mummy
          - paragraph [ref=e79]: Horror, 2026
        - generic [ref=e80]:
          - img "Movie Poster" [ref=e81]
          - paragraph [ref=e82]: Sex with Love
          - paragraph [ref=e83]: Comedy, 2003
        - generic [ref=e84]:
          - img "Movie Poster" [ref=e85]
          - paragraph [ref=e86]: "Sniper: No Nation"
          - paragraph [ref=e87]: Action, 2026
        - generic [ref=e88]:
          - img "Movie Poster" [ref=e89]
          - paragraph [ref=e90]: Crime 101
          - paragraph [ref=e91]: Crime, 2026
        - generic [ref=e92]:
          - img "Movie Poster" [ref=e93]
          - paragraph [ref=e94]: The Super Mario Bros. Movie
          - paragraph [ref=e95]: Family, 2023
        - generic [ref=e96]:
          - img "Movie Poster" [ref=e97]
          - paragraph [ref=e98]: "The Strangers: Chapter 3"
          - paragraph [ref=e99]: Horror, 2026
        - generic [ref=e100]:
          - img "Movie Poster" [ref=e101]
          - paragraph [ref=e102]: GOAT
          - paragraph [ref=e103]: Animation, 2026
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
          - button "Page 56308" [ref=e119]: "56308"
        - listitem [ref=e120]:
          - button "Page 56309" [ref=e121]: "56309"
        - listitem [ref=e122]:
          - button "Page 56310" [ref=e123]: "56310"
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
          - radio "★ ★" [checked] [ref=e189]:
            - generic [ref=e190]: ★
            - generic [ref=e191]: ★
        - listitem [ref=e192] [cursor=pointer]:
          - radio "★ ★" [checked] [ref=e193]:
            - generic [ref=e194]: ★
            - generic [ref=e195]: ★
        - listitem [ref=e196] [cursor=pointer]:
          - radio "★ ★" [checked] [ref=e197]:
            - generic [ref=e198]: ★
            - generic [ref=e199]: ★
        - listitem [ref=e200] [cursor=pointer]:
          - radio "★ ★" [checked] [ref=e201]:
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
  214 | 
  215 |     const option = this.page.locator('[class*="-menu"]')
  216 |       .getByText(genre.label, { exact: true });
  217 | 
  218 |     await option.waitFor({ state: 'visible', timeout: 5000 });
  219 |     await option.click();
  220 |     await this.waitForCardsLoaded();
  221 |   }
  222 | 
  223 |   /**
  224 |    * Get current selected Genre value (returns placeholder if none selected)
  225 |    * @returns {Promise<string>}
  226 |    */
  227 |   async getSelectedGenre() {
  228 |     const genreContainer = this.page.locator('p:has-text("Genre") + div');
  229 |     const multiValue = genreContainer.locator('[class*="-multiValue"]');
  230 |     const placeholder = genreContainer.locator('[class*="-placeholder"]');
  231 |     const count = await multiValue.count();
  232 | 
  233 |     if (count > 0) {
  234 |       // Lấy text của tất cả các giá trị đã chọn
  235 |       return multiValue.first().innerText();
  236 |     } else {
  237 |       return placeholder.innerText(); // → "Select..."
  238 |     }
  239 |   }
  240 | 
  241 |   // ════════════════════════════════════════════
  242 |   // YEAR DROPDOWNS
  243 |   // ════════════════════════════════════════════
  244 | 
  245 |   /**
  246 |    * Select "From" year
  247 |    * @param {number} year - e.g. 2020
  248 |    */
  249 |   async selectYearFrom(year) {
  250 |     // Year From is the 3rd react-select control in sidebar (after Type, Genre)
  251 |     await this.page.locator('aside').locator('[class*="-control"]').nth(2).click();
  252 |     await this.page.waitForSelector(SELECTORS.YEAR_FROM_OPTION(year), {
  253 |       state: 'visible',
  254 |       timeout: 5000,
  255 |     });
  256 |     await this.page.locator(SELECTORS.YEAR_FROM_OPTION(year)).click();
  257 |     await this.waitForCardsLoaded();
  258 |   }
  259 | 
  260 |   /**
  261 |    * Select "To" year
  262 |    * @param {number} year - e.g. 2024
  263 |    */
  264 |   async selectYearTo(year) {
  265 |     // Year To is the 4th react-select control
  266 |     await this.page.locator('aside').locator('[class*="-control"]').nth(3).click();
  267 |     await this.page.waitForSelector(SELECTORS.YEAR_TO_OPTION(year), {
  268 |       state: 'visible',
  269 |       timeout: 5000,
  270 |     });
  271 |     await this.page.locator(SELECTORS.YEAR_TO_OPTION(year)).click();
  272 |     await this.waitForCardsLoaded();
  273 |   }
  274 | 
  275 |   /**
  276 |    * Select a year range (from → to)
  277 |    * @param {number} fromYear
  278 |    * @param {number} toYear
  279 |    */
  280 |   async selectYearRange(fromYear, toYear) {
  281 |     await this.selectYearFrom(fromYear);
  282 |     await this.selectYearTo(toYear);
  283 |   }
  284 | 
  285 |   /**
  286 |    * Get selected year values
  287 |    * @returns {Promise<{from: string, to: string}>}
  288 |    */
  289 |   async getSelectedYears() {
  290 |     const controls = this.page.locator('aside').locator('[class*="-singleValue"]');
  291 |     const from = await controls.nth(2).innerText().catch(() => '1900');
  292 |     const to = await controls.nth(3).innerText().catch(() => '2025');
  293 |     return { from, to };
  294 |   }
  295 | 
  296 |   // ════════════════════════════════════════════
  297 |   // RATING
  298 |   // ════════════════════════════════════════════
  299 | 
  300 |   /**
  301 |    * Set star rating.
  302 |    * Supports half-star: 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5
  303 |    * @param {number} rating - e.g. 3.5
  304 |    */
  305 |   async setRating(rating) {
  306 |     const isHalf = rating % 1 !== 0;         // e.g. 3.5 → true
  307 |     const starPos = isHalf ? Math.ceil(rating) : rating;  // which <li> (1-5)
  308 |     const half = isHalf ? 'first' : 'second';
  309 | 
  310 |     const starSelector = isHalf
  311 |       ? SELECTORS.RATING_STAR_FIRST(starPos)
  312 |       : SELECTORS.RATING_STAR_SECOND(starPos);
  313 | 
> 314 |     await this.page.locator(starSelector).click();
      |                                           ^ TimeoutError: locator.click: Timeout 20000ms exceeded.
  315 |     await this.waitForCardsLoaded();
  316 |   }
  317 | 
  318 |   /**
  319 |    * Clear rating by clicking the currently selected star again
  320 |    */
  321 |   async clearRating() {
  322 |     const selectedStar = this.page.locator('ul.rc-rate li.rc-rate-star-full, ul.rc-rate li.rc-rate-star-half').last();
  323 |     const count = await selectedStar.count();
  324 |     if (count > 0) {
  325 |       await selectedStar.locator('.rc-rate-star-second').click();
  326 |     }
  327 |   }
  328 | 
  329 |   /**
  330 |    * Get current rating state
  331 |    * @returns {Promise<number>} - selected rating value (0 if none)
  332 |    */
  333 |   async getCurrentRating() {
  334 |     const fullStars = await this.page.locator('ul.rc-rate li.rc-rate-star-full').count();
  335 |     const halfStar = await this.page.locator('ul.rc-rate li.rc-rate-star-half').count();
  336 |     return fullStars + (halfStar * 0.5);
  337 |   }
  338 | 
  339 |   // ════════════════════════════════════════════
  340 |   // MOVIE CARDS
  341 |   // ════════════════════════════════════════════
  342 | 
  343 |   /**
  344 |    * Get count of currently visible cards
  345 |    * @returns {Promise<number>}
  346 |    */
  347 |   async getCardCount() {
  348 |     return this.cards.count();
  349 |   }
  350 | 
  351 |   /**
  352 |    * Get all card data as array of objects
  353 |    * @returns {Promise<Array<{title: string, genre: string, year: string}>>}
  354 |    */
  355 |   async getAllCardData() {
  356 |     const cardElements = this.cards;
  357 |     const count = await cardElements.count();
  358 |     const results = [];
  359 | 
  360 |     for (let i = 0; i < count; i++) {
  361 |       const card = cardElements.nth(i);
  362 |       const title = await card.locator(SELECTORS.CARD_TITLE).innerText().catch(() => '');
  363 |       const meta = await card.locator(SELECTORS.CARD_META).innerText().catch(() => '');
  364 | 
  365 |       // meta format: "Genre, Year"
  366 |       const [genre = '', year = ''] = meta.split(',').map(s => s.trim());
  367 | 
  368 |       results.push({ title, genre, year });
  369 |     }
  370 | 
  371 |     return results;
  372 |   }
  373 | 
  374 |   /**
  375 |    * Get title of a card by its index (0-based)
  376 |    * @param {number} index
  377 |    * @returns {Promise<string>}
  378 |    */
  379 |   async getCardTitle(index) {
  380 |     return this.cards.nth(index).locator(SELECTORS.CARD_TITLE).innerText();
  381 |   }
  382 | 
  383 |   /**
  384 |    * Check if any card's title contains the given keyword (case-insensitive)
  385 |    * @param {string} keyword
  386 |    * @returns {Promise<boolean>}
  387 |    */
  388 |   async areCardTitlesMatchingSearch(keyword) {
  389 |     const cardData = await this.getAllCardData();
  390 |     return cardData.every(card =>
  391 |       card.title.toLowerCase().includes(keyword.toLowerCase())
  392 |     );
  393 |   }
  394 | 
  395 |   // ════════════════════════════════════════════
  396 |   // PAGINATION
  397 |   // ════════════════════════════════════════════
  398 | 
  399 |   /**
  400 |    * Scroll down and click the "Next" page button
  401 |    */
  402 |   async goToNextPage() {
  403 |     await this.scrollToBottom();
  404 |     await expect(this.paginationNext).not.toHaveAttribute('aria-disabled', 'true');
  405 |     await this.paginationNext.click();
  406 |     await this.waitForCardsLoaded();
  407 |   }
  408 | 
  409 |   /**
  410 |    * Scroll down and click the "Previous" page button
  411 |    */
  412 |   async goToPreviousPage() {
  413 |     await this.scrollToBottom();
  414 |     await expect(this.paginationPrev).not.toHaveClass(/disabled/);
```