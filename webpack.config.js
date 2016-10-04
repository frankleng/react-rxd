const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ExternalsPlugin = require('webpack-externals-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'source-map',

  entry: {
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
    Popover: './src/Popover/index.js',
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
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions: ['', '.json', '.js']
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new ExternalsPlugin({
      type: 'commonjs',
      include: path.join(__dirname, '../node_modules/')
    }),
    new ExtractTextPlugin('rxd', '[name].css', { allChunks: true }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'url'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?module&localIdentName=[name]_[local]!sass'
        )
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000'
      }
    ]
  }
};
