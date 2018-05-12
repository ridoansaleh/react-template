const path = require('path');
const webpack = require('webpack');

module.exports = {

  entry: './app/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: './dist'
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, '/app'),
        exclude: '/node_modules',
        loader: 'babel-loader',
        query: {
          presets: ["react", "env"]
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },

  watch: true
};