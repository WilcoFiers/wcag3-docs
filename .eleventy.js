const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const listOutcomes = require('./build/list-outcomes');

module.exports = function(eleventyConfig) {
  // Ignore a couple things
  eleventyConfig.ignores.add('readme.md');
  eleventyConfig.ignores.add('build/**');

  // Global data
  eleventyConfig.addGlobalData("layout", "layout.html");
  eleventyConfig.addGlobalData("outcomes", listOutcomes().outcomes);

  // Make it easy to deploy to gh-pages
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // Copy `assets/` to `_site/assets`
  eleventyConfig.addPassthroughCopy("assets");
};
