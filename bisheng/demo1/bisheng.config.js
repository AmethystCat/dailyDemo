module.exports = {
  source: './posts', // required
  output: './_site',
  theme: './bisheng-theme-one/src', // required
  themeConfig: {
    home: '/',
    siteName: 'One',
    tagline: 'The one theme for bisheng',
  },
  port: 8000,
  root: '/bisheng/',
};
