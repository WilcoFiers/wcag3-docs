const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  eleventyConfig.ignores.add('readme.md');
  eleventyConfig.ignores.add('build/**');

  // Make it easy to deploy to gh-pages
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // Copy `assets/` to `_site/assets`
  eleventyConfig.addPassthroughCopy("assets");
};
