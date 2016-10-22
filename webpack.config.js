/* eslint-disable */
var wepack = require('webpack');
var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/index.jsx',

  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: APP_DIR,
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test:  /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test:  /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=public/fonts/[name].[ext]'
      }
    ]
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: APP_DIR + '/index.html'
    })
  ],

 devServer: {
    historyApiFallback: true,
    contentBase: './src'
  },

  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: 'bundle.[hash].js'
  }
};

module.exports = config;
