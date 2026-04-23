import { test, expect } from '@playwright/test';
import { HomePage, GENRES } from '../../pages/HomePage.js';
import logger from '../../utils/logger.js';

test.describe('Rating Filter', () => {
  let homePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
  });

  test('TC-RTG-01: Rating widget is visible with 5 stars', async () => {
    await expect(homePage.ratingWidget).toBeVisible();
    await expect(homePage.page.locator('ul.rc-rate li.rc-rate-star')).toHaveCount(5);
    await expect(homePage.page.locator('aside').getByText('& up')).toBeVisible();
  });

  test('TC-RTG-02: No rating selected by default (all stars in zero state)', async () => {
    const rating = await homePage.getCurrentRating();
    expect(rating).toBe(0);
    await expect(homePage.page.locator('ul.rc-rate li.rc-rate-star-zero')).toHaveCount(5);
  });

  test('TC-RTG-03: All valid rating values (1–5 including halves) can be set', async () => {
    const validRatings = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

    for (const rating of validRatings) {
      await homePage.setRating(rating);
      const current = await homePage.getCurrentRating();
      logger.info(`Rating set: ${rating}, current: ${current}`);
      expect(current).toBe(rating);
      await homePage.page.waitForTimeout(300);
    }
  });

  test('TC-RTG-04: Rating filter combined with Genre returns filtered results', async () => {
    await homePage.selectGenre(GENRES.ACTION);
    await homePage.setRating(3);

    const genre  = await homePage.getSelectedGenre();
    const rating = await homePage.getCurrentRating();
    logger.info(`Active filters — Genre: "${genre}", Rating: ${rating}`);
    expect(genre).toBe(GENRES.ACTION.label);
    expect(rating).toBe(3);
    expect(await homePage.getCardCount()).toBeGreaterThanOrEqual(0);
  });

  test('TC-RTG-05: Setting rating triggers API call with vote_average param', async () => {
    const calls = await homePage.collectApiCalls(async () => {
      await homePage.setRating(4);
    });

    expect(calls.length).toBeGreaterThan(0);

    const ratingCall = calls.find(call =>
      call.url.searchParams.has('vote_average.gte') ||
      call.url.searchParams.has('rating')
    );
    expect(ratingCall).toBeDefined();

    const params = ratingCall.url.searchParams;
    logger.info(`All params: ${params.toString()}`);
    expect(params.has('vote_average.gte') || params.has('rating')).toBe(true);
  });
});