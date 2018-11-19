import React from 'react';
import { Layout } from 'antd';
import collect from 'bisheng/collect';
import Menu from './menu';
import 'antd/dist/antd.css';

const { Content, Sider } = Layout;

class DocPanel extends React.PureComponent {
  render() {
    console.log('render this.props------', this.props);
    const { pageData, utils, data, params, picked, router } = this.props;
    console.log('render pageData------', pageData);

    return (
      <section className="doc-container">
        <Layout>
          <Sider theme="light">
            <Menu data={data} currentRoute={params.name} md={picked.posts} />
          </Sider>
          <Content>
            <h3>{pageData.meta.title}</h3>
            {utils.toReactComponent(pageData.content)}
            {utils.toReactComponent(pageData.description)}
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
