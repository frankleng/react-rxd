const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'source-map',

  externals : {
    react: 'react',
    lodash: 'lodash'
  },

  entry: {
    'postcss.config': './postcss.config.js',
    AjaxLoader: './src/AjaxLoader/index.js',
    Animatable: './src/Animatable/index.js',
    Avatar: './src/Avatar/index.js',
    Background: './src/Background/index.js',
    Badge: './src/Badge/index.js',
    Button: './src/Button/index.js',
    Card: './src/Card/index.js',
    Checkbox: './src/Checkbox/index.js',
    Grid: './src/Grid/index.js',
    Input: './src/Input/index.js',
    MediaObject: './src/MediaObject/index.js',
    Modal: './src/Modal/index.js',
    Panel: './src/Panel/index.js',
    Popover: './src/Popover/index.js',
    Status: './src/Status/index.js',
    Switch: './src/Switch/index.js',
    Table: './src/Table/index.js',
    TextAlignment: './src/TextAlignment/index.js',
    Typography: './src/Typography/index.js',
    Visibility: './src/Visibility/index.js'
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
    libraryTarget: 'commonjs2'
  },

  resolve: {
    modules: [
      'src',
      'node_modules'
    ],
    alias: { 'react/lib/ReactUpdates': 'react-dom/lib/ReactUpdates' },
    extensions: ['.json', '.js']
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new ExtractTextPlugin({ filename: '[name].css', allChunks: true })
  ],

  module: {
    loaders: [
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'url-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?minimize&-zindex&module&localIdentName=[name]_[local]!sass-loader'
        })
      }
    ]
  }
};