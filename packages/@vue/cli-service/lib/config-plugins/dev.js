const webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

module.exports = api => {
  api.chainWebpack(webpackConfig => {
    if (process.env.NODE_ENV !== 'production') {
      webpackConfig
        .devtool('cheap-module-source-map')

      webpackConfig
        .plugin('hmr')
          .use(webpack.HotModuleReplacementPlugin)

      webpackConfig
        .plugin('named-modules')
          .use(webpack.NamedModulesPlugin)

      webpackConfig
        .plugin('no-emit-on-errors')
          .use(webpack.NoEmitOnErrorsPlugin)

      // TODO WatchMissingNodeModulesPlugin

      // TODO InterpolateHtmlPlugin

      webpackConfig
        .plugin('firendly-errors')
          .use(FriendlyErrorsPlugin)

      webpackConfig
        .plugin('html')
          .use(HTMLPlugin, [{
            template: api.resolve('public/index.html')
          }])
    }
  })
}