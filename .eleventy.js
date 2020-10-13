const eleventyReact = require("eleventy-plugin-react");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/**/*.jsx");

  eleventyConfig.addPlugin(eleventyReact, {
    babelConfig({ isClientBundle }) {
      return {
        presets: [
          "@babel/preset-react",
          [
            "@babel/preset-env",
            isClientBundle
              ? {
                  modules: false,
                  targets: "> 0.25%, not dead",
                }
              : {
                  modules: "commonjs",
                  targets: {
                    node: process.versions.node,
                  },
                },
          ],
        ],
      };
    },
  });

  eleventyConfig.addWatchTarget("./src/styles/layout.css");

  return {
    dir: {
      input: "src/pages",
    },
  };
};