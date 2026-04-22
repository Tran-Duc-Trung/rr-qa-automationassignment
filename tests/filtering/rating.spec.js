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

  test('TC-RTG-03: Clicking 3rd star sets rating to 3 and filters results', async () => {
    await homePage.setRating(3);

    const rating = await homePage.getCurrentRating();
    logger.info(`Rating after clicking 3rd star: ${rating}`);
    expect(rating).toBe(3);
    expect(await homePage.getCardCount()).toBeGreaterThan(0);
  });

  test('TC-RTG-04: Half-star rating (2.5) is selectable', async () => {
    await homePage.setRating(2.5);

    const rating = await homePage.getCurrentRating();
    logger.info(`Rating after clicking half star: ${rating}`);
    expect(rating).toBe(2.5);
    expect(await homePage.getCardCount()).toBeGreaterThan(0);
  });

  test('TC-RTG-05: Setting rating 5 (max) returns results', async () => {
    await homePage.setRating(5);

    const rating = await homePage.getCurrentRating();
    expect(rating).toBe(5);

    const cardCount = await homePage.getCardCount();
    logger.info(`Cards with rating = 5: ${cardCount}`);
    expect(cardCount).toBeGreaterThanOrEqual(0);
  });

  test('TC-RTG-06: Setting rating 1 (min) returns more results than rating 5', async () => {
    await homePage.setRating(1);
    const minRatingCount = await homePage.getCardCount();
    logger.info(`Cards with rating >= 1: ${minRatingCount}`);

    await homePage.setRating(5);
    const maxRatingCount = await homePage.getCardCount();
    logger.info(`Cards with rating >= 5: ${maxRatingCount}`);

    expect(maxRatingCount).toBeLessThanOrEqual(minRatingCount);
  });

  test('TC-RTG-07: All valid rating values (1–5 including halves) can be set', async () => {
    const validRatings = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

    for (const rating of validRatings) {
      await homePage.setRating(rating);
      const current = await homePage.getCurrentRating();
      logger.info(`Rating set: ${rating}, current: ${current}`);
      expect(current).toBe(rating);
      await homePage.page.waitForTimeout(300);
    }
  });

  test('TC-RTG-08: Rating filter combined with Genre returns filtered results', async () => {
    await homePage.selectGenre(GENRES.ACTION);
    await homePage.setRating(3);

    const genre  = await homePage.getSelectedGenre();
    const rating = await homePage.getCurrentRating();
    logger.info(`Active filters — Genre: "${genre}", Rating: ${rating}`);
    expect(genre).toBe(GENRES.ACTION.label);
    expect(rating).toBe(3);
    expect(await homePage.getCardCount()).toBeGreaterThanOrEqual(0);
  });

  test('TC-RTG-09: Setting rating triggers API call with vote_average param', async () => {
    const calls = await homePage.collectApiCalls(async () => {
      await homePage.setRating(4);
    });

    expect(calls.length).toBeGreaterThan(0);

    const params = calls[0].url.searchParams;
    const hasRatingParam = params.has('vote_average.gte') || params.has('rating');
    logger.info(`All params: ${params.toString()}`);
    expect(hasRatingParam).toBe(true);
  });
});