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
    const selectedType = await homePage.getSelectedType();
    logger.info(`Default type: "${selectedType}"`);
    expect(selectedType).toBe(TYPES.MOVIE.label);
  });

  test('TC-TYP-02: Type dropdown opens and shows both options', async () => {
    await homePage.page.locator('p:has-text("Type") + div [class*="-control"]').click();

    await expect(homePage.page.locator(`#${TYPES.MOVIE.optionId}`)).toBeVisible();
    await expect(homePage.page.locator(`#${TYPES.TV_SHOWS.optionId}`)).toBeVisible();
  });

  test('TC-TYP-03: Selecting "TV Shows" updates content', async () => {
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
    await homePage.selectType(TYPES.TV_SHOWS);
    await homePage.selectCategory(CATEGORIES.TREND);

    const selectedType = await homePage.getSelectedType();
    logger.info(`Type after category switch: "${selectedType}"`);
    expect(selectedType).toBe(TYPES.TV_SHOWS.label);
    expect(await homePage.getCardCount()).toBeGreaterThan(0);
  });

  test('TC-TYP-06: Changing Type triggers correct API call', async () => {
    const calls = await homePage.collectApiCalls(async () => {
      await homePage.selectType(TYPES.TV_SHOWS);
    });

    expect(calls.length).toBeGreaterThan(0);

    const url = calls[0].url;
    logger.info(`API URL: ${url.href}`);

    const isTvEndpoint = url.pathname.includes('/tv/') ||
      url.searchParams.get('type') === 'tv';
    logger.info(`TV endpoint called: ${isTvEndpoint}`);
    expect(isTvEndpoint).toBe(true);
  });
});