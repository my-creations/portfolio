import { test, expect } from '@playwright/test';

const basePath = '/portfolio';

test('Case Study aside shows the facts of its own Project', async ({ page }) => {
  await page.goto(`${basePath}/work/dose-segura/`);

  const aside = page.locator('.case-study__aside');
  await expect(aside.locator('.chip').first()).toHaveText('Expo / React Native');
  await expect(aside.getByRole('link', { name: 'Source' })).toHaveAttribute(
    'href',
    'https://github.com/my-creations/dose-segura'
  );
  await expect(aside).not.toContainText('Vanilla JS (ES modules)');
});

test('Case Study pager walks the localized Case Studies in order', async ({ page }) => {
  await page.goto(`${basePath}/work/cuf-prepara/`);

  const pager = page.locator('[data-test="case-study-pager"]');
  await expect(pager.locator('a[rel="prev"]')).toHaveCount(0);
  await pager.locator('a[rel="next"]').click();
  await expect(page).toHaveURL(new RegExp(`${basePath}/work/dose-segura/$`));

  await page.goto(`${basePath}/pt/trabalho/dose-segura/`);
  await expect(page.locator('[data-test="case-study-pager"] a[rel="prev"]')).toHaveAttribute(
    'href',
    `${basePath}/pt/trabalho/cuf-prepara/`
  );
});

test('wordmark links back to the localized Landing Page', async ({ page }) => {
  await page.goto(`${basePath}/pt/sobre/`);
  await page.locator('[data-test="wordmark"]').click();
  await expect(page).toHaveURL(new RegExp(`${basePath}/pt/$`));
});
