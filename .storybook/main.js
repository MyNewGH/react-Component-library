module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
    // {
    //   name: '@storybook/preset-create-react-app',
    //   options: {
    //     craOverrides: {
    //       fileLoaderExcludes: ['scss'],
    //     },
    //   },
    // },
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       prependData: `@import "src/components/Button/_styles.scss";`
  //     }
  //   }
  // }
}
