module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("files");
  eleventyConfig.addPassthroughCopy("favicon.ico");
};
