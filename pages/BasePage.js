import { expect } from '@playwright/test';

export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(path = '/') {
    await this.page.goto(path);
    await this.page.waitForLoadState('domcontentloaded');
  }

  async scrollToBottom() {
    const container = this.page.locator('div.w-full.h-full.overflow-scroll');
    await container.evaluate(el => el.scrollTo(0, el.scrollHeight));
    await this.page.waitForTimeout(500);
  }

  async scrollToTop() {
    const container = this.page.locator('div.w-full.h-full.overflow-scroll');
    await container.evaluate(el => el.scrollTo(0, 0));
    await this.page.waitForTimeout(300);
  }

  async waitForCardsLoaded() {
    try {
      await this.page.waitForSelector('div.grid.grid-cols-3 > div.flex.flex-col', {
        state: 'visible',
        timeout: 15000,
      });
    } catch {
      // Accept empty results (e.g. no movies match the selected filters)
      await this.page.waitForLoadState('domcontentloaded');
    }
  }
}