const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

// Photos live in src/images. Until a photo has been copied in, the site
// shows it from where it lives on the old site, so nothing goes blank.
const sources = JSON.parse(fs.readFileSync(path.join(__dirname, "image-sources.json"), "utf8"));

module.exports = function (eleventyConfig) {
  eleventyConfig.addDataExtension("yml,yaml", (contents) => yaml.load(contents));
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });
  eleventyConfig.addPassthroughCopy({ "src/_redirects": "_redirects" });

  eleventyConfig.addFilter("img", (p) => {
    if (!p) return "";
    if (/^https?:/.test(p)) return p;
    if (fs.existsSync(path.join(__dirname, "src", p))) return p;
    return sources[p] || p;
  });
  eleventyConfig.addFilter("year", () => new Date().getFullYear());

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
