module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('_src/uswds-2.10.1')
    eleventyConfig.addPassthroughCopy('_src/css')
    eleventyConfig.addLinter("inclusive-language", function(content, inputPath, outputPath) {
        let words = "simply,obviously,basically,of course,clearly,just,everyone knows,however,easy".split(",");
        // Eleventy 1.0+: use this.inputPath and this.outputPath instead
        if( inputPath.endsWith(".md") ) {
          for( let word of words) {
            let regexp = new RegExp("\\b(" + word + ")\\b", "gi");
            if(content.match(regexp)) {
              console.warn(`Inclusive Language Linter (${inputPath}) Found: ${word}`);
            }
          }
        }
    });
    return {
        passthroughFileCopy: true,
        dir: {
          // ⚠️ These values are both relative to your input directory.
          input: "_src",
          includes: "_includes",
          layouts: "_layouts"
        }
      };
};