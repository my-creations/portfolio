const fs = require('node:fs/promises');
const path = require('node:path');

const RASTER_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg']);
const MODERN_EXTENSIONS = ['.avif', '.webp'];
// A raster image over this size must ship a modern-format sibling.
const RASTER_SIBLING_THRESHOLD_BYTES = 150 * 1024;

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

function siblingCandidates(filePath) {
  const directory = path.dirname(filePath);
  const base = path.basename(filePath, path.extname(filePath));
  return MODERN_EXTENSIONS.map((extension) => path.join(directory, `${base}${extension}`));
}

function needsModernSibling(sizeBytes) {
  return sizeBytes > RASTER_SIBLING_THRESHOLD_BYTES;
}

async function findModernSibling(filePath) {
  for (const candidate of siblingCandidates(filePath)) {
    try {
      await fs.access(candidate);
      return candidate;
    } catch {
      continue;
    }
  }
  return null;
}

function extractImgSources(html) {
  const sources = [];
  for (const [, src] of html.matchAll(/<img\b[^>]*\bsrc=["']([^"']+)["']/gi)) {
    sources.push(src);
  }
  return sources;
}

function toOutputRelativePath(src, pathPrefix) {
  if (!src || src.startsWith('data:')) return null;
  const withoutQuery = src.split(/[?#]/)[0];
  if (!withoutQuery) return null;
  if (withoutQuery.startsWith(pathPrefix)) return withoutQuery.slice(pathPrefix.length);
  if (withoutQuery.startsWith('/')) return withoutQuery.slice(1);
  return withoutQuery;
}

async function checkSourceAssets(assetsDirectory = path.join(process.cwd(), 'src', 'assets')) {
  const errors = [];
  const rows = [];
  let files = [];
  try {
    files = await collectFiles(assetsDirectory, (filePath) =>
      RASTER_EXTENSIONS.has(path.extname(filePath).toLowerCase())
    );
  } catch {
    return { errors: [`Assets directory not found: ${assetsDirectory}`], rows };
  }

  for (const filePath of files) {
    const { size } = await fs.stat(filePath);
    const sibling = needsModernSibling(size) ? await findModernSibling(filePath) : true;
    const relative = path.relative(process.cwd(), filePath);
    rows.push({ file: relative, kb: Math.round(size / 1024), sibling: sibling === true ? 'n/a' : sibling });
    if (needsModernSibling(size) && !sibling) {
      errors.push(
        `${relative} is ${Math.round(size / 1024)}KB with no .avif/.webp sibling — add a modern format or compress below ${RASTER_SIBLING_THRESHOLD_BYTES / 1024}KB`
      );
    }
  }

  return { errors, rows };
}

async function checkBuiltOutput(siteDirectory = path.join(process.cwd(), '_site'), pathPrefix = '/portfolio/') {
  const errors = [];
  const htmlFiles = await collectFiles(siteDirectory, (filePath) => filePath.endsWith('.html'));

  for (const htmlFile of htmlFiles) {
    const html = await fs.readFile(htmlFile, 'utf8');
    for (const src of extractImgSources(html)) {
      const relative = toOutputRelativePath(src, pathPrefix);
      if (!relative) continue;
      const extension = path.extname(relative).toLowerCase();
      if (!RASTER_EXTENSIONS.has(extension)) continue;
      const sibling = await findModernSibling(path.join(siteDirectory, relative));
      if (sibling) {
        errors.push(
          `${path.relative(process.cwd(), htmlFile)} references ${src} but a modern sibling exists — use the .avif/.webp instead`
        );
      }
    }
  }

  return { errors, pages: htmlFiles.length };
}

async function checkImages(rootDirectory = process.cwd()) {
  const source = await checkSourceAssets(path.join(rootDirectory, 'src', 'assets'));
  const built = await checkBuiltOutput(path.join(rootDirectory, '_site'));
  return { errors: [...source.errors, ...built.errors], source, built };
}

if (require.main === module) {
  checkImages()
    .then(({ errors, source, built }) => {
      for (const row of source.rows) {
        console.log(`${String(row.kb).padStart(5)}KB  ${row.file}`);
      }
      console.log(`Checked ${source.rows.length} source rasters and ${built.pages} built pages.`);
      if (errors.length > 0) {
        console.error(`Image check failed:\n- ${errors.join('\n- ')}`);
        process.exitCode = 1;
      } else {
        console.log('Image check passed.');
      }
    })
    .catch((error) => {
      console.error(error.message);
      process.exitCode = 1;
    });
}

module.exports = {
  RASTER_SIBLING_THRESHOLD_BYTES,
  siblingCandidates,
  needsModernSibling,
  extractImgSources,
  toOutputRelativePath,
  checkSourceAssets,
  checkBuiltOutput,
  checkImages,
};
