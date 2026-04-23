import { test, expect } from '@playwright/test';
import { HomePage, TYPES, CATEGORIES } from '../../pages/HomePage.js';
import logger from '../../utils/logger.js';

test.describe('Type Filter (Movie / TV Shows)', () => {
  let homePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
  });

  test('TC-TYP-01: Default Type is "Movie" on page load', async () => {
    // Verify "Movie" is the default selected type when page loads
    const selectedType = await homePage.getSelectedType();
    logger.info(`Default type: "${selectedType}"`);
    expect(selectedType).toBe(TYPES.MOVIE.label);
  });

  test('TC-TYP-02: Type dropdown opens and shows both options', async () => {
    // Verify dropdown contains exactly 2 options: Movie and TV Shows
    await homePage.page.locator('p:has-text("Type") + div [class*="-control"]').click();

    await expect(homePage.page.locator(`#${TYPES.MOVIE.optionId}`)).toBeVisible();
    await expect(homePage.page.locator(`#${TYPES.TV_SHOWS.optionId}`)).toBeVisible();
  });

  test('TC-TYP-03: Selecting "TV Shows" updates content', async () => {
    // Verify switching to TV Shows loads different content from Movie
    const movieTitles = (await homePage.getAllCardData()).map(c => c.title);

    await homePage.selectType(TYPES.TV_SHOWS);

    const selectedType = await homePage.getSelectedType();
    logger.info(`Selected type after change: "${selectedType}"`);
    expect(selectedType).toBe(TYPES.TV_SHOWS.label);

    const tvCards = await homePage.getAllCardData();
    expect(tvCards.length).toBeGreaterThan(0);

    const hasNewContent = tvCards.map(c => c.title).some(t => !movieTitles.includes(t));
    logger.info(`TV Shows shows different content from Movie: ${hasNewContent}`);
    expect(hasNewContent).toBe(true);
  });

  test('TC-TYP-04: Switching from TV Shows back to Movie restores movie content', async () => {
    // Verify switching back to Movie loads different content from TV Shows
    await homePage.selectType(TYPES.TV_SHOWS);
    const tvTitles = (await homePage.getAllCardData()).map(c => c.title);

    await homePage.selectType(TYPES.MOVIE);

    const selectedType = await homePage.getSelectedType();
    expect(selectedType).toBe(TYPES.MOVIE.label);

    const movieCards = await homePage.getAllCardData();
    expect(movieCards.length).toBeGreaterThan(0);

    const hasNewContent = movieCards.map(c => c.title).some(t => !tvTitles.includes(t));
    logger.info(`Movie type restored different content: ${hasNewContent}`);
    expect(hasNewContent).toBe(true);
  });

  test('TC-TYP-05: Type filter persists when switching Category tabs', async () => {
    // Verify selected type is not reset when user switches between category tabs
    await homePage.selectType(TYPES.TV_SHOWS);
    await homePage.selectCategory(CATEGORIES.TREND);

    const selectedType = await homePage.getSelectedType();
    logger.info(`Type after category switch: "${selectedType}"`);
    expect(selectedType).toBe(TYPES.TV_SHOWS.label);
    expect(await homePage.getCardCount()).toBeGreaterThan(0);
  });

  test('TC-TYP-06: Changing Type triggers correct API call', async () => {
    // Verify switching to TV Shows triggers an API call to the /tv/ endpoint
    const calls = await homePage.collectApiCalls(async () => {
      await homePage.selectType(TYPES.TV_SHOWS);
    });

    expect(calls.length).toBeGreaterThan(0);

    const tvCall = calls.find(call =>
      call.url.pathname.includes('/tv/') ||
      call.url.searchParams.get('type') === 'tv'
    );
    expect(tvCall).toBeDefined();

    logger.info(`TV endpoint called: ${tvCall.url.pathname}`);
    expect(tvCall.url.pathname).toContain('/tv/');
  });
});