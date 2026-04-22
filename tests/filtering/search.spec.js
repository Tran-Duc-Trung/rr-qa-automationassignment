import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage.js';
import logger from '../../utils/logger.js';

test.describe('Search Filter', () => {
  let homePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
  });

  test('TC-SRC-01: Search input is visible and has correct placeholder', async () => {
    await expect(homePage.searchInput).toBeVisible();
    await expect(homePage.searchInput).toHaveAttribute('placeholder', 'SEARCH');
    await expect(homePage.page.locator('img[alt="Search Icon"]')).toBeVisible();
  });

  test('TC-SRC-02: Typing a keyword filters cards by title', async () => {
    const keyword = 'Avatar';
    await homePage.search(keyword);

    const cardCount = await homePage.getCardCount();
    logger.info(`Cards found for "${keyword}": ${cardCount}`);
    expect(cardCount).toBeGreaterThan(0);

    const cards = await homePage.getAllCardData();
    const allMatch = cards.every(card =>
      card.title.toLowerCase().includes(keyword.toLowerCase())
    );
    logger.info(`All titles match keyword: ${allMatch}`);
    expect(allMatch).toBe(true);
  });

  test('TC-SRC-03: Search is case-insensitive', async () => {
    await homePage.search('avatar');
    const lowercaseCount = await homePage.getCardCount();

    await homePage.clearSearch();
    await homePage.search('AVATAR');
    const uppercaseCount = await homePage.getCardCount();

    logger.info(`lowercase: ${lowercaseCount}, uppercase: ${uppercaseCount}`);
    expect(lowercaseCount).toBe(uppercaseCount);
  });

  test('TC-SRC-04: Clearing search input restores original results', async () => {
    const initialCount = await homePage.getCardCount();

    await homePage.search('Batman');
    await homePage.clearSearch();

    const restoredCount = await homePage.getCardCount();
    logger.info(`Restored: ${restoredCount}, initial: ${initialCount}`);
    expect(restoredCount).toBe(initialCount);
  });

  test('TC-SRC-05: Search with partial title returns relevant results', async () => {
    // BUG-004: Some results may not contain keyword in title. See docs/bug-report.md
    const partial = 'Ava';
    await homePage.search(partial);

    const cardCount = await homePage.getCardCount();
    logger.info(`Results for partial "${partial}": ${cardCount}`);
    expect(cardCount).toBeGreaterThan(0);

    const cards = await homePage.getAllCardData();
    const matchCount = cards.filter(card =>
      card.title.toLowerCase().includes(partial.toLowerCase())
    ).length;
    logger.warn(`[BUG-004] ${matchCount}/${cards.length} cards match keyword "${partial}"`);
    expect(matchCount).toBeGreaterThan(0);
  });

  test('TC-SRC-06 [NEGATIVE]: Search with non-existent title shows no results', async () => {
    const keyword = 'XYZXYZXYZ_NO_MATCH_123';
    await homePage.search(keyword);
    await homePage.page.waitForTimeout(2000);

    const cardCount = await homePage.getCardCount();
    logger.info(`Cards for non-existent search: ${cardCount}`);
    expect(cardCount).toBe(0);
  });

  test('TC-SRC-07: Search result updates as user types (live search)', async () => {
    await homePage.searchInput.click();
    await homePage.searchInput.pressSequentially('Av', { delay: 150 });
    await homePage.page.waitForLoadState('networkidle');
    const twoCharCount = await homePage.getCardCount();
    logger.info(`Results after "Av": ${twoCharCount}`);

    await homePage.searchInput.pressSequentially('a', { delay: 150 });
    await homePage.page.waitForLoadState('networkidle');
    const threeCharCount = await homePage.getCardCount();
    logger.info(`Results after "Ava": ${threeCharCount}`);

    expect(threeCharCount).toBeLessThanOrEqual(twoCharCount);
  });

  test('TC-SRC-08 [NEGATIVE]: Search with special characters does not crash the page', async () => {
    await homePage.search('!@#$%^&*()');
    await homePage.page.waitForTimeout(1500);

    await expect(homePage.page.locator('header nav')).toBeVisible();

    const cardCount = await homePage.getCardCount();
    logger.info(`Cards after special char search: ${cardCount}`);
  });
});