var path = require('path');

module.exports = {
  source: ['./components', './articles'],
  output: './_site',
  theme: './_theme',
  htmlTemplate: './_theme/static/template.html',
  port: 9000,
  // webpackConfig(config) {
  //   config.resolve.alias = {
  //     'demo2': path.join(process.cwd(), 'lib'),
  //     'react-router': 'react-router/umd/ReactRouter'
  //   };
  //   return config;
  // },
  root: '/'
};
