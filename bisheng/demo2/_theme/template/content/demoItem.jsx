import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'antd';
import CodePreview from './codePreview';

const DemoItem = props => {
  console.log('-----demoItem-----', props);
  // props 的全部属性见下
  const { meta, content, highlightedCode, preview } = props.demoData;

  return (
    <section className="demo-item">
      <h3 className="demo-title">{meta.title}</h3>
      <section className="demo-desc">{content}</section>
      <Row gutter={16}>
        <Col span={24} className="demo-code">
          <CodePreview>{props.utils.toReactComponent(highlightedCode)}</CodePreview>
        </Col>
      </Row>
      <Row>
        <Col>
          eg: {preview(React, ReactDOM)}
        </Col> 
      </Row>
    </section>
  );
};

export default DemoItem;
