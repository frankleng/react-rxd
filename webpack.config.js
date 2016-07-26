const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const browsers = [
  'Android >= 4',
  'Chrome >= 20',
  'Firefox >= 24',
  'Explorer >= 9',
  'Edge >= 1',
  'iOS >= 6',
  'Opera >= 12',
  'Safari >= 6'
];

module.exports = {
  devtool: 'source-map',

  entry: path.join(__dirname, 'src/index.js'),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/'
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
    new ExtractTextPlugin('rxd.css'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ],

  sassLoader: {
    precision: 8
  },
  postcss: () => [
    autoprefixer({
      browsers: ['last 3 versions']
    })
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
          'css?modules!postcss!sass'
        )
      }
    ]
  }
};