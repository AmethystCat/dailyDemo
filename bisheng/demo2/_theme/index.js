const path = require('path');

module.exports = {
  lazyLoad: true,
  pick: {
    posts(markdownData) {
      console.log(markdownData);
      const { meta, description } = markdownData;
      return { meta, description };
    }
  },
  plugins: [],
  routes: [
    {
      path: '/',
      component: './template/home',
    },
  ]
};