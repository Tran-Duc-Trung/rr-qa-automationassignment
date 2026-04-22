import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  retries: 1,
  workers: 1,

  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['allure-playwright'],
  ],

use: {
  baseURL: 'https://tmdb-discover.surge.sh',
  headless: false,
  screenshot: 'off',   // ← tắt screenshot
  video: 'off',        // ← tắt video
  trace: 'off',        // ← tắt trace
  actionTimeout: 20_000,
  navigationTimeout: 50_000,
},

timeout: 50_000,

projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});