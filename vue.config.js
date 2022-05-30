module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    },
    apollo: {
      lintGQL: true
    }
  },
  configureWebpack: {
    devServer: {
      proxy: process.env.VUE_APP_SERVER
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.use('vue-svg-loader').loader('vue-svg-loader')

    config.plugin('html').tap(args => {
      args[0].title = 'Front Startup'
      return args
    })
  }
}
