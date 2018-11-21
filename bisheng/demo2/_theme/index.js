const path = require('path');
module.exports = {
  lazyLoad(nodePath, nodeValue) {
    if (typeof nodeValue === 'string') {
      return true;
    }
    return nodePath.endsWith('/demo');
  },
  plugins: [
    'bisheng-plugin-react?lang=__react',
    'bisheng-plugin-description',
    'bisheng-plugin-antd',
  ],
  routes: [
    {
      path: '/',
      component: './template/home',
    },
    {
      path: '/articles/:name',
      component: './template/panel'
    },
    {
      path: '/components/:name',
      component: './template/panel'
    },
  ],
  pick: {
    posts(markdownData) {
      console.log(111111, markdownData);
      return {
        meta: markdownData.meta,
        description: markdownData.description,
        markdownData,
      };
    },
  },
};
