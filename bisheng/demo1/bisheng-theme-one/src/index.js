const path = require('path');
console.log(123);
module.exports = {
  lazyLoad: true,
  pick: {
    posts(markdownData) {
      console.log('bisheng-theme-one/src/index', markdownData);
      return {
        meta: markdownData.meta,
        description: markdownData.description,
      };
    },
  },
  plugins: [
    path.join(__dirname, '../..', 'node_modules', 'bisheng-plugin-description'),
    path.join(__dirname, '../..', 'node_modules', 'bisheng-plugin-react?lang=jsx'),
  ],
  routes: [{
    path: '/',
    component: './template/Archive',
  }, {
    path: '/posts/:post',
    dataPath: '/:post',
    component: './template/Post',
  },{
    path: '/posts/:post/:sub',
    dataPath: '/:post/:sub',
    component: './template/Post',
  },{
    path: '/tags',
    component: './template/TagCloud',
  }],
};
