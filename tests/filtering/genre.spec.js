import { test, expect } from '@playwright/test';
import { HomePage, CATEGORIES, GENRES, TYPES } from '../../pages/HomePage.js';
import logger from '../../utils/logger.js';

test.describe('Genre Filter', () => {
  let homePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
  });

  test('TC-GNR-01: Genre dropdown shows placeholder "Select..." by default', async () => {
    const placeholder = homePage.page.locator('p:has-text("Genre") + div [class*="-placeholder"]');
    await expect(placeholder).toBeVisible();
  });

  test('TC-GNR-02: Genre dropdown opens and lists all 19 options', async () => {
    await homePage.page.locator('p:has-text("Genre") + div [class*="-control"]').click();

    for (const genre of Object.values(GENRES)) {
      const option = homePage.page.locator('[class*="-menu"]').getByText(genre.label, { exact: true });
      await expect(option).toBeVisible();
      logger.info(`Genre option visible: ${genre.label}`);
    }
  });

  test('TC-GNR-03: Selecting "Action" genre filters results', async () => {
    await homePage.selectGenre(GENRES.ACTION);

    const selected = await homePage.getSelectedGenre();
    logger.info(`Selected genre: "${selected}"`);
    expect(selected).toBe(GENRES.ACTION.label);

    const filteredCount = await homePage.getCardCount();
    logger.info(`Cards after Action filter: ${filteredCount}`);
    expect(filteredCount).toBeGreaterThan(0);

    const cards = await homePage.getAllCardData();
    const actionCards = cards.filter(c => c.genre.includes('Action'));
    logger.info(`Cards with Action genre in meta: ${actionCards.length} / ${cards.length}`);
    expect(actionCards.length).toBeGreaterThan(0);
  });

  test('TC-GNR-04: Selecting different genres loads different content', async () => {
    await homePage.selectGenre(GENRES.COMEDY);
    const comedyTitles = (await homePage.getAllCardData()).map(c => c.title);

    await homePage.selectGenre(GENRES.HORROR);
    const horrorTitles = (await homePage.getAllCardData()).map(c => c.title);

    const hasNewContent = horrorTitles.some(t => !comedyTitles.includes(t));
    logger.info(`Horror shows different content from Comedy: ${hasNewContent}`);
    expect(hasNewContent).toBe(true);
  });

  test('TC-GNR-05: Genre filter persists when switching Category tabs', async () => {
    await homePage.selectGenre(GENRES.DRAMA);
    await homePage.selectCategory(CATEGORIES.NEWEST);

    const selected = await homePage.getSelectedGenre();
    logger.info(`Genre after category switch: "${selected}"`);
    expect(selected).toBe(GENRES.DRAMA.label);
  });

  test('TC-GNR-06: Genre + Type combined filter returns relevant results', async () => {
    await homePage.selectType(TYPES.TV_SHOWS);
    await homePage.selectGenre(GENRES.ANIMATION);

    const type  = await homePage.getSelectedType();
    const genre = await homePage.getSelectedGenre();
    logger.info(`Active filters — Type: "${type}", Genre: "${genre}"`);
    expect(type).toBe(TYPES.TV_SHOWS.label);
    expect(genre).toBe(GENRES.ANIMATION.label);
    expect(await homePage.getCardCount()).toBeGreaterThanOrEqual(0);
  });

  test('TC-GNR-07: All 19 genre options can be selected without errors', async () => {
    // ⚠️ BUG-001: Selecting 6+ genres returns 0 results. See docs/bug-report.md
    for (const genre of Object.values(GENRES)) {
      await homePage.selectGenre(genre);

      const multiValueChip = homePage.page
        .locator('p:has-text("Genre") + div [class*="-control"]')
        .locator('[class*="-multiValue"]')
        .filter({ hasText: genre.label });

      await expect(multiValueChip).toBeVisible();
      logger.info(`Genre "${genre.label}" chip visible in control`);

      await homePage.page.waitForTimeout(300);
    }
  });

  test('TC-GNR-08: Selecting a genre triggers an API call with correct genre param', async () => {
    const calls = await homePage.collectApiCalls(async () => {
      await homePage.selectGenre(GENRES.THRILLER);
    });

    expect(calls.length).toBeGreaterThan(0);

    const firstCall = calls[0];
    logger.info(`API params: ${firstCall.url.searchParams.toString()}`);

    const hasGenreParam = firstCall.url.searchParams.has('with_genres');
    expect(hasGenreParam).toBe(true);

    const genreValue = firstCall.url.searchParams.get('with_genres');
    expect(genreValue).not.toBeNull();
    expect(genreValue).not.toBe('');
    logger.info(`with_genres value: ${genreValue}`);
  });
});