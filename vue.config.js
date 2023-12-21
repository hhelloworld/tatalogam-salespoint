const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
      // Vuetify plugin options, if any
    }
  },

  configureWebpack: {
    resolve: {
      alias: {
        // Add any necessary aliases here
      }
    }
  }
});
