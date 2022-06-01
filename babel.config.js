module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "@babel/transform-runtime",
      {
        corejs: 3,
      },
    ],
  ],
};
