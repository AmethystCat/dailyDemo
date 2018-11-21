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
    components(markdownData) {
      const { filename } = markdownData.meta;

      if (!/^components/.test(filename) || /[/\\]demo$/.test(path.dirname(filename))) return;
      return {
        meta: markdownData.meta,
      };
    },
    articles(markdownData) {
      const { filename } = markdownData.meta;

      if (!/^articles/.test(filename)) return;
      return markdownData;
    }
  },
};
