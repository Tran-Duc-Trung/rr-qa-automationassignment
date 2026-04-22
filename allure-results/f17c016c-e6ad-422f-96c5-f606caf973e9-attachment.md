# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: filtering\genre.spec.js >> Genre Filter >> TC-GNR-03: Selecting "Action" genre filters results
- Location: tests\filtering\genre.spec.js:35:3

# Error details

```
TimeoutError: locator.innerText: Timeout 20000ms exceeded.
Call log:
  - waiting for locator('p:has-text("Genre") + div').locator('p:has-text("Genre") + div [class*="-placeholder"]')

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
          - paragraph [ref=e26]: "Avatar Aang: The Last Airbender"
          - paragraph [ref=e27]: Animation, 2026
        - generic [ref=e28]:
          - img "Movie Poster" [ref=e29]
          - paragraph [ref=e30]: Madness
          - paragraph [ref=e31]: Thriller, 1980
        - generic [ref=e32]:
          - img "Movie Poster" [ref=e33]
          - paragraph [ref=e34]: "Spider-Man: Brand New Day"
          - paragraph [ref=e35]: Science Fiction, 2026
        - generic [ref=e36]:
          - img "Movie Poster" [ref=e37]
          - paragraph [ref=e38]: "Avengers: Doomsday"
          - paragraph [ref=e39]: Science Fiction, 2026
        - generic [ref=e40]:
          - img "Movie Poster" [ref=e41]
          - paragraph [ref=e42]: Do or Die
          - paragraph [ref=e43]: Action, 1991
        - generic [ref=e44]:
          - img "Movie Poster" [ref=e45]
          - paragraph [ref=e46]: Mortal Kombat II
          - paragraph [ref=e47]: Action, 2026
        - generic [ref=e48]:
          - img "Movie Poster" [ref=e49]
          - paragraph [ref=e50]: "Star Wars: The Mandalorian and Grogu"
          - paragraph [ref=e51]: Action, 2026
        - generic [ref=e52]:
          - img "Movie Poster" [ref=e53]
          - paragraph [ref=e54]: Amazon Jail
          - paragraph [ref=e55]: Thriller, 1982
        - generic [ref=e56]:
          - img "Movie Poster" [ref=e57]
          - paragraph [ref=e58]: Street Fighter
          - paragraph [ref=e59]: Action, 2026
        - generic [ref=e60]:
          - img "Movie Poster" [ref=e61]
          - paragraph [ref=e62]: "Wild Agent 2: Peach Assassination"
          - paragraph [ref=e63]: Action, 2024
        - generic [ref=e64]:
          - img "Movie Poster" [ref=e65]
          - paragraph [ref=e66]: Colony
          - paragraph [ref=e67]: Action, 2026
        - generic [ref=e68]:
          - img "Movie Poster" [ref=e69]
          - paragraph [ref=e70]: The Legendary Lighter
          - paragraph [ref=e71]: Action, 2019
        - generic [ref=e72]:
          - img "Movie Poster" [ref=e73]
          - paragraph [ref=e74]: Mutiny
          - paragraph [ref=e75]: Action, 2026
        - generic [ref=e76]:
          - img "Movie Poster" [ref=e77]
          - paragraph [ref=e78]: "True Story of a Woman in Jail: Continues"
          - paragraph [ref=e79]: Action, 1975
        - generic [ref=e80]:
          - img "Movie Poster" [ref=e81]
          - paragraph [ref=e82]: Senario XX
          - paragraph [ref=e83]: Comedy, 2005
        - generic [ref=e84]:
          - img "Movie Poster" [ref=e85]
          - paragraph [ref=e86]: "The Hunger Games: Sunrise on the Reaping"
          - paragraph [ref=e87]: Science Fiction, 2026
        - generic [ref=e88]:
          - img "Movie Poster" [ref=e89]
          - paragraph [ref=e90]: Crush The Wicked
          - paragraph [ref=e91]: Action, 2026
        - generic [ref=e92]:
          - img "Movie Poster" [ref=e93]
          - paragraph [ref=e94]: Hard Hunted
          - paragraph [ref=e95]: Action, 1992
        - generic [ref=e96]:
          - img "Movie Poster" [ref=e97]
          - paragraph [ref=e98]: Batman & Robin
          - paragraph [ref=e99]: Action, 1997
        - generic [ref=e100]:
          - img "Movie Poster" [ref=e101]
          - paragraph [ref=e102]: The Furious
          - paragraph [ref=e103]: Action, 2026
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
          - button "Page 1315" [ref=e119]: "1315"
        - listitem [ref=e120]:
          - button "Page 1316" [ref=e121]: "1316"
        - listitem [ref=e122]:
          - button "Page 1317" [ref=e123]: "1317"
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
      - generic [ref=e144]:
        - generic [ref=e145]: option Action, selected. Select is focused ,type to refine list, press Down to open the menu, press left to focus selected values
        - generic [ref=e146]:
          - generic [ref=e147]:
            - generic [ref=e148]:
              - generic [ref=e149]: Action
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
  132 | 
  133 |   /**
  134 |    * Get the currently active category label text
  135 |    * @returns {Promise<string>}
  136 |    */
  137 |   async getActiveCategory() {
  138 |     // Active tab has text-white class (vs text-blue-500 for inactive)
  139 |     const activeLink = this.page.locator('header nav ul li').filter({
  140 |       has: this.page.locator('a'),
  141 |     }).filter({ hasNot: this.page.locator('a.text-blue-500') }).locator('a');
  142 |     return activeLink.innerText();
  143 |   }
  144 | 
  145 |   // ════════════════════════════════════════════
  146 |   // SEARCH
  147 |   // ════════════════════════════════════════════
  148 | 
  149 |   /**
  150 |    * Type into the search box and wait for results to update
  151 |    * @param {string} keyword
  152 |    */
  153 |   async search(keyword) {
  154 |     await this.searchInput.click();
  155 |     await this.searchInput.fill(keyword);
  156 |     await this.page.waitForLoadState('networkidle');
  157 |     await this.waitForCardsLoaded();
  158 |   }
  159 | 
  160 |   /**
  161 |    * Clear the search box
  162 |    */
  163 |   async clearSearch() {
  164 |     await this.searchInput.fill('');
  165 |     await this.page.waitForLoadState('networkidle');
  166 |   }
  167 | 
  168 |   /**
  169 |    * Get current value in search box
  170 |    * @returns {Promise<string>}
  171 |    */
  172 |   async getSearchValue() {
  173 |     return this.searchInput.inputValue();
  174 |   }
  175 | 
  176 |   // ════════════════════════════════════════════
  177 |   // TYPE DROPDOWN
  178 |   // ════════════════════════════════════════════
  179 | 
  180 |   /**
  181 |    * Select a type (Movie or TV Shows) from the Type dropdown
  182 |    * @param {object} type - one of TYPES.*
  183 |    */
  184 |   async selectType(type) {
  185 |     // Click the Type control to open dropdown
  186 |     await this.page.locator('aside').locator('[class*="-control"]').first().click();
  187 |     // Wait for menu to be visible
  188 |     await this.page.waitForSelector('[class*="-menu"]', { state: 'visible', timeout: 5000 });
  189 |     // Click the option
  190 |     await this.page.locator(SELECTORS.TYPE_OPTION(type.optionId)).click();
  191 |     await this.waitForCardsLoaded();
  192 |   }
  193 | 
  194 |   /**
  195 |    * Get current selected Type value
  196 |    * @returns {Promise<string>}
  197 |    */
  198 |   async getSelectedType() {
  199 |     const typeContainer = this.page.locator('p:has-text("Type") + div');
  200 |     const singleValue = typeContainer.locator('[class*="-singleValue"]');
  201 |     return singleValue.innerText();
  202 |   }
  203 | 
  204 |   // ════════════════════════════════════════════
  205 |   // GENRE DROPDOWN
  206 |   // ════════════════════════════════════════════
  207 | 
  208 |   /**
  209 |    * Select a genre from the Genre dropdown
  210 |    * @param {object} genre - one of GENRES.*
  211 |    */
  212 |   async selectGenre(genre) {
  213 |     // Click the Genre control (second react-select in sidebar)
  214 |     await this.page.locator('aside').locator('[class*="-control"]').nth(1).click();
  215 |     await this.page.waitForSelector(`#react-select-3-option-${genre.index}`, {
  216 |       state: 'visible',
  217 |       timeout: 5000,
  218 |     });
  219 |     await this.page.locator(SELECTORS.GENRE_OPTION(genre.index)).click();
  220 |     await this.waitForCardsLoaded();
  221 |   }
  222 | 
  223 |   /**
  224 |    * Get current selected Genre value (returns placeholder if none selected)
  225 |    * @returns {Promise<string>}
  226 |    */
  227 |   async getSelectedGenre() {
  228 |     const genreContainer = this.page.locator('p:has-text("Genre") + div');
  229 |     const singleValue = genreContainer.locator('p:has-text("Genre") + div [class*="-multiValue"]');
  230 |     const placeholder = genreContainer.locator('p:has-text("Genre") + div [class*="-placeholder"]');
  231 |     const count = await singleValue.count();
> 232 |     return count > 0 ? singleValue.innerText() : placeholder.innerText();
      |                                                              ^ TimeoutError: locator.innerText: Timeout 20000ms exceeded.
  233 |   }
  234 | 
  235 |   // ════════════════════════════════════════════
  236 |   // YEAR DROPDOWNS
  237 |   // ════════════════════════════════════════════
  238 | 
  239 |   /**
  240 |    * Select "From" year
  241 |    * @param {number} year - e.g. 2020
  242 |    */
  243 |   async selectYearFrom(year) {
  244 |     // Year From is the 3rd react-select control in sidebar (after Type, Genre)
  245 |     await this.page.locator('aside').locator('[class*="-control"]').nth(2).click();
  246 |     await this.page.waitForSelector(SELECTORS.YEAR_FROM_OPTION(year), {
  247 |       state: 'visible',
  248 |       timeout: 5000,
  249 |     });
  250 |     await this.page.locator(SELECTORS.YEAR_FROM_OPTION(year)).click();
  251 |     await this.waitForCardsLoaded();
  252 |   }
  253 | 
  254 |   /**
  255 |    * Select "To" year
  256 |    * @param {number} year - e.g. 2024
  257 |    */
  258 |   async selectYearTo(year) {
  259 |     // Year To is the 4th react-select control
  260 |     await this.page.locator('aside').locator('[class*="-control"]').nth(3).click();
  261 |     await this.page.waitForSelector(SELECTORS.YEAR_TO_OPTION(year), {
  262 |       state: 'visible',
  263 |       timeout: 5000,
  264 |     });
  265 |     await this.page.locator(SELECTORS.YEAR_TO_OPTION(year)).click();
  266 |     await this.waitForCardsLoaded();
  267 |   }
  268 | 
  269 |   /**
  270 |    * Select a year range (from → to)
  271 |    * @param {number} fromYear
  272 |    * @param {number} toYear
  273 |    */
  274 |   async selectYearRange(fromYear, toYear) {
  275 |     await this.selectYearFrom(fromYear);
  276 |     await this.selectYearTo(toYear);
  277 |   }
  278 | 
  279 |   /**
  280 |    * Get selected year values
  281 |    * @returns {Promise<{from: string, to: string}>}
  282 |    */
  283 |   async getSelectedYears() {
  284 |     const controls = this.page.locator('aside').locator('[class*="-singleValue"]');
  285 |     const from = await controls.nth(2).innerText().catch(() => '1900');
  286 |     const to = await controls.nth(3).innerText().catch(() => '2025');
  287 |     return { from, to };
  288 |   }
  289 | 
  290 |   // ════════════════════════════════════════════
  291 |   // RATING
  292 |   // ════════════════════════════════════════════
  293 | 
  294 |   /**
  295 |    * Set star rating.
  296 |    * Supports half-star: 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5
  297 |    * @param {number} rating - e.g. 3.5
  298 |    */
  299 |   async setRating(rating) {
  300 |     const isHalf = rating % 1 !== 0;         // e.g. 3.5 → true
  301 |     const starPos = isHalf ? Math.ceil(rating) : rating;  // which <li> (1-5)
  302 |     const half = isHalf ? 'first' : 'second';
  303 | 
  304 |     const starSelector = isHalf
  305 |       ? SELECTORS.RATING_STAR_FIRST(starPos)
  306 |       : SELECTORS.RATING_STAR_SECOND(starPos);
  307 | 
  308 |     await this.page.locator(starSelector).click();
  309 |     await this.waitForCardsLoaded();
  310 |   }
  311 | 
  312 |   /**
  313 |    * Clear rating by clicking the currently selected star again
  314 |    */
  315 |   async clearRating() {
  316 |     const selectedStar = this.page.locator('ul.rc-rate li.rc-rate-star-full, ul.rc-rate li.rc-rate-star-half').last();
  317 |     const count = await selectedStar.count();
  318 |     if (count > 0) {
  319 |       await selectedStar.locator('.rc-rate-star-second').click();
  320 |     }
  321 |   }
  322 | 
  323 |   /**
  324 |    * Get current rating state
  325 |    * @returns {Promise<number>} - selected rating value (0 if none)
  326 |    */
  327 |   async getCurrentRating() {
  328 |     const fullStars = await this.page.locator('ul.rc-rate li.rc-rate-star-full').count();
  329 |     const halfStar = await this.page.locator('ul.rc-rate li.rc-rate-star-half').count();
  330 |     return fullStars + (halfStar * 0.5);
  331 |   }
  332 | 
```