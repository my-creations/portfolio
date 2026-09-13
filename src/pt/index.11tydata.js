module.exports = {
  eleventyComputed: {
    title: (data) => data.site.title.pt,
    description: (data) => data.site.description.pt,
  },
};
