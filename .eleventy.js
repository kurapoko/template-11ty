module.exports = function(eleventyConfig) {
  // Return your Object options:
  return {
    dir: {
      input: "src/html",
      includes: "_includes",
      templateFormats: "ejs",
      output: "dist",
      data: "_data"
    },
  }
};
