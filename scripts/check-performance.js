const fs = require('node:fs/promises');
const path = require('node:path');

const MAX_HTML_BYTES = 80 * 1024;
const MAX_CSS_TOTAL_BYTES = 60 * 1024;
const MAX_JS_TOTAL_BYTES = 20 * 1024;

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

function totalBytes(files) {
  return files.reduce((sum, file) => sum + file.size, 0);
}

function imgTagsMissingDimensions(html) {
  const offenders = [];
  for (const [tag] of html.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\bwidth\s*=/i.test(tag) || !/\bheight\s*=/i.test(tag)) {
      offenders.push(tag.slice(0, 120));
    }
  }
  return offenders;
}

function externalScriptSources(html) {
  const sources = [];
  for (const [, src] of html.matchAll(/<script\b[^>]*\bsrc=["']([^"']+)["']/gi)) {
    if (/^https?:\/\//i.test(src)) sources.push(src);
  }
  return sources;
}

async function checkPerformance(rootDirectory = process.cwd()) {
  const siteDirectory = path.join(rootDirectory, '_site');
  const errors = [];
  const summary = {};

  const htmlFiles = await collectFiles(siteDirectory, (filePath) => filePath.endsWith('.html'));
  let largestHtml = { file: null, size: 0 };
  for (const file of htmlFiles) {
    const { size } = await fs.stat(file);
    if (size > largestHtml.size) largestHtml = { file: path.relative(rootDirectory, file), size };
    if (size > MAX_HTML_BYTES) {
      errors.push(
        `${path.relative(rootDirectory, file)} is ${Math.round(size / 1024)}KB (budget ${MAX_HTML_BYTES / 1024}KB)`
      );
    }
    const html = await fs.readFile(file, 'utf8');
    for (const offender of imgTagsMissingDimensions(html)) {
      errors.push(`${path.relative(rootDirectory, file)} has an <img> without width/height (CLS risk): ${offender}`);
    }
    for (const src of externalScriptSources(html)) {
      errors.push(`${path.relative(rootDirectory, file)} loads third-party script ${src} (render-blocking risk)`);
    }
  }
  summary.htmlPages = htmlFiles.length;
  summary.largestHtmlKb = Math.round(largestHtml.size / 1024);

  const cssFiles = await collectFiles(siteDirectory, (filePath) => filePath.endsWith('.css'));
  const cssSizes = await Promise.all(cssFiles.map(async (file) => ({ file, size: (await fs.stat(file)).size })));
  summary.cssKb = Math.round(totalBytes(cssSizes) / 1024);
  if (totalBytes(cssSizes) > MAX_CSS_TOTAL_BYTES) {
    errors.push(`Total CSS is ${summary.cssKb}KB (budget ${MAX_CSS_TOTAL_BYTES / 1024}KB)`);
  }

  const jsFiles = await collectFiles(siteDirectory, (filePath) => filePath.endsWith('.js'));
  const jsSizes = await Promise.all(jsFiles.map(async (file) => ({ file, size: (await fs.stat(file)).size })));
  summary.jsKb = Math.round(totalBytes(jsSizes) / 1024);
  if (totalBytes(jsSizes) > MAX_JS_TOTAL_BYTES) {
    errors.push(`Total JS is ${summary.jsKb}KB (budget ${MAX_JS_TOTAL_BYTES / 1024}KB)`);
  }

  return { errors, summary };
}

if (require.main === module) {
  checkPerformance()
    .then(({ errors, summary }) => {
      console.log(
        `Pages: ${summary.htmlPages} (largest HTML ${summary.largestHtmlKb}KB), CSS ${summary.cssKb}KB, JS ${summary.jsKb}KB.`
      );
      if (errors.length > 0) {
        console.error(`Performance check failed:\n- ${errors.join('\n- ')}`);
        process.exitCode = 1;
      } else {
        console.log('Performance check passed.');
      }
    })
    .catch((error) => {
      console.error(error.message);
      process.exitCode = 1;
    });
}

module.exports = {
  MAX_HTML_BYTES,
  MAX_CSS_TOTAL_BYTES,
  MAX_JS_TOTAL_BYTES,
  imgTagsMissingDimensions,
  externalScriptSources,
  checkPerformance,
};
