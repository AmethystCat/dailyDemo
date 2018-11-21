import React from 'react';
import { Layout } from 'antd';
import collect from 'bisheng/collect';
import Menu from './menu';
import DemoContent from './content';
import 'antd/dist/antd.css';
import '../assets/index.less';

const { Content, Sider } = Layout;

class DocPanel extends React.PureComponent {
  render() {
    console.log('render this.props------', this.props);
    const { pageData, utils, data, params, picked, demos } = this.props;
    console.log('render pageData------', pageData);
    console.log('render demos------', demos);

    return (
      <section className="doc-main">
        <Layout>
          <Sider theme="light" width="300">
            <Menu data={data} md={picked} currentRoute={params.name} />
          </Sider>
          <Content>
            <section className="doc-content">
              {/* <h3>{pageData.meta.title}</h3>
              {utils.toReactComponent(pageData.content)}
              {utils.toReactComponent(pageData.description)} */}
              <DemoContent {...{ pageData, demos, utils }} />
            </section>
          </Content>
        </Layout>
      </section>
    );
  }
}

// export default DocPanel;

export default collect(async nextProps => {
  console.log('collect argument-------', nextProps);
  const { pathname } = nextProps.location;
  const pageDataPath = pathname.split('/');
  const pageData = nextProps.utils.get(nextProps.data, pageDataPath);
  // 必须是...pageDataPath， 否则demosFetcher为undefine，不知道为何，以后再研究
  const demosFetcher = nextProps.utils.get(nextProps.data, [...pageDataPath, 'demo']);
  const pageDataPromise = typeof pageData === 'function'
    ? pageData()
    : pageData.index();
  
  if (!nextProps.pageData) {
    throw 404; // 将会重定向NotFound路由
  }
  if (demosFetcher) {
    const [pageIndexData, demos] = await Promise.all([pageDataPromise, demosFetcher()]);
    return { pageData: pageIndexData, demos };
  }
  
  return { pageData: await pageDataPromise };
})(DocPanel);
