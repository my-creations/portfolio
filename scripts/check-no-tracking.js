const fs = require('node:fs/promises');
const path = require('node:path');

// Tag/snippet indicators only — bare prose mentions (e.g. "Plausible" in the
// privacy copy) must not match. See docs/analytics.md for the policy.
const TRACKING_PATTERNS = [
  /googletagmanager\.com/i,
  /google-analytics\.com/i,
  /\bgtag\s*\(/i,
  /plausible\.io\/js/i,
  /\bdata-domain\s*=/i,
  /script\.umami\.is|umami\.is\/script/i,
  /matomo\.(js|php)/i,
  /hotjar\.com/i,
  /fullstory\.com/i,
  /cdn\.mxpnl\.com|mixpanel/i,
  /connect\.facebook\.net/i,
  /fbevents\.js/i,
  /doubleclick\.net/i,
];

const SOURCE_SCAN_EXTENSIONS = new Set(['.njk', '.js', '.html']);

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

function containsTracking(content) {
  return TRACKING_PATTERNS.some((pattern) => pattern.test(content));
}

function matchedPatterns(content) {
  return TRACKING_PATTERNS.filter((pattern) => pattern.test(content)).map(String);
}

async function checkNoTracking(rootDirectory = process.cwd()) {
  const errors = [];

  const site = require(path.join(rootDirectory, 'src', '_data', 'site.js'));
  if (site.analytics !== false) {
    errors.push(
      'src/_data/site.js analytics flag is not false — flipping it on requires the Plausible PR described in docs/analytics.md'
    );
  }

  const sourceFiles = await collectFiles(path.join(rootDirectory, 'src'), (filePath) =>
    SOURCE_SCAN_EXTENSIONS.has(path.extname(filePath))
  );
  const builtFiles = await collectFiles(path.join(rootDirectory, '_site'), (filePath) => filePath.endsWith('.html'));

  for (const file of [...sourceFiles, ...builtFiles]) {
    const content = await fs.readFile(file, 'utf8');
    if (containsTracking(content)) {
      errors.push(
        `${path.relative(rootDirectory, file)} matches tracking snippet(s): ${matchedPatterns(content).join(', ')}`
      );
    }
  }

  return { errors, scanned: sourceFiles.length + builtFiles.length };
}

if (require.main === module) {
  checkNoTracking()
    .then(({ errors, scanned }) => {
      console.log(`Scanned ${scanned} source and built files for tracking snippets.`);
      if (errors.length > 0) {
        console.error(`No-tracking check failed:\n- ${errors.join('\n- ')}`);
        process.exitCode = 1;
      } else {
        console.log('No-tracking check passed (analytics remain off per docs/analytics.md).');
      }
    })
    .catch((error) => {
      console.error(error.message);
      process.exitCode = 1;
    });
}

module.exports = {
  TRACKING_PATTERNS,
  containsTracking,
  checkNoTracking,
};
