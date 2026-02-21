import { test, expect } from '@playwright/test';

test.describe('Language Toggle', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);
  });

  test('should display language toggle button', async ({ page }) => {
    const langToggle = page.locator('#desktop-lang-toggle');
    await expect(langToggle).toBeVisible();
  });

  test('should toggle language from EN to PT', async ({ page }) => {
    const langToggle = page.locator('#desktop-lang-toggle');

    await expect(langToggle).toContainText('EN');

    await langToggle.click();
    await page.waitForTimeout(500);

    await expect(langToggle).toContainText('PT');
  });

  test('should toggle back to English', async ({ page }) => {
    const langToggle = page.locator('#desktop-lang-toggle');

    await langToggle.click();
    await page.waitForTimeout(500);
    await expect(langToggle).toContainText('PT');

    await langToggle.click();
    await page.waitForTimeout(500);
    await expect(langToggle).toContainText('EN');
  });

  test('should persist language preference across page reload', async ({ page }) => {
    const langToggle = page.locator('#desktop-lang-toggle');

    await langToggle.click();
    await page.waitForTimeout(500);

    await page.reload();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);

    await expect(langToggle).toContainText('PT');
  });
});

test.describe('Mobile Language Toggle', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('should have language toggle in mobile menu', async ({ page }) => {
    const hamburgerIcon = page.locator('.hamburger-icon');
    await hamburgerIcon.click();
    await page.waitForTimeout(300);

    const langToggle = page.locator('#mobile-lang-toggle');
    await expect(langToggle).toBeVisible();
  });
});
