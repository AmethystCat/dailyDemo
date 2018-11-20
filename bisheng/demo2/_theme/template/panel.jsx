import React from 'react';
import { Layout } from 'antd';
import collect from 'bisheng/collect';
import Menu from './menu';
import DemoDoc from './content/demoDoc';
import 'antd/dist/antd.css';
import '../assets/index.less';

const { Content, Sider } = Layout;

class DocPanel extends React.PureComponent {
  render() {
    console.log('render this.props------', this.props);
    const { pageData, utils, data, params, picked } = this.props;
    console.log('render pageData------', pageData);
    console.log('render picked------', picked);
    const code = pageData.content.slice(-1).slice(-1);

    return (
      <section className="doc-main">
        <Layout>
          <Sider theme="light" width="300">
            <Menu data={data} currentRoute={params.name} md={picked.posts} />
          </Sider>
          <Content>
            <section className="doc-content">
              {/* <h3>{pageData.meta.title}</h3>
              {utils.toReactComponent(pageData.content)}
              {utils.toReactComponent(pageData.description)} */}
              <DemoDoc {...{ pageData, utils }} />
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
  if (!nextProps.pageData) {
    throw 404;
  }
  const pageData = await nextProps.pageData();
  return { pageData };
})(DocPanel);
