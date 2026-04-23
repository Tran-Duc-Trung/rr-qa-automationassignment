import { test, expect } from '@playwright/test';
import { HomePage, CATEGORIES } from '../../pages/HomePage.js';
import logger from '../../utils/logger.js';

test.describe('Category Tabs', () => {
  let homePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
  });

  test('TC-CAT-01: Default active tab is "Popular" on page load', async () => {
    // Verify "Popular" is the default active tab and cards are loaded on page load
    const activeLink = homePage.page.locator('header nav ul li > a[href="/popular"]');
    await expect(activeLink).not.toHaveClass(/text-blue-500/);

    const cardCount = await homePage.getCardCount();
    logger.info(`Cards loaded on Popular tab: ${cardCount}`);
    expect(cardCount).toBeGreaterThan(0);
  });

  test('TC-CAT-02: All four category tabs are visible in the nav', async () => {
    // Verify all 4 tabs are rendered and visible in the navigation bar
    for (const category of Object.values(CATEGORIES)) {
      const link = homePage.page.locator(`a[href="${category.href}"]`);
      await expect(link).toBeVisible();
      logger.info(`Tab visible: ${category.label}`);
    }
  });

  test('TC-CAT-03: Only one tab is active at a time', async () => {
    // Verify clicking a tab activates only that tab — no multiple active tabs at once
    for (const category of Object.values(CATEGORIES)) {
      await homePage.selectCategory(category);

      const activeLi = homePage.page.locator(`li:has(a[href="${category.href}"])`);
      await expect(activeLi).toHaveClass(/text-white/);

      const activeCount = await homePage.page
        .locator('header nav ul li.text-white, header nav ul li[class*="text-white"]')
        .count();
      expect(activeCount).toBe(1);
    }
  });

  test('TC-CAT-04: Clicking "Trend" tab loads different content from Popular', async () => {
    // Verify switching to Trend tab loads different content from Popular tab
    const popularTitles = (await homePage.getAllCardData()).map(c => c.title);

    await homePage.selectCategory(CATEGORIES.TREND);

    const trendTitles = (await homePage.getAllCardData()).map(c => c.title);
    const hasNewContent = trendTitles.some(t => !popularTitles.includes(t));
    logger.info(`Trend tab shows different content: ${hasNewContent}`);
    expect(hasNewContent).toBe(true);
  });

  test('TC-CAT-05: Clicking "Newest" tab loads different content from Popular', async () => {
    // Verify switching to Newest tab loads different content from Popular tab
    const popularTitles = (await homePage.getAllCardData()).map(c => c.title);

    await homePage.selectCategory(CATEGORIES.NEWEST);

    const newestTitles = (await homePage.getAllCardData()).map(c => c.title);
    const hasNewContent = newestTitles.some(t => !popularTitles.includes(t));
    logger.info(`Newest tab shows different content: ${hasNewContent}`);
    expect(hasNewContent).toBe(true);
  });

  test('TC-CAT-06: Clicking "Top rated" tab loads different content from Popular', async () => {
    // Verify switching to Top Rated tab loads different content from Popular tab
    const popularTitles = (await homePage.getAllCardData()).map(c => c.title);

    await homePage.selectCategory(CATEGORIES.TOP_RATED);

    const topRatedTitles = (await homePage.getAllCardData()).map(c => c.title);
    const hasNewContent = topRatedTitles.some(t => !popularTitles.includes(t));
    logger.info(`Top Rated tab shows different content: ${hasNewContent}`);
    expect(hasNewContent).toBe(true);
  });

  test('TC-CAT-07 [NEGATIVE]: Accessing category via direct URL slug may fail', async ({ page }) => {
    // BUG-002: Direct slug access returns "page not found" instead of rendering content
    await page.goto('/popular');
    await page.waitForLoadState('networkidle');

    const count = await page.locator('div.grid.grid-cols-3 > div.flex.flex-col.items-center').count();
    logger.warn(`[BUG-002] Direct slug /popular — cards rendered: ${count}`);

    await expect(page.getByText('page not found')).toBeVisible();
  });
});