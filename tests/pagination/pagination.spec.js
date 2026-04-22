import { test, expect } from '@playwright/test';
import { HomePage, GENRES } from '../../pages/HomePage.js';
import logger from '../../utils/logger.js';

test.describe('Pagination', () => {
  let homePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
  });

  test('TC-PAG-01: Pagination component is visible after scrolling down', async () => {
    await homePage.scrollToBottom();
    await expect(homePage.pagination).toBeVisible();
  });

  test('TC-PAG-02: Page 1 is selected by default and "Previous" is disabled', async () => {
    await homePage.scrollToBottom();

    const currentPage = await homePage.getCurrentPage();
    logger.info(`Current page: ${currentPage}`);
    expect(currentPage).toBe('1');
    expect(await homePage.isPreviousDisabled()).toBe(true);
  });

  test('TC-PAG-03: "Next" button is enabled on page 1', async () => {
    await homePage.scrollToBottom();
    expect(await homePage.isNextDisabled()).toBe(false);
  });

  test('TC-PAG-04: Clicking "Next" navigates to page 2 with new content', async () => {
    const page1Titles = (await homePage.getAllCardData()).map(c => c.title);

    await homePage.goToNextPage();
    await homePage.scrollToBottom();

    const currentPage = await homePage.getCurrentPage();
    logger.info(`After clicking Next — current page: ${currentPage}`);
    expect(currentPage).toBe('2');

    const page2Titles = (await homePage.getAllCardData()).map(c => c.title);
    const hasNewContent = page2Titles.some(t => !page1Titles.includes(t));
    logger.info(`Page 2 shows different content: ${hasNewContent}`);
    expect(hasNewContent).toBe(true);
  });

  test('TC-PAG-05: "Previous" button is enabled on page 2', async () => {
    await homePage.goToNextPage();
    await homePage.scrollToBottom();
    expect(await homePage.isPreviousDisabled()).toBe(false);
  });

  test('TC-PAG-06: Clicking "Previous" from page 2 returns to page 1', async () => {
    await homePage.goToNextPage();
    await homePage.goToPreviousPage();
    await homePage.scrollToBottom();

    expect(await homePage.getCurrentPage()).toBe('1');
    expect(await homePage.isPreviousDisabled()).toBe(true);
  });

  test('TC-PAG-07: Clicking a specific page number navigates correctly', async () => {
    await homePage.goToPage(3);
    await homePage.scrollToBottom();

    const currentPage = await homePage.getCurrentPage();
    logger.info(`After clicking page 3 — current page: ${currentPage}`);
    expect(currentPage).toBe('3');
  });

  test('TC-PAG-08: Pagination break (...) is visible for large page counts', async () => {
    await homePage.scrollToBottom();
    expect(await homePage.hasPaginationBreak()).toBe(true);
  });

  test('TC-PAG-09: Each page loads the same number of cards', async () => {
    const page1Count = await homePage.getCardCount();
    logger.info(`Cards on page 1: ${page1Count}`);
    expect(page1Count).toBeGreaterThan(0);

    await homePage.goToNextPage();
    const page2Count = await homePage.getCardCount();
    logger.info(`Cards on page 2: ${page2Count}`);
    expect(page2Count).toBe(page1Count);
  });

  test('TC-PAG-10: Pagination resets to page 1 when a filter is changed', async () => {
    await homePage.goToNextPage();
    await homePage.scrollToBottom();
    expect(await homePage.getCurrentPage()).toBe('2');

    await homePage.selectGenre(GENRES.ACTION);
    await homePage.scrollToBottom();

    const currentPage = await homePage.getCurrentPage();
    logger.info(`Page after filter change: ${currentPage}`);
    expect(currentPage).toBe('1');
  });

  test('TC-PAG-11 [NEGATIVE]: Last few pages may not load correctly (known bug)', async () => {
    // BUG-002: Last pages may return empty results
    await homePage.scrollToBottom();

    const secondToLast = homePage.page.locator('div#react-paginate ul li').nth(-2).locator('a');
    const lastPageNum  = await secondToLast.innerText().catch(() => 'unknown');
    logger.info(`Last page number shown: ${lastPageNum}`);

    await secondToLast.click().catch(() => {
      logger.warn('[BUG-002] Could not click last page number');
    });

    await homePage.page.waitForTimeout(2000);
    const cardCount = await homePage.getCardCount();
    logger.warn(`[BUG-002] Cards on last page: ${cardCount}`);
  });

  test('TC-PAG-12: Navigating to page 2 triggers API call with page=2 param', async () => {
    const calls = await homePage.collectApiCalls(async () => {
      await homePage.goToNextPage();
    });

    expect(calls.length).toBeGreaterThan(0);

    const pageParam = calls[0].url.searchParams.get('page');
    logger.info(`API page param: ${pageParam}`);
    expect(pageParam).toBe('2');
  });
});