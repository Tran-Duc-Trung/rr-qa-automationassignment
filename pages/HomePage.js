import { expect } from '@playwright/test';
import { BasePage } from './BasePage.js';

// ── Constants ──────────────────────────────────────────────────────────────

export const CATEGORIES = {
  POPULAR:   { label: 'Popular',   href: '/popular' },
  TREND:     { label: 'Trend',     href: '/trend'   },
  NEWEST:    { label: 'Newest',    href: '/new'      },
  TOP_RATED: { label: 'Top rated', href: '/top'      },
};

export const TYPES = {
  MOVIE:    { label: 'Movie',    optionId: 'react-select-2-option-0' },
  TV_SHOWS: { label: 'TV Shows', optionId: 'react-select-2-option-1' },
};

export const GENRES = {
  ACTION:      { label: 'Action'          },
  ADVENTURE:   { label: 'Adventure'       },
  ANIMATION:   { label: 'Animation'       },
  COMEDY:      { label: 'Comedy'          },
  CRIME:       { label: 'Crime'           },
  DOCUMENTARY: { label: 'Documentary'     },
  DRAMA:       { label: 'Drama'           },
  FAMILY:      { label: 'Family'          },
  FANTASY:     { label: 'Fantasy'         },
  HISTORY:     { label: 'History'         },
  HORROR:      { label: 'Horror'          },
  MUSIC:       { label: 'Music'           },
  MYSTERY:     { label: 'Mystery'         },
  ROMANCE:     { label: 'Romance'         },
  SCI_FI:      { label: 'Science Fiction' },
  TV_MOVIE:    { label: 'TV Movie'        },
  THRILLER:    { label: 'Thriller'        },
  WAR:         { label: 'War'             },
  WESTERN:     { label: 'Western'         },
};

// ── Selectors ──────────────────────────────────────────────────────────────

const SELECTORS = {
  NAV_LINK:            (href) => `header nav ul li a[href="${href}"]`,
  SEARCH_INPUT:        'input[name="search"]',
  TYPE_OPTION:         (id)   => `#${id}`,
  CARD:                'div.grid.grid-cols-3.gap-4 > div.flex.flex-col.items-center',
  CARD_TITLE:          'p.text-blue-500.font-bold',
  CARD_META:           'p.text-gray-500.font-light.text-sm',
  YEAR_FROM_OPTION:    (year) => `#react-select-4-option-${year - 1900}`,
  YEAR_TO_OPTION:      (year) => `#react-select-5-option-${year - 1900}`,
  PAGINATION:          'div#react-paginate',
  PAGINATION_PREV:     'div#react-paginate li.previous a',
  PAGINATION_NEXT:     'div#react-paginate li.next a',
  PAGINATION_SELECTED: 'div#react-paginate li.selected a',
  PAGINATION_PAGE:     (n)    => `div#react-paginate li a[aria-label="Page ${n}"]`,
  PAGINATION_BREAK:    'div#react-paginate li.break',
};

// ── Page Object ────────────────────────────────────────────────────────────

