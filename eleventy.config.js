const pluginRss = require('@11ty/eleventy-plugin-rss').default || require('@11ty/eleventy-plugin-rss');

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addPassthroughCopy({
    'src/assets': 'assets',
    'src/css': 'css',
    'src/js': 'js',
    'src/site.webmanifest': 'site.webmanifest',
  });

  eleventyConfig.addWatchTarget('src/css/');
  eleventyConfig.addWatchTarget('src/js/');

  eleventyConfig.addFilter('isoDate', (value) => {
    if (!value) return '';
    const date = value instanceof Date ? value : new Date(value);
    return date.toISOString().slice(0, 10);
  });

  eleventyConfig.addFilter('displayDate', (value, locale = 'en') => {
    if (!value) return '';
    const date = value instanceof Date ? value : new Date(value);
    return new Intl.DateTimeFormat(locale === 'pt' ? 'pt-PT' : 'en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  });

  eleventyConfig.addFilter('readingTime', (content = '') => {
    const words = String(content)
      .replace(/<[^>]*>/g, ' ')
      .trim()
      .split(/\s+/)
      .filter(Boolean).length;
    return Math.max(1, Math.round(words / 200));
  });

  eleventyConfig.addFilter('whereLocale', (collection = [], locale = 'en') =>
    collection.filter((item) => item.data.locale === locale && item.data.draft !== true)
  );

  eleventyConfig.addFilter('whereFeatured', (collection = []) =>
    collection.filter((item) => item.data.featured === true && item.data.draft !== true)
  );

  eleventyConfig.addFilter('findByTranslationKey', (collection = [], key, locale) =>
    collection.find(
      (item) => item.data.translationKey === key && item.data.locale === locale && item.data.draft !== true
    )
  );

  eleventyConfig.addFilter('caseStudyUrl', (collection = [], projectKey, locale) => {
    const match = collection.find(
      (item) => item.data.projectKey === projectKey && item.data.locale === locale && item.data.draft !== true
    );
    return match ? match.url : null;
  });

  eleventyConfig.addFilter(
    'languageHref',
    (collection = [], translationKey, otherLocale, fallbackHref, writingIndexHref, pageType) => {
      if (translationKey) {
        const match = collection.find(
          (item) =>
            item.data.translationKey === translationKey && item.data.locale === otherLocale && item.data.draft !== true
        );
        if (match?.url) return match.url;
        if (pageType === 'writing-detail') return writingIndexHref;
      } else if (pageType === 'writing-detail') {
        return writingIndexHref;
      }
      return fallbackHref;
    }
  );

  eleventyConfig.addCollection('caseStudies', (collectionApi) =>
    collectionApi
      .getFilteredByTag('case-study')
      .filter((item) => item.data.draft !== true)
      .sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99))
  );

  eleventyConfig.addCollection('writing', (collectionApi) =>
    collectionApi
      .getFilteredByTag('writing')
      .filter((item) => item.data.draft !== true)
      .sort((a, b) => b.date - a.date)
  );

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: '_site',
    },
    pathPrefix: process.env.ELEVENTY_PATH_PREFIX || '/portfolio/',
    templateFormats: ['njk', 'md', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  };
};
