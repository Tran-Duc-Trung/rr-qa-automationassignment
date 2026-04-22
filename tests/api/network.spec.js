import { test, expect } from '@playwright/test';
import { HomePage, CATEGORIES, TYPES, GENRES } from '../../pages/HomePage.js';
import logger from '../../utils/logger.js';

test.describe('API Network Calls', () => {
  let homePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
  });

  test('TC-API-01: Page load triggers at least one TMDB API call', async () => {
    const calls = await homePage.collectApiCalls(async () => {
      await homePage.goto();
    });

    logger.info(`Total API calls on load: ${calls.length}`);
    expect(calls.length).toBeGreaterThan(0);
  });

  test('TC-API-02: API response has correct data structure', async () => {
    const calls = await homePage.collectApiCalls(async () => {
      await homePage.goto();
    });

    expect(calls.length).toBeGreaterThan(0);

    const body = calls[0].body;
    logger.info(`Response keys: ${Object.keys(body).join(', ')}`);
    expect(body).toHaveProperty('results');
    expect(Array.isArray(body.results)).toBe(true);
    expect(body.results.length).toBeGreaterThan(0);
  });

  test('TC-API-03: All TMDB API responses return HTTP 200', async ({ page }) => {
    const responses = [];

    page.on('response', res => {
      if (res.url().includes('api.themoviedb.org')) {
        responses.push({ url: res.url(), status: res.status() });
      }
    });

    homePage = new HomePage(page);
    await homePage.goto();

    logger.info(`Total TMDB responses: ${responses.length}`);
    expect(responses.length).toBeGreaterThan(0);

    for (const { url, status } of responses) {
      logger.info(`  ${status} → ${url}`);
      expect(status).toBe(200);
    }
  });

  test('TC-API-04: Switching category tab changes the API endpoint', async () => {
    const popularCalls = await homePage.collectApiCalls(async () => {
      await homePage.selectCategory(CATEGORIES.POPULAR);
    });

    const trendCalls = await homePage.collectApiCalls(async () => {
      await homePage.selectCategory(CATEGORIES.TREND);
    });

    const popularUrl = popularCalls[0]?.url.pathname ?? '';
    const trendUrl   = trendCalls[0]?.url.pathname ?? '';

    logger.info(`Popular API path: ${popularUrl}`);
    logger.info(`Trend API path:   ${trendUrl}`);
    expect(popularUrl).not.toBe(trendUrl);
  });

  test('TC-API-05: Selecting Movie type calls movie endpoint', async () => {
    const calls = await homePage.collectApiCalls(async () => {
      await homePage.selectType(TYPES.MOVIE);
    });

    expect(calls.length).toBeGreaterThan(0);

    const pathname = calls[0].url.pathname;
    logger.info(`Movie type API path: ${pathname}`);
    expect(pathname).toContain('/movie/');
  });

  test('TC-API-06: Selecting TV Shows type calls tv endpoint', async () => {
    const calls = await homePage.collectApiCalls(async () => {
      await homePage.selectType(TYPES.TV_SHOWS);
    });

    expect(calls.length).toBeGreaterThan(0);

    const pathname = calls[0].url.pathname;
    logger.info(`TV Shows type API path: ${pathname}`);
    expect(pathname).toContain('/tv/');
  });

  test('TC-API-07: Genre filter passes with_genres param to API', async () => {
    const calls = await homePage.collectApiCalls(async () => {
      await homePage.selectGenre(GENRES.ACTION);
    });

    expect(calls.length).toBeGreaterThan(0);

    const withGenres = calls[0].url.searchParams.get('with_genres');
    logger.info(`with_genres param: ${withGenres}`);
    expect(withGenres).not.toBeNull();
  });

  test('TC-API-08: Pagination triggers API call with correct page number', async () => {
    const calls = await homePage.collectApiCalls(async () => {
      await homePage.goToNextPage();
    });

    expect(calls.length).toBeGreaterThan(0);

    const pageParam = calls[0].url.searchParams.get('page');
    logger.info(`API page param: ${pageParam}`);
    expect(pageParam).toBe('2');
  });
});