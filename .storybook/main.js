module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async function enableCssModules (config) {
    // Make whatever fine-grained changes you need

    // Rule 8 (seventh index) has a CSS loader.
    // Exclude .modeul.css files to prevent clashing with it (id doesn't work) 
    config.module.rules[7].exclude = /\.module.css$/

    // Add CSS Modules loader
    config.module.rules.push({
      test: /\.module.css$/,
      use: ['style-loader', 'css-loader']
    })

    return config
  }
}
