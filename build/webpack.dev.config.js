const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    compress: true,
    port: 803
  }
})