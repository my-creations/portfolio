import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const basePath = '/portfolio';
const representativeRoutes = [
  ['English Landing Page', '/'],
  ['Portuguese Landing Page', '/pt/'],
  ['English Work', '/work/'],
  ['Portuguese Work', '/pt/trabalho/'],
  ['English Case Study', '/work/cuf-prepara/'],
  ['Portuguese Case Study', '/pt/trabalho/cuf-prepara/'],
  ['English Writing', '/writing/'],
  ['Portuguese Writing', '/pt/escrita/'],
  ['English About', '/about/'],
  ['Portuguese About', '/pt/sobre/'],
];

for (const [name, route] of representativeRoutes) {
  test(`${name} has accessible structure and no detectable WCAG A/AA violations`, async ({ page }) => {
    await page.goto(`${basePath}${route}`);

    await expect(page.locator('main')).toHaveCount(1);
    await expect(page.locator('h1')).toHaveCount(1);

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();

    const violations = results.violations.map(({ id, impact, nodes }) => ({
      id,
      impact,
      nodes: nodes.map(({ target, failureSummary }) => ({ target, failureSummary })),
    }));

    expect(violations).toEqual([]);
  });
}
