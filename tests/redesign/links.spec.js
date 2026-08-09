import { test, expect } from '@playwright/test';

const basePath = '/portfolio';

test('every published page and internal link resolves', async ({ request, baseURL }) => {
  const localOrigin = new URL(baseURL).origin;
  const sitemapResponse = await request.get(`${basePath}/sitemap.xml`);
  expect(sitemapResponse.ok()).toBe(true);

  const sitemap = await sitemapResponse.text();
  const publishedPaths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
    ([, location]) => new URL(location).pathname
  );
  expect(publishedPaths.length).toBeGreaterThan(0);

  const internalPaths = new Set(publishedPaths);

  for (const pathname of publishedPaths) {
    const response = await request.get(pathname);
    expect(response.ok(), `${pathname} returned ${response.status()}`).toBe(true);

    const html = await response.text();
    for (const [, href] of html.matchAll(/<a\b[^>]*\bhref=["']([^"']+)["']/gi)) {
      const url = new URL(href, localOrigin);
      if (url.origin === localOrigin && url.pathname.startsWith(`${basePath}/`)) {
        internalPaths.add(url.pathname);
      }
    }
  }

  for (const pathname of [...internalPaths].sort()) {
    const response = await request.get(pathname);
    expect(response.ok(), `${pathname} returned ${response.status()}`).toBe(true);
  }
});
