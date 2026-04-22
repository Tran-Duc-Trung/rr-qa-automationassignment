# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: filtering\genre.spec.js >> Genre Filter >> TC-GNR-06: Genre + Type combined filter returns relevant results
- Location: tests\filtering\genre.spec.js:94:3

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for locator('p:has-text("Genre") + div [class*="-container"]')

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
  212 | async selectGenre(genre) {
  213 |   // Dùng semantic selector thay vì nth(1)
> 214 |   await this.page.locator('p:has-text("Genre") + div [class*="-container"]').click();
      |                                                                              ^ Error: locator.click: Test ended.
  215 |   
  216 |   await this.page.waitForSelector(`#react-select-3-option-${genre.index}`, {
  217 |     state: 'visible',
  218 |     timeout: 5000,
  219 |   });
  220 |   
  221 |   await this.page.locator(SELECTORS.GENRE_OPTION(genre.index)).click();
  222 |   await this.waitForCardsLoaded();
  223 | }
  224 | 
  225 |   /**
  226 |    * Get current selected Genre value (returns placeholder if none selected)
  227 |    * @returns {Promise<string>}
  228 |    */
  229 | async getSelectedGenre() {
  230 |   const genreContainer = this.page.locator('p:has-text("Genre") + div');
  231 |   const multiValue = genreContainer.locator('[class*="-multiValue"]');
  232 |   const placeholder = genreContainer.locator('[class*="-placeholder"]');
  233 |   const count = await multiValue.count();
  234 |   
  235 |   if (count > 0) {
  236 |     // Lấy text của tất cả các giá trị đã chọn
  237 |     return multiValue.first().innerText();
  238 |   } else {
  239 |     return placeholder.innerText(); // → "Select..."
  240 |   }
  241 | }
  242 | 
  243 |   // ════════════════════════════════════════════
  244 |   // YEAR DROPDOWNS
  245 |   // ════════════════════════════════════════════
  246 | 
  247 |   /**
  248 |    * Select "From" year
  249 |    * @param {number} year - e.g. 2020
  250 |    */
  251 |   async selectYearFrom(year) {
  252 |     // Year From is the 3rd react-select control in sidebar (after Type, Genre)
  253 |     await this.page.locator('aside').locator('[class*="-control"]').nth(2).click();
  254 |     await this.page.waitForSelector(SELECTORS.YEAR_FROM_OPTION(year), {
  255 |       state: 'visible',
  256 |       timeout: 5000,
  257 |     });
  258 |     await this.page.locator(SELECTORS.YEAR_FROM_OPTION(year)).click();
  259 |     await this.waitForCardsLoaded();
  260 |   }
  261 | 
  262 |   /**
  263 |    * Select "To" year
  264 |    * @param {number} year - e.g. 2024
  265 |    */
  266 |   async selectYearTo(year) {
  267 |     // Year To is the 4th react-select control
  268 |     await this.page.locator('aside').locator('[class*="-control"]').nth(3).click();
  269 |     await this.page.waitForSelector(SELECTORS.YEAR_TO_OPTION(year), {
  270 |       state: 'visible',
  271 |       timeout: 5000,
  272 |     });
  273 |     await this.page.locator(SELECTORS.YEAR_TO_OPTION(year)).click();
  274 |     await this.waitForCardsLoaded();
  275 |   }
  276 | 
  277 |   /**
  278 |    * Select a year range (from → to)
  279 |    * @param {number} fromYear
  280 |    * @param {number} toYear
  281 |    */
  282 |   async selectYearRange(fromYear, toYear) {
  283 |     await this.selectYearFrom(fromYear);
  284 |     await this.selectYearTo(toYear);
  285 |   }
  286 | 
  287 |   /**
  288 |    * Get selected year values
  289 |    * @returns {Promise<{from: string, to: string}>}
  290 |    */
  291 |   async getSelectedYears() {
  292 |     const controls = this.page.locator('aside').locator('[class*="-singleValue"]');
  293 |     const from = await controls.nth(2).innerText().catch(() => '1900');
  294 |     const to = await controls.nth(3).innerText().catch(() => '2025');
  295 |     return { from, to };
  296 |   }
  297 | 
  298 |   // ════════════════════════════════════════════
  299 |   // RATING
  300 |   // ════════════════════════════════════════════
  301 | 
  302 |   /**
  303 |    * Set star rating.
  304 |    * Supports half-star: 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5
  305 |    * @param {number} rating - e.g. 3.5
  306 |    */
  307 |   async setRating(rating) {
  308 |     const isHalf = rating % 1 !== 0;         // e.g. 3.5 → true
  309 |     const starPos = isHalf ? Math.ceil(rating) : rating;  // which <li> (1-5)
  310 |     const half = isHalf ? 'first' : 'second';
  311 | 
  312 |     const starSelector = isHalf
  313 |       ? SELECTORS.RATING_STAR_FIRST(starPos)
  314 |       : SELECTORS.RATING_STAR_SECOND(starPos);
```