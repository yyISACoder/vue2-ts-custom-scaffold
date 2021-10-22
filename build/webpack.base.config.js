const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV

module.exports = {
  entry: path.join(__dirname,'..','src','index.ts'),
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        exclude: /node_modules/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10240
          }
        }]
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'cache-loader',
          //'thread-loader',
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              appendTsxSuffixTo: [/\.vue$/]
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [
          'vue-loader'
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          //'thread-loader',
          NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('dart-sass')
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new ESLintPlugin({
      extensions: ['ts','vue']
    }),
    new webpack.ProgressPlugin(),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: NODE_ENV === 'development' ? 'Carl的Vue2脚手架-开发模式' : 'Carl的Vue2脚手架-生产模式',
      template: path.join(__dirname,'..','public','index.html')
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        extensions: {
          vue: true
        }
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.join(__dirname,'..','src')
    },
    extensions: ['.vue','.ts','.js','.json']
  },
  optimization: {
    runtimeChunk: 'single'
  },
  output: {
    path: path.join(__dirname,'..','dist'),
    filename: NODE_ENV === 'development' ? '[name].[hash].js' : '[name].[chunkhash].js'
  }
}