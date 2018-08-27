const path = require('path');
const webpackConfig = {
  entry: './components/',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: process.env.NODE_ENV === 'production' ? 'gatewayfe-lib.min.js' : 'gatewayfe-lib.js',
    library: 'gatewayfe-lib',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'components'),
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'eslint-loader'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'components'),
        exclude: path.resolve(__dirname, 'node_modules')
      }
    ]
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    }
  }
};

module.exports = webpackConfig;

