const path = require('path');
module.exports = {
  lazyLoad(nodePath, nodeValue) {
    if (typeof nodeValue === 'string') {
      return true;
    }
    return nodePath.endsWith('/demo');
  },
  plugins: [
    path.join(__dirname, '../', 'node_modules', 'bisheng-plugin-react?lang=jsx'),
    path.join(__dirname, '../', 'node_modules', 'bisheng-plugin-description'),
  ],
  routes: [
    {
      path: '/',
      component: './template/home',
    },
    {
      path: '/articles/:name',
      dataPath: '/:name',
      component: './template/panel'
    },
    {
      path: '/components/:name',
      dataPath: '/:name/demo',
      component: './template/panel'
    },
  ],
  pick: {
    posts(markdownData) {
      console.log(111111, markdownData);
      return {
        meta: markdownData.meta,
        description: markdownData.description,
      };
    },
  },
};
