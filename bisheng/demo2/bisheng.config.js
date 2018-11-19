var path = require('path');

module.exports = {
  source: ['./articles', './components'],
  output: './_site',
  theme: './_theme',
  htmlTemplate: './_theme/static/template.html',
  port: 9000,
  webpackConfig(config) {
    // important
    config.resolve.alias = {
      'gateway-lib': path.join(process.cwd(), 'lib'),
    };
    return config;
  }
};
