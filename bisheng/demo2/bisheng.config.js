var path = require('path');

module.exports = {
  source: {
    articles: './articles',
    components: './components'
  },
  output: './_site',
  theme: './_theme',
  htmlTemplate: './_theme/static/template.html',
  port: 9000,
  webpackConfig(config) {
    // important
    config.devtool = 'eval';
    config.resolve.alias = {
      'gateway-lib': path.join(process.cwd(), 'lib'),
    };
    return config;
  }
};