export class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.searchInput        = page.locator(SELECTORS.SEARCH_INPUT);
    this.ratingWidget       = page.locator('ul.rc-rate');
    this.cards              = page.locator(SELECTORS.CARD);
    this.pagination         = page.locator(SELECTORS.PAGINATION);
    this.paginationPrev     = page.locator(SELECTORS.PAGINATION_PREV);
    this.paginationNext     = page.locator(SELECTORS.PAGINATION_NEXT);
    this.paginationSelected = page.locator(SELECTORS.PAGINATION_SELECTED);
  }

  // Navigation

  async goto() {
    await this.navigate('/');
    await this.waitForCardsLoaded();
  }

  async selectCategory(category) {
    await this.page.locator(SELECTORS.NAV_LINK(category.href)).click();
    await this.waitForCardsLoaded();
  }

  // Search

  async search(keyword) {
    await this.searchInput.click();
    await this.searchInput.fill(keyword);
    await this.waitForCardsLoaded();
  }

  async clearSearch() {
    await this.searchInput.fill('');
    await this.waitForCardsLoaded();
  }

  async getSearchValue() {
    return this.searchInput.inputValue();
  }

  // Type dropdown

  async selectType(type) {
    await this.page.locator('p:has-text("Type") + div [class*="-control"]').click();
    await this.page.waitForSelector('[class*="-menu"]', { state: 'visible', timeout: 5000 });
    await this.page.locator(SELECTORS.TYPE_OPTION(type.optionId)).click();
    await this.waitForCardsLoaded();
  }

  async getSelectedType() {
    return this.page.locator('p:has-text("Type") + div [class*="-singleValue"]').innerText();
  }

  // Genre dropdown

  async selectGenre(genre) {
    await this.page.locator('p:has-text("Genre") + div [class*="-control"]').click();
    const option = this.page.locator('[class*="-menu"]').getByText(genre.label, { exact: true });
    await option.waitFor({ state: 'visible', timeout: 5000 });
    await option.click();
    await this.waitForCardsLoaded();
  }

  async getSelectedGenre() {
    const genreContainer = this.page.locator('p:has-text("Genre") + div');
    const multiValue = genreContainer.locator('[class*="-multiValue"]');
    const count = await multiValue.count();
    if (count > 0) {
      return multiValue.first().innerText();
    }
    return genreContainer.locator('[class*="-placeholder"]').innerText();
  }

  // Year dropdowns

  async selectYearFrom(year) {
    await this.page.locator('p:has-text("Year") + div [class*="-control"]').first().click();
    await this.page.waitForSelector(SELECTORS.YEAR_FROM_OPTION(year), { state: 'visible', timeout: 5000 });
    await this.page.locator(SELECTORS.YEAR_FROM_OPTION(year)).click();
    await this.waitForCardsLoaded();
  }

  async selectYearTo(year) {
    await this.page.locator('p:has-text("Year") + div [class*="-control"]').last().click();
    await this.page.waitForSelector(SELECTORS.YEAR_TO_OPTION(year), { state: 'visible', timeout: 5000 });
    await this.page.locator(SELECTORS.YEAR_TO_OPTION(year)).click();
    await this.waitForCardsLoaded();
  }

  async selectYearRange(fromYear, toYear) {
    await this.selectYearFrom(fromYear);
    await this.selectYearTo(toYear);
  }

  async getSelectedYears() {
    const yearSingleValues = this.page.locator('p:has-text("Year") + div [class*="-singleValue"]');
    const from = await yearSingleValues.nth(0).innerText().catch(() => '1900');
    const to   = await yearSingleValues.nth(1).innerText().catch(() => '2025');
    return { from, to };
  }

  // Rating

  async setRating(rating) {
    const isHalf  = rating % 1 !== 0;
    const starPos = isHalf ? Math.ceil(rating) : rating;
    const star    = this.page.locator(`ul.rc-rate li:nth-child(${starPos})`);

    // Each star is 15px wide, split into two halves (left=8px, right=7px)
    // x=4  → left half  → half star
    // x=12 → right half → full star
    if (isHalf) {
      await star.click({ position: { x: 4, y: 5 } });
    } else {
      await star.click({ position: { x: 12, y: 5 } });
    }
    await this.waitForCardsLoaded();
  }

  async getCurrentRating() {
    const fullStars = await this.page.locator('ul.rc-rate li.rc-rate-star-full').count();
    const halfStar  = await this.page.locator('ul.rc-rate li.rc-rate-star-half').count();
    return fullStars + (halfStar * 0.5);
  }

  // Movie cards

  async getCardCount() {
    return this.cards.count();
  }

  async getAllCardData() {
    const count   = await this.cards.count();
    const results = [];

    for (let i = 0; i < count; i++) {
      const card  = this.cards.nth(i);
      const title = await card.locator(SELECTORS.CARD_TITLE).innerText().catch(() => '');
      const meta  = await card.locator(SELECTORS.CARD_META).innerText().catch(() => '');
      const [genre = '', year = ''] = meta.split(',').map(s => s.trim());
      results.push({ title, genre, year });
    }

    return results;
  }

  // Pagination

  async goToNextPage() {
    await this.scrollToBottom();
    await this.paginationNext.click();
    await this.waitForCardsLoaded();
  }

  async goToPreviousPage() {
    await this.scrollToBottom();
    await this.paginationPrev.click();
    await this.waitForCardsLoaded();
  }

  async goToPage(pageNumber) {
    await this.scrollToBottom();
    await this.page.locator(SELECTORS.PAGINATION_PAGE(pageNumber)).click();
    await this.waitForCardsLoaded();
  }

  async getCurrentPage() {
    return this.paginationSelected.innerText();
  }

  async isPreviousDisabled() {
    const classes = await this.page.locator('div#react-paginate li.previous').getAttribute('class');
    return classes?.includes('disabled') ?? false;
  }

  async isNextDisabled() {
    const ariaDisabled = await this.paginationNext.getAttribute('aria-disabled');
    return ariaDisabled === 'true';
  }

  async hasPaginationBreak() {
    return this.page.locator(SELECTORS.PAGINATION_BREAK).isVisible();
  }

  // API helpers

  async collectApiCalls(action) {
    const calls = [];

    const handler = async (response) => {
      if (response.url().includes('api.themoviedb.org')) {
        const url  = new URL(response.url());
        let body   = {};
        try { body = await response.json(); } catch {}
        calls.push({ url, body });
      }
    };

    this.page.on('response', handler);
    await action();
    await this.page.waitForLoadState('networkidle');
    this.page.off('response', handler);

    return calls;
  }
}