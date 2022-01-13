module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              ie: '11',
            },
          }], 
          '@babel/preset-react',
          '@babel/preset-typescript'
        ],
        plugins: [
          "@babel/plugin-proposal-nullish-coalescing-operator",
          'react-require'
        ],
      },
      exclude: /node_modules\/(?!(@cig-platform)\/)/i,
    });

    return config;
  },
}
