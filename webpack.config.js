var webpack = require('webpack')
var path = require('path')

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  module: {
    loaders: [
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties',
            'transform-decorators-legacy']
        }
      },
      {
        test: /\.scss$/,
        loaders: [ 'style', 'css', 'sass' ]
      }
    ]
  },
  output: {
    filename: './dist/bundle.js'
  }
}
