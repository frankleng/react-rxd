const webpack = require('webpack');
const isCI = !!process.env.CONTINUOUS_INTEGRATION;
const outputDir = process.env.REPORT_OUPUT_DIR;
const webpackConfig = require('./webpack.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (config) => {
  config.set({

    browsers: ['PhantomJS'],

    singleRun: isCI,

    frameworks: ['mocha'],

    files: [
      './tests.webpack.js'
    ],

    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },

    reporters: isCI ? ['junit', 'mocha'] : ['mocha'],

    junitReporter: {
      outputDir: `${outputDir}/karma`,
      useBrowserName: true // add browser name to report and classes names
    },

    plugins: [
      require('karma-webpack'),
      require('karma-mocha'),
      require('karma-mocha-reporter'),
      require('karma-junit-reporter'),
      require('karma-phantomjs-launcher'),
      require('karma-sourcemap-loader')
    ],

    webpack: {
      devtool: 'inline-source-map',
      module: {
        noParse: [
          /node_modules\/sinon\//
        ],
        loaders: webpackConfig.module.loaders
      },
      resolve: Object.assign({}, webpackConfig.resolve, {
        alias: {
          sinon: 'sinon/pkg/sinon'
        }
      }),
      plugins: [
        new ExtractTextPlugin('rxd.css')
      ],
      externals: {
        jsdom: 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window',
        'text-encoding': 'window',
        'react/addons': true
      }
    },

    webpackServer: {
      noInfo: true
    }

  });
};
