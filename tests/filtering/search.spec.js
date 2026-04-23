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

  test('TC-SRC-03: Clearing search input restores original results', async () => {
    const initialCount = await homePage.getCardCount();

    await homePage.search('Batman');
    await homePage.clearSearch();

    const restoredCount = await homePage.getCardCount();
    logger.info(`Restored: ${restoredCount}, initial: ${initialCount}`);
    expect(restoredCount).toBe(initialCount);
  });

  test('TC-SRC-04: Search with partial title returns relevant results', async () => {
    // BUG-004: Some results may not contain keyword in title. See docs/bug-report.md
    const partial = 'Ava';
    await homePage.search(partial);

    const cards = await homePage.getAllCardData();
    const matchCount = cards.filter(card =>
      card.title.toLowerCase().includes(partial.toLowerCase())
    ).length;

    expect(matchCount).toBe(cards.length);
  });

  test('TC-SRC-05: Search result updates as user types (live search)', async () => {
    await homePage.searchInput.click();
    await homePage.searchInput.pressSequentially('Av', { delay: 150 });
    await homePage.page.waitForLoadState('domcontentloaded');
    const twoCharCount = await homePage.getCardCount();
    logger.info(`Results after "Av": ${twoCharCount}`);

    await homePage.searchInput.pressSequentially('a', { delay: 150 });
    await homePage.page.waitForLoadState('domcontentloaded');
    const threeCharCount = await homePage.getCardCount();
    logger.info(`Results after "Ava": ${threeCharCount}`);

    expect(threeCharCount).toBeLessThanOrEqual(twoCharCount);
  });

  test('TC-SRC-06 [NEGATIVE]: Invalid search inputs are handled gracefully', async () => {
    // Verify non-existent keyword returns no results
    await homePage.search('XYZXYZXYZ_NO_MATCH_123');
    await homePage.page.waitForTimeout(2000);

    const noResultCount = await homePage.getCardCount();
    logger.info(`Cards for non-existent search: ${noResultCount}`);
    expect(noResultCount).toBe(0);

    // Verify special characters do not crash the page
    await homePage.clearSearch();
    await homePage.search('!@#$%^&*()');
    await homePage.page.waitForTimeout(1500);

    await expect(homePage.page.locator('header nav')).toBeVisible();
    expect(await homePage.getCardCount()).toBeGreaterThanOrEqual(0);
  });
});