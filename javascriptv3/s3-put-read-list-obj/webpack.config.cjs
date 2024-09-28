// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
//const config = {
//  mode: "production",
//};

const path = require('path')
const webpack = require('webpack')

module.exports = { 
  test: /\.js$/,
  exclude: /node_modules\/(?!(aws-sdk|@aws-sdk)\/).*/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env']
    }
  }
};

//module.exports = {
//  main.js,
//  bail: true,
//};

//export default config;

/**
 * @type webpack.Configuration
 */
const config = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    main: ['@babel/polyfill', './app/main.js']
  },
  mode: 'development',
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.node$/,
        use: 'node-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_compontents)/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(js)$/,
        include: /node_modules/
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],

  
  target: 'browser',

  watchOptions: {
    poll: 1000,
    ignored: ['node_modules/**'],
    aggregateTimeout: 600
  }
}

module.exports = config

//export default config;