'use strict'
//  ECMAScript 5 引入严格模式('strict mode')概念。通过严格模式，在函数内部选择进行较为严格的全局或局部的错误条件检测，使用严格模式的好处是可以提早知道代码中的存在的错误，
// 及时捕获一些可能导致编程错误的ECMAScript行为。在开发中使用严格模式能帮助我们早发现错误。
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,  // 调试方式

  // these devServer options should be customized in /config/index.js
  // 开发选项
  devServer: {
    clientLogLevel: 'warning',
    // 当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html。
    historyApiFallback: {
      // 通过传入一个对象，比如使用 rewrites 这个选项，此行为可进一步地控制
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin. 告诉服务器从哪个目录中提供内容。只有在你想要提供静态文件时才需要 。devServer.publicPath 将用于确定应该从哪里提供 bundle，并且此选项优先。
    compress: true,  // 一切服务都启用gzip压缩
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser, // 告诉dev-server在server启动后打开浏览器，默认禁用
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,   // 编译器报错的时候，是否在浏览器显示全屏幕覆盖层
    publicPath: config.dev.assetsPublicPath, // 此路径下的打包文件可在浏览器中访问  注意 确保 devServer.publicPath 总是以斜杠(/)开头和结尾。
    proxy: config.dev.proxyTable,  // 如果你有单独的后端开发服务器 API，并且希望在同域名下发送 API 请求 ，那么代理某些 URL 会很有用。 这个我不懂
    quiet: true, // necessary for FriendlyErrorsPlugin 启用后，除了初始启动信息之外的任何内容都不会被打印到控制台。这也意味着来自 webpack 的错误或警告在控制台不可见。
    watchOptions: { // 与监视文件相关的控制选项
      poll: config.dev.poll,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    // 把已存在的单个文件或者是整个目录复制到构建目录
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']  // 忽略以.*结尾的目录或者文件
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  // portfinder是一个在当前机器上查找开放端口的简单工具
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
