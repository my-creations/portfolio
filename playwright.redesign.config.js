import { defineConfig, devices } from '@playwright/test';

const port = 4173;
const origin = `http://127.0.0.1:${port}`;

export default defineConfig({
  testDir: './tests/redesign',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { outputFolder: 'playwright-report/redesign', open: 'never' }]],
  outputDir: 'test-results/redesign',
  use: {
    baseURL: `${origin}/portfolio/`,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  webServer: {
    command: `npm run dev -- --port=${port}`,
    url: `${origin}/portfolio/`,
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});
