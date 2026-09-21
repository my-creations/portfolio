import { describe, expect, it } from 'vitest';
const {
  siblingCandidates,
  needsModernSibling,
  extractImgSources,
  RASTER_SIBLING_THRESHOLD_BYTES,
} = require('../../scripts/check-images.js');
const { resolveTarget, extractReferences } = require('../../scripts/check-links.js');
const {
  imgTagsMissingDimensions,
  externalScriptSources,
  MAX_HTML_BYTES,
} = require('../../scripts/check-performance.js');
const { containsTracking } = require('../../scripts/check-no-tracking.js');

describe('check-images helpers', () => {
  it('proposes avif/webp siblings for a raster file', () => {
    expect(siblingCandidates('src/assets/general/profile-pic.png')).toEqual([
      'src/assets/general/profile-pic.avif',
      'src/assets/general/profile-pic.webp',
    ]);
  });

  it('requires a modern sibling only above the size threshold', () => {
    expect(needsModernSibling(RASTER_SIBLING_THRESHOLD_BYTES + 1)).toBe(true);
    expect(needsModernSibling(1024)).toBe(false);
  });

  it('extracts img sources from built html', () => {
    const html = '<img src="/portfolio/a.webp"><img src="/x.png">';
    expect(extractImgSources(html)).toEqual(['/portfolio/a.webp', '/x.png']);
  });
});

describe('check-links resolveTarget', () => {
  const context = { currentFile: '/repo/_site/index.html', siteDirectory: '/repo/_site' };

  it('skips anchors, mailto, and external origins', () => {
    expect(resolveTarget('#main', context).status).toBe('skip');
    expect(resolveTarget('mailto:a@b.c', context).status).toBe('skip');
    expect(resolveTarget('https://example.com/x', context).status).toBe('skip');
  });

  it('skips same-origin sibling deployables outside the path prefix', () => {
    expect(resolveTarget('https://my-creations.github.io/vestaboard/', context).status).toBe('skip');
  });

  it('resolves relative references against the current file', () => {
    const resolved = resolveTarget('cover.png', {
      currentFile: '/repo/_site/work/index.html',
      siteDirectory: '/repo/_site',
    });
    expect(resolved.status).toBe('check');
    expect(resolved.candidates[0]).toBe('/repo/_site/work/cover.png');
  });

  it('maps path-prefixed links into the output directory', () => {
    const resolved = resolveTarget('/portfolio/assets/x.png', context);
    expect(resolved.status).toBe('check');
    expect(resolved.candidates[0]).toBe('/repo/_site/assets/x.png');
  });

  it('maps same-origin absolute urls into the output directory', () => {
    const resolved = resolveTarget('https://my-creations.github.io/portfolio/work/', context);
    expect(resolved.status).toBe('check');
    expect(resolved.candidates).toContain('/repo/_site/work/index.html');
  });

  it('extracts a, img, script, and link references', () => {
    const html = '<a href="/portfolio/work/">w</a><img src="i.png"><script src="/j.js"></script><link href="/c.css">';
    expect(extractReferences(html)).toEqual(['/portfolio/work/', 'i.png', '/j.js', '/c.css']);
  });
});

describe('check-performance helpers', () => {
  it('flags img tags without dimensions', () => {
    expect(imgTagsMissingDimensions('<img src="a.webp" width="1" height="1">')).toEqual([]);
    expect(imgTagsMissingDimensions('<img src="a.webp">')).toHaveLength(1);
  });

  it('flags third-party scripts but allows relative ones', () => {
    expect(externalScriptSources('<script src="/js/main.js">')).toEqual([]);
    expect(externalScriptSources('<script src="https://cdn.example.com/x.js">')).toEqual([
      'https://cdn.example.com/x.js',
    ]);
  });

  it('keeps the html budget above the current largest page', () => {
    expect(MAX_HTML_BYTES).toBeGreaterThan(28 * 1024);
  });
});

describe('check-no-tracking', () => {
  it('flags tracking snippets', () => {
    expect(containsTracking('<script src="https://www.googletagmanager.com/gtag/js"></script>')).toBe(true);
    expect(containsTracking('<script>gtag("config", "G-X")</script>')).toBe(true);
    expect(containsTracking('<script src="https://plausible.io/js/script.js"></script>')).toBe(true);
  });

  it('allows prose mentions such as the privacy copy', () => {
    expect(containsTracking('There is no Google Analytics, Plausible, or similar tag.')).toBe(false);
  });
});
