import React from 'react';
import { Row, Col, Icon } from 'antd';
import DemoItem from './demoItem';

export default class DemoDoc extends React.PureComponent {
  render() {
    const { pageData, utils, demos } = this.props;
    const { description, api } = pageData;
    const demoKeys = Object.keys(demos);
    // 判断是否是单列
    const isSingleCol = pageData.meta.cols === 1;
    const leftColChildren = [];
    const rightColChildren = [];

    demoKeys.forEach((key, index) => {
      const demoElem = <DemoItem key={demos[key].meta.filename} demoData={demos[key]} utils={utils} />;
      index % 2 === 0 || isSingleCol ? leftColChildren.push(demoElem) : rightColChildren.push(demoElem);
    });

    return (
      <section className="demo-wrapper">
        <h2>代码演示 <Icon type="code" /></h2>
        <Row gutter={16}>
          <Col span={isSingleCol ? 24 : 12}>{leftColChildren}</Col>
          {isSingleCol ? null : <Col span={12}>{rightColChildren}</Col>}
        </Row>
        <div>{description && utils.toReactComponent(description)}</div>
        <div className="markdown api-container">{api && utils.toReactComponent(api)}</div>
      </section>
    );
  }
}
