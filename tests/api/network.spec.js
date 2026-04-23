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
      await homePage.selectCategory(CATEGORIES.TREND);
    });

    logger.info(`Total API calls on load: ${calls.length}`);
    expect(calls.length).toBeGreaterThan(0);
  });

  test('TC-API-02: API response has correct data structure', async () => {
    const calls = await homePage.collectApiCalls(async () => {
      await homePage.selectCategory(CATEGORIES.TREND);
    });

    expect(calls.length).toBeGreaterThan(0);

    const movieListCall = calls.find(call =>
      call.url.pathname.includes('discover') ||
      call.url.pathname.includes('popular') ||
      call.url.pathname.includes('trending')
    );
    expect(movieListCall).toBeDefined();

    const body = movieListCall.body;
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

    await new HomePage(page).goto();

    logger.info(`Total TMDB responses: ${responses.length}`);
    expect(responses.length).toBeGreaterThan(0);

    for (const { url, status } of responses) {
      logger.info(`  ${status} → ${url}`);
      expect(status).toBe(200);
    }
  });

  test('TC-API-04: Switching category tab changes the API endpoint', async () => {
    const trendCalls = await homePage.collectApiCalls(async () => {
      await homePage.selectCategory(CATEGORIES.TREND);
    });

    const popularCalls = await homePage.collectApiCalls(async () => {
      await homePage.selectCategory(CATEGORIES.POPULAR);
    });

    const popularCall = popularCalls.find(call => call.url.pathname.includes('popular'));
    const trendCall = trendCalls.find(call => call.url.pathname.includes('trending'));

    expect(popularCall).toBeDefined();
    expect(trendCall).toBeDefined();

    logger.info(`Popular API path: ${popularCall.url.pathname}`);
    logger.info(`Trend API path:   ${trendCall.url.pathname}`);
    expect(popularCall.url.pathname).not.toBe(trendCall.url.pathname);
  });

  test('TC-API-05: Selecting type calls correct API endpoint', async () => {
    // Movie type
    await homePage.selectType(TYPES.TV_SHOWS); // switch sang TV trước để trigger API
    const movieCalls = await homePage.collectApiCalls(async () => {
      await homePage.selectType(TYPES.MOVIE);
    });

    const movieCall = movieCalls.find(call => call.url.pathname.includes('/movie/'));
    expect(movieCall).toBeDefined();
    logger.info(`Movie type API path: ${movieCall.url.pathname}`);
    expect(movieCall.url.pathname).toContain('/movie/');

    // TV Shows type
    const tvCalls = await homePage.collectApiCalls(async () => {
      await homePage.selectType(TYPES.TV_SHOWS);
    });

    const tvCall = tvCalls.find(call => call.url.pathname.includes('/tv/'));
    expect(tvCall).toBeDefined();
    logger.info(`TV Shows type API path: ${tvCall.url.pathname}`);
    expect(tvCall.url.pathname).toContain('/tv/');
  });

  test('TC-API-06: Genre filter passes with_genres param to API', async () => {
    const calls = await homePage.collectApiCalls(async () => {
      await homePage.selectGenre(GENRES.ACTION);
    });

    expect(calls.length).toBeGreaterThan(0);

    const genreCall = calls.find(call => call.url.searchParams.has('with_genres'));
    expect(genreCall).toBeDefined();

    const withGenres = genreCall.url.searchParams.get('with_genres');
    logger.info(`with_genres param: ${withGenres}`);
    expect(withGenres).not.toBeNull();
    expect(withGenres).not.toBe('');
  });

  test('TC-API-07: Pagination triggers API call with correct page number', async () => {
    const calls = await homePage.collectApiCalls(async () => {
      await homePage.goToNextPage();
    });

    expect(calls.length).toBeGreaterThan(0);

    const pageCall = calls.find(call => call.url.searchParams.has('page'));
    expect(pageCall).toBeDefined();

    const pageParam = pageCall.url.searchParams.get('page');
    logger.info(`API page param: ${pageParam}`);
    expect(pageParam).toBe('2');
  });
});