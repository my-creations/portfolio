import { test, expect } from '@playwright/test';

const basePath = '/portfolio';

/** Intermediate breakpoints (721–959px) get explicit coverage. */
const viewports = [
  { name: 'mobile 360', width: 360, height: 800 },
  { name: 'intermediate 800', width: 800, height: 800 },
  { name: 'desktop 1280', width: 1280, height: 800 },
];

const routes = [
  ['English home', '/'],
  ['Portuguese home', '/pt/'],
  ['English work', '/work/'],
  ['Portuguese work', '/pt/trabalho/'],
  ['English privacy', '/privacy/'],
  ['Portuguese privacy', '/pt/privacidade/'],
  ['English case study', '/work/cuf-prepara/'],
];

for (const { name, width, height } of viewports) {
  test.describe(`viewport ${name}`, () => {
    test.use({ viewport: { width, height } });

    for (const [routeName, route] of routes) {
      test(`${routeName} has no horizontal overflow and keeps landmarks visible`, async ({ page }) => {
        await page.goto(`${basePath}${route}`);
        await expect(page.locator('main')).toBeVisible();
        await expect(page.locator('h1')).toBeVisible();

        const overflow = await page.evaluate(
          () => document.documentElement.scrollWidth - document.documentElement.clientWidth
        );
        expect(overflow, `${routeName} should not overflow horizontally at ${width}px`).toBeLessThanOrEqual(1);

        await expect(page.locator('[data-test="site-header"]')).toBeVisible();
        await expect(page.locator('[data-test="site-footer"]')).toBeVisible();
      });
    }
  });
}

test.describe('reduced motion', () => {
  // NOTE: reducedMotion is not a top-level use fixture in this Playwright
  // version — it must ride inside contextOptions or it is silently ignored.
  test.use({ contextOptions: { reducedMotion: 'reduce' } });

  test('media query matches and transitions are neutralized', async ({ page }) => {
    await page.goto(`${basePath}/`);
    const matches = await page.evaluate(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    expect(matches).toBe(true);

    const { scrollBehavior, transitionDuration } = await page.evaluate(() => {
      const probe = document.querySelector('main a') ?? document.body;
      const style = window.getComputedStyle(probe);
      return {
        scrollBehavior: window.getComputedStyle(document.documentElement).scrollBehavior,
        transitionDuration: style.transitionDuration,
      };
    });
    expect(scrollBehavior).toBe('auto');
    // The 0.01ms kill-switch serializes differently per engine
    // (0s, 0.01ms, 1e-05s, 0.00001s, or a comma-separated repeat).
    const toMs = (t) => (t.endsWith('ms') ? parseFloat(t) : parseFloat(t) * 1000);
    const maxMs = Math.max(...transitionDuration.split(',').map((t) => toMs(t.trim())));
    expect(maxMs).toBeLessThanOrEqual(0.011);
  });
});
