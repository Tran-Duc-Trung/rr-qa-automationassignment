import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage.js';
import logger from '../../utils/logger.js';

test.describe('Year Filter', () => {
  let homePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
  });

  test('TC-YR-01: Default Year range is 1900 to 2025', async () => {
    const { from, to } = await homePage.getSelectedYears();
    logger.info(`Default year range: ${from} – ${to}`);
    expect(from).toBe('1900');
    expect(to).toBe('2025');
  });

  test('TC-YR-02: Year From dropdown has options from 1900 to 2025', async () => {
    await homePage.page.locator('p:has-text("Year") + div [class*="-control"]').first().click();

    await expect(homePage.page.locator('#react-select-4-option-0')).toHaveText('1900');

    const lastOpt = homePage.page.locator('#react-select-4-option-125');
    await lastOpt.scrollIntoViewIfNeeded();
    await expect(lastOpt).toHaveText('2025');

    await homePage.page.keyboard.press('Escape');
  });

  test('TC-YR-03: Selecting a specific From year filters results', async () => {
    // BUG-005: Some cards may have years outside the selected range. See docs/bug-report.md
    const fromYear = 2020;
    await homePage.selectYearFrom(fromYear);

    const { from } = await homePage.getSelectedYears();
    expect(from).toBe(String(fromYear));
    expect(await homePage.getCardCount()).toBeGreaterThan(0);

    const cards = await homePage.getAllCardData();
    const invalidCards = cards.filter(card => {
      const year = parseInt(card.year);
      return !isNaN(year) && year < fromYear;
    });
    logger.warn(`[BUG-005] Cards with year < ${fromYear}: ${invalidCards.length}`);
    invalidCards.forEach(card => logger.warn(`  - ${card.title} (${card.year})`));
    expect(invalidCards.length).toBe(0);
  });

  test('TC-YR-04: Selecting a specific To year filters results', async () => {
    const toYear = 2015;
    await homePage.selectYearTo(toYear);

    const { to } = await homePage.getSelectedYears();
    expect(to).toBe(String(toYear));

    const cards = await homePage.getAllCardData();
    const allValid = cards.every(card => {
      const year = parseInt(card.year);
      return isNaN(year) || year <= toYear;
    });
    logger.info(`All cards have year <= ${toYear}: ${allValid}`);
    expect(allValid).toBe(true);
  });

  test('TC-YR-05: Selecting a year range (2010–2020) returns relevant results', async () => {
    const fromYear = 2010;
    const toYear = 2020;

    await homePage.selectYearRange(fromYear, toYear);

    const { from, to } = await homePage.getSelectedYears();
    expect(from).toBe(String(fromYear));
    expect(to).toBe(String(toYear));

    const cards = await homePage.getAllCardData();
    logger.info(`Cards in range ${fromYear}–${toYear}: ${cards.length}`);
    expect(cards.length).toBeGreaterThan(0);

    const allInRange = cards.every(card => {
      const year = parseInt(card.year);
      return isNaN(year) || (year >= fromYear && year <= toYear);
    });
    logger.info(`All cards within year range: ${allInRange}`);
    expect(allInRange).toBe(true);
  });

  test('TC-YR-06 [NEGATIVE]: Inverted range (From > To) is not allowed', async () => {
    const { from: originalFrom, to: originalTo } = await homePage.getSelectedYears();

    await homePage.selectYearFrom(2024);
    await homePage.selectYearTo(2000);

    await homePage.page.waitForTimeout(1500);

    const { from, to } = await homePage.getSelectedYears();
    logger.info(`After inverted range — From: ${from}, To: ${to}`);

    expect(parseInt(from)).toBeLessThan(parseInt(to));
  });

  test('TC-YR-07: Changing year triggers API call with year params', async () => {
    const calls = await homePage.collectApiCalls(async () => {
      await homePage.selectYearFrom(2022);
    });

    expect(calls.length).toBeGreaterThan(0);

    const yearCall = calls.find(call =>
      call.url.searchParams.has('release_date.gte') ||
      call.url.searchParams.has('release_date.lte')
    );
    expect(yearCall).toBeDefined();

    const params = yearCall.url.searchParams;
    logger.info(`All params: ${params.toString()}`);
    expect(
      params.has('release_date.gte') ||
      params.has('release_date.lte')
    ).toBe(true);
  });
});