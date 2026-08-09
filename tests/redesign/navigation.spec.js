import { test, expect } from '@playwright/test';

const basePath = '/portfolio';

test('English primary navigation reaches each Portfolio section', async ({ page }) => {
  await page.goto(`${basePath}/`);

  const navigation = page.getByRole('navigation', { name: 'Primary' });
  const destinations = [
    ['Work', `${basePath}/work/`],
    ['Writing', `${basePath}/writing/`],
    ['About', `${basePath}/about/`],
  ];

  for (const [name, pathname] of destinations) {
    const link = navigation.getByRole('link', { name, exact: true });
    await expect(link).toHaveAttribute('href', pathname);
    await link.click();
    await expect(page).toHaveURL(new RegExp(`${pathname}$`));
    await page.goBack();
  }
});

test('Portuguese primary navigation reaches each localized Portfolio section', async ({ page }) => {
  await page.goto(`${basePath}/pt/`);

  const navigation = page.getByRole('navigation', { name: 'Primary' });
  const destinations = [
    ['Trabalho', `${basePath}/pt/trabalho/`],
    ['Escrita', `${basePath}/pt/escrita/`],
    ['Sobre', `${basePath}/pt/sobre/`],
  ];

  for (const [name, pathname] of destinations) {
    const link = navigation.getByRole('link', { name, exact: true });
    await expect(link).toHaveAttribute('href', pathname);
    await link.click();
    await expect(page).toHaveURL(new RegExp(`${pathname}$`));
    await page.goBack();
  }
});

test.describe('mobile navigation', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('opens with the menu button and closes with Escape', async ({ page }) => {
    await page.goto(`${basePath}/`);

    const toggle = page.locator('[data-test="nav-toggle"]');
    const mobileNavigation = page.locator('[data-test="mobile-navigation"]');

    await expect(toggle).toHaveAccessibleName('Open menu');
    await expect(mobileNavigation).toBeHidden();
    await toggle.click();
    await expect(toggle).toHaveAccessibleName('Close menu');
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await expect(mobileNavigation).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(mobileNavigation).toBeHidden();
  });
});
