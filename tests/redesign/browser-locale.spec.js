import { test, expect } from '@playwright/test';

const basePath = '/portfolio';

test.describe('Portuguese browser locale', () => {
  test.use({ locale: 'pt-PT' });

  test('opens the Portuguese Landing Page on the first visit', async ({ page }) => {
    await page.goto(`${basePath}/`);

    await expect(page).toHaveURL(new RegExp(`${basePath}/pt/$`));
    await expect(page.locator('html')).toHaveAttribute('lang', 'pt');
  });

  test('an explicit English choice overrides browser detection', async ({ page }) => {
    await page.goto(`${basePath}/pt/`);
    await page.locator('.nav--desktop .locale-option[href][hreflang="en"]').click();

    await expect(page).toHaveURL(new RegExp(`${basePath}/$`));
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect.poll(() => page.evaluate(() => localStorage.getItem('portfolio:locale'))).toBe('en');

    await page.reload();
    await expect(page).toHaveURL(new RegExp(`${basePath}/$`));
  });
});

test.describe('Non-Portuguese browser locale', () => {
  test.use({ locale: 'fr-FR' });

  test('keeps English as the default language', async ({ page }) => {
    await page.goto(`${basePath}/`);

    await expect(page).toHaveURL(new RegExp(`${basePath}/$`));
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  });
});
