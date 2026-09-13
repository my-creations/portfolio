module.exports = {
  eleventyComputed: {
    title: (data) => data.site.title.en,
    description: (data) => data.site.description.en,
  },
};
