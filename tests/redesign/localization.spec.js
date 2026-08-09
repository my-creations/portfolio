import { test, expect } from '@playwright/test';

const basePath = '/portfolio';
const publicOrigin = 'https://my-creations.github.io';

const localizedRoutes = [
  ['landing page', '/', '/pt/'],
  ['Work', '/work/', '/pt/trabalho/'],
  ['Writing', '/writing/', '/pt/escrita/'],
  ['About', '/about/', '/pt/sobre/'],
  ['CUF Prepara Case Study', '/work/cuf-prepara/', '/pt/trabalho/cuf-prepara/'],
  ['Dose Segura Case Study', '/work/dose-segura/', '/pt/trabalho/dose-segura/'],
  [
    'Portfolio quality system Case Study',
    '/work/portfolio-quality-system/',
    '/pt/trabalho/sistema-qualidade-portfolio/',
  ],
];

test('locale can be changed repeatedly', async ({ page }) => {
  await page.goto(`${basePath}/`);

  for (const expectedPath of [`${basePath}/pt/`, `${basePath}/`, `${basePath}/pt/`]) {
    await page.locator('[data-test="lang-switch"]').click();
    await expect(page).toHaveURL(new RegExp(`${expectedPath}$`));
  }
});

for (const [name, englishRoute, portugueseRoute] of localizedRoutes) {
  test(`${name} exposes reciprocal locale alternates`, async ({ page }) => {
    const englishPath = `${basePath}${englishRoute}`;
    const portuguesePath = `${basePath}${portugueseRoute}`;

    await page.goto(englishPath);
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `${publicOrigin}${englishPath}`);
    await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveAttribute(
      'href',
      `${publicOrigin}${englishPath}`
    );
    await expect(page.locator('link[rel="alternate"][hreflang="pt"]')).toHaveAttribute(
      'href',
      `${publicOrigin}${portuguesePath}`
    );

    const englishSelector = page.locator('.nav--desktop .locale-switcher');
    await expect(englishSelector.locator('.locale-option')).toHaveText(['EN', 'PT']);
    await expect(englishSelector.locator('.locale-option.is-current')).toHaveText('EN');

    const portugueseSwitch = page.locator('[data-test="lang-switch"]');
    await expect(portugueseSwitch).toHaveAttribute('hreflang', 'pt');
    await expect(portugueseSwitch).toHaveAttribute('href', portuguesePath);
    await portugueseSwitch.click();

    await expect(page).toHaveURL(new RegExp(`${portuguesePath}$`));
    await expect(page.locator('html')).toHaveAttribute('lang', 'pt');
    const portugueseSelector = page.locator('.nav--desktop .locale-switcher');
    await expect(portugueseSelector.locator('.locale-option')).toHaveText(['EN', 'PT']);
    await expect(portugueseSelector.locator('.locale-option.is-current')).toHaveText('PT');

    const englishSwitch = page.locator('[data-test="lang-switch"]');
    await expect(englishSwitch).toHaveAttribute('hreflang', 'en');
    await expect(englishSwitch).toHaveAttribute('href', englishPath);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `${publicOrigin}${portuguesePath}`);
  });
}
