
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");


module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("images/");
    eleventyConfig.addPassthroughCopy("css/");

    eleventyConfig.addFilter('parentFilter', function(collection, parent) {
      if (!parent) return collection;
        const filtered = collection.filter(item => item.data.parent == parent)
        return filtered;
    });

    


    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    eleventyConfig.addPairedShortcode("references", function(content) {
      return `<h2>References</h2>
  <section><ul>${content}
  </ul></section>`;
    });


    eleventyConfig.addPairedShortcode("reference", function(description,name,url) {
      return `<section class="reference">
  <li><a href="${url}">${name}</a>
  &nbsp; ${description}</li>
  </section>`;
    });

    eleventyConfig.addPairedShortcode("reflection", function(content) {
      return `<h2>Reflections</h2><article class="section-reflection">
  ${content}
  </article>`;
    });


    let markdownIt = require("markdown-it");
    let markdownItFootnotes = require("markdown-it-footnote");
    let options = {
      html: true
    };
    let markdownLib = markdownIt(options).use(markdownItFootnotes);
    
    eleventyConfig.setLibrary("md", markdownLib);
    
  
  
    return {
      templateFormats: [
        "md",
        "njk",
        "html",
        "liquid"
      ],
  
      // If your site lives in a different subdirectory, change this.
      // Leading or trailing slashes are all normalized away, so don’t worry about it.
      // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
      // This is only used for URLs (it does not affect your file structure)
      pathPrefix: "/",
      markdownTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
      dataTemplateEngine: "njk",
      passthroughFileCopy: true,
      dir: {
        input: ".",
        includes: "_includes",
        data: "_data",
        output: "_site"
      }
      

  };
}
