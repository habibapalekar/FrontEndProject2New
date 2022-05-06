// These are the Eleventy settings
// You shouldn't need to change anything

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/css");

    // Watch the `css` directory for changes
    eleventyConfig.addWatchTarget("src/assets/css");
    eleventyConfig.addPassthroughCopy("src/assets/images");
    eleventyConfig.addPassthroughCopy("src/assets/js");
    return {
        dir: {
            input: "src",
            includes: "_includes",
            // put the layouts in their own folder
            //layouts: "layouts",
            //change where the website it output
            output: "final-website",
        }
    };
};
