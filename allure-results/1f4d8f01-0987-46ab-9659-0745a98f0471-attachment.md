# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: filtering\genre.spec.js >> Genre Filter >> TC-GNR-06: Genre + Type combined filter returns relevant results
- Location: tests\filtering\genre.spec.js:94:3

# Error details

```
ReferenceError: homePage is not defined
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
          - paragraph [ref=e26]: FROM
          - paragraph [ref=e27]: Mystery, 2022
        - generic [ref=e28]:
          - img "Movie Poster" [ref=e29]
          - paragraph [ref=e30]: The Boys
          - paragraph [ref=e31]: Sci-Fi & Fantasy, 2019
        - generic [ref=e32]:
          - img "Movie Poster" [ref=e33]
          - paragraph [ref=e34]: Euphoria
          - paragraph [ref=e35]: Drama, 2019
        - generic [ref=e36]:
          - img "Movie Poster" [ref=e37]
          - paragraph [ref=e38]: The Rookie
          - paragraph [ref=e39]: Crime, 2018
        - generic [ref=e40]:
          - img "Movie Poster" [ref=e41]
          - paragraph [ref=e42]: INVINCIBLE
          - paragraph [ref=e43]: Animation, 2021
        - generic [ref=e44]:
          - img "Movie Poster" [ref=e45]
          - paragraph [ref=e46]: Grey's Anatomy
          - paragraph [ref=e47]: Drama, 2005
        - generic [ref=e48]:
          - img "Movie Poster" [ref=e49]
          - paragraph [ref=e50]: Supernatural
          - paragraph [ref=e51]: Drama, 2005
        - generic [ref=e52]:
          - img "Movie Poster" [ref=e53]
          - paragraph [ref=e54]: NCIS
          - paragraph [ref=e55]: Crime, 2003
        - generic [ref=e56]:
          - img "Movie Poster" [ref=e57]
          - paragraph [ref=e58]: The Mentalist
          - paragraph [ref=e59]: Crime, 2008
        - generic [ref=e60]:
          - img "Movie Poster" [ref=e61]
          - paragraph [ref=e62]: "Law & Order: Special Victims Unit"
          - paragraph [ref=e63]: Crime, 1999
        - generic [ref=e64]:
          - img "Movie Poster" [ref=e65]
          - paragraph [ref=e66]: Peaky Blinders
          - paragraph [ref=e67]: Drama, 2013
        - generic [ref=e68]:
          - img "Movie Poster" [ref=e69]
          - paragraph [ref=e70]: De Fabeltjeskrant
          - paragraph [ref=e71]: Kids, 1968
        - generic [ref=e72]:
          - img "Movie Poster" [ref=e73]
          - paragraph [ref=e74]: Game of Thrones
          - paragraph [ref=e75]: Sci-Fi & Fantasy, 2011
        - generic [ref=e76]:
          - img "Movie Poster" [ref=e77]
          - paragraph [ref=e78]: Law & Order
          - paragraph [ref=e79]: Crime, 1990
        - generic [ref=e80]:
          - img "Movie Poster" [ref=e81]
          - paragraph [ref=e82]: JUJUTSU KAISEN
          - paragraph [ref=e83]: Animation, 2020
        - generic [ref=e84]:
          - img "Movie Poster" [ref=e85]
          - paragraph [ref=e86]: Shameless
          - paragraph [ref=e87]: Drama, 2011
        - generic [ref=e88]:
          - img "Movie Poster" [ref=e89]
          - paragraph [ref=e90]: Trespassing
          - paragraph [ref=e91]: ", 1994"
        - generic [ref=e92]:
          - img "Movie Poster" [ref=e93]
          - paragraph [ref=e94]: Bones
          - paragraph [ref=e95]: Crime, 2005
        - generic [ref=e96]:
          - img "Movie Poster" [ref=e97]
          - paragraph [ref=e98]: Smallville
          - paragraph [ref=e99]: Sci-Fi & Fantasy, 2001
        - generic [ref=e100]:
          - img "Movie Poster" [ref=e101]
          - paragraph [ref=e102]: Midsomer Murders
          - paragraph [ref=e103]: Crime, 1997
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
          - button "Page 10991" [ref=e119]: "10991"
        - listitem [ref=e120]:
          - button "Page 10992" [ref=e121]: "10992"
        - listitem [ref=e122]:
          - button "Page 10993" [ref=e123]: "10993"
        - listitem [ref=e124]:
          - button "Next page" [ref=e125]: Next
  - complementary [ref=e126]:
    - paragraph [ref=e127]: DISCOVER OPTIONS
    - generic [ref=e128]:
      - paragraph [ref=e129]: Type
      - generic [ref=e130]:
        - generic [ref=e131]: option TV Shows, selected. Select is focused ,type to refine list, press Down to open the menu,
        - generic [ref=e132]:
          - generic [ref=e133]:
            - generic [ref=e134]: TV Shows
            - textbox [active] [ref=e137]
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
  114 | 
  115 |   /**
  116 |    * Go to the home page (defaults to /popular)
  117 |    */
  118 |   async goto() {
  119 |     await this.navigate('/');
  120 |     await this.waitForCardsLoaded();
  121 |   }
  122 | 
  123 |   /**
  124 |    * Click a category tab by its href
  125 |    * @param {object} category - one of CATEGORIES.*
  126 |    */
  127 |   async selectCategory(category) {
  128 |     const link = this.page.locator(SELECTORS.NAV_LINK(category.href));
  129 |     await link.click();
  130 |     await this.waitForCardsLoaded();
  131 |   }
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
> 214 |     await homePage.page.locator('p:has-text("Genre") + div [class*="-placeholder"]').click();
      |     ^ ReferenceError: homePage is not defined
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
  227 | async getSelectedGenre() {
  228 |   const genreContainer = this.page.locator('p:has-text("Genre") + div');
  229 |   const multiValue = genreContainer.locator('[class*="-multiValue"]');
  230 |   const placeholder = genreContainer.locator('[class*="-placeholder"]');
  231 |   const count = await multiValue.count();
  232 |   
  233 |   if (count > 0) {
  234 |     // Lấy text của tất cả các giá trị đã chọn
  235 |     return multiValue.first().innerText();
  236 |   } else {
  237 |     return placeholder.innerText(); // → "Select..."
  238 |   }
  239 | }
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
  314 |     await this.page.locator(starSelector).click();
```