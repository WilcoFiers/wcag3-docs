module.exports = function(eleventyConfig) {
  eleventyConfig.ignores.add('readme.md');
  eleventyConfig.ignores.add('build/**');

  // Copy `assets/` to `_site/assets`
  eleventyConfig.addPassthroughCopy("assets");
};
