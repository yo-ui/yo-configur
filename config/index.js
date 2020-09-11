'use strict'

const path = require('path')

module.exports = {
  dev: {
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/service': {
        target: 'http://localhost:8081',
        changeOrigin:true,
        withCredentials: true,
        pathRewrite: {
          '/service': '/'
        }
      }
    },
    host: 'localhost',
    port: 8080,
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    cacheBusting: true,
    cssSourceMap: true
  },

  test: {
    index: path.resolve(__dirname, 'E:\\web\\fe-configur\\dist\\index.html'),
    assetsRoot: path.resolve(__dirname, 'E:\\web\\fe-configur\\dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '',
    /**
     * Source Maps
     */
    productionSourceMap: process.env.NODE_ENV === 'development',
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report,

    cacheBusting: true,
    cssSourceMap: true
  },
  build: {
    index: path.resolve(__dirname, '../dist_prod/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist_prod'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '',
    /**
     * Source Maps
     */
    productionSourceMap: process.env.NODE_ENV === 'development',
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report,

    cacheBusting: true,
    cssSourceMap: true
  }
}
