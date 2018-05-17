/**
 * Created by Bin on 2018/3/9.
 */

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtratTextPlugin = require('extrat-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['ts', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtratTextPlugin.extract('style', 'css?sourceMap')
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw'
      }

    ],

    plugins: [

      new webpack.optimize.CommonsChunkPlugin({
        name: ['app', 'vendor', 'ployfills']
      }),

      new HtmlWebpackPlugin({
        template: 'src/index.html'
      })
    ]

  }

}
