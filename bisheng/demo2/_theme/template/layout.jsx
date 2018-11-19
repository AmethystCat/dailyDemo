import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

const { Sider, Content } = Layout;

export default props => {
  console.log(props);
  return (
    <div className="section-layout">
      <Layout>
        <Sider theme="light">
          menu
        </Sider>
        <Content>
          {props.children}
        </Content>
      </Layout>
    </div>
  );
};
