const fs = require('node:fs/promises');
const path = require('node:path');

const PATH_PREFIX = '/portfolio/';
const SITE_ORIGIN = 'https://my-creations.github.io';

async function collectFiles(directory, predicate) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await collectFiles(entryPath, predicate)));
    else if (entry.isFile() && predicate(entryPath)) files.push(entryPath);
  }

  return files.sort();
}

function extractReferences(html) {
  const references = [];
  const patterns = [
    /<a\b[^>]*\bhref=["']([^"']+)["']/gi,
    /<img\b[^>]*\bsrc=["']([^"']+)["']/gi,
    /<script\b[^>]*\bsrc=["']([^"']+)["']/gi,
    /<link\b[^>]*\bhref=["']([^"']+)["']/gi,
    /<source\b[^>]*\bsrc=["']([^"']+)["']/gi,
  ];

  for (const pattern of patterns) {
    for (const [, value] of html.matchAll(pattern)) {
      references.push(value);
    }
  }

  return references;
}

/**
 * Map an HTML reference to a file on disk.
 * Returns { status: 'skip' } for external/anchor/special links,
 * otherwise { status: 'check', filePath } with the resolved absolute path.
 */
function resolveTarget(
  reference,
  { currentFile, siteDirectory, pathPrefix = PATH_PREFIX, siteOrigin = SITE_ORIGIN } = {}
) {
  if (!reference || reference.startsWith('#') || reference.startsWith('data:')) {
    return { status: 'skip' };
  }
  if (/^(mailto|tel|sms|javascript):/i.test(reference)) {
    return { status: 'skip' };
  }

  // Relative references resolve against the current file's directory.
  if (!/^[a-z][a-z0-9+.-]*:/i.test(reference) && !reference.startsWith('/')) {
    const pathname = path.posix.normalize(
      path.posix.join(path.posix.dirname(path.relative(siteDirectory, currentFile)), reference.split(/[?#]/)[0])
    );
    return {
      status: 'check',
      candidates: [pathname, `${pathname}.html`, path.posix.join(pathname, 'index.html')].map((candidate) =>
        path.join(siteDirectory, candidate)
      ),
    };
  }

  let url;
  try {
    url = new URL(reference, siteOrigin);
  } catch {
    return { status: 'skip' };
  }

  if (url.origin !== siteOrigin) {
    return { status: 'skip' };
  }

  let pathname = url.pathname;
  if (pathname.startsWith('/')) {
    if (!pathname.startsWith(pathPrefix)) {
      return { status: 'skip' };
    }
    pathname = pathname.slice(pathPrefix.length) || '/';
  }

  const candidates = [pathname, `${pathname}.html`, path.posix.join(pathname, 'index.html')];
  return { status: 'check', candidates: candidates.map((candidate) => path.join(siteDirectory, candidate)) };
}

async function targetExists(candidatePaths) {
  for (const candidate of candidatePaths) {
    try {
      const stat = await fs.stat(candidate);
      if (stat.isFile()) return candidate;
    } catch {
      continue;
    }
  }
  return null;
}

async function checkLinks(rootDirectory = process.cwd()) {
  const siteDirectory = path.join(rootDirectory, '_site');
  const htmlFiles = await collectFiles(siteDirectory, (filePath) => filePath.endsWith('.html'));
  const broken = [];
  let checked = 0;

  for (const htmlFile of htmlFiles) {
    const html = await fs.readFile(htmlFile, 'utf8');
    for (const reference of new Set(extractReferences(html))) {
      const resolved = resolveTarget(reference, { currentFile: htmlFile, siteDirectory });
      if (resolved.status === 'skip') continue;
      checked += 1;
      const found = await targetExists(resolved.candidates);
      if (!found) {
        broken.push(`${path.relative(rootDirectory, htmlFile)} -> ${reference}`);
      }
    }
  }

  // Every sitemap location must resolve to a built file.
  try {
    const sitemap = await fs.readFile(path.join(siteDirectory, 'sitemap.xml'), 'utf8');
    for (const [, location] of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
      const resolved = resolveTarget(location, { currentFile: siteDirectory, siteDirectory });
      if (resolved.status === 'skip') continue;
      checked += 1;
      const found = await targetExists(resolved.candidates);
      if (!found) {
        broken.push(`sitemap.xml -> ${location}`);
      }
    }
  } catch {
    broken.push('sitemap.xml is missing from the built site');
  }

  return { errors: broken, pages: htmlFiles.length, checked };
}

if (require.main === module) {
  checkLinks()
    .then(({ errors, pages, checked }) => {
      console.log(`Checked ${checked} internal references across ${pages} pages.`);
      if (errors.length > 0) {
        console.error(`Link check failed:\n- ${errors.join('\n- ')}`);
        process.exitCode = 1;
      } else {
        console.log('Link check passed.');
      }
    })
    .catch((error) => {
      console.error(error.message);
      process.exitCode = 1;
    });
}

module.exports = {
  PATH_PREFIX,
  SITE_ORIGIN,
  extractReferences,
  resolveTarget,
  checkLinks,
};
