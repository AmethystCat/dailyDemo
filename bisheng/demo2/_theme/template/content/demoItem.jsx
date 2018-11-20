import React from 'react';
import { Row, Col } from 'antd';
import CodePreview from './codePreview';

const DemoItem = props => {
  console.log('-----demoItem-----', props);
  return (
    <section className="demo-item">
      <h3 className="demo-title">{props.title}</h3>
      <section className="demo-desc">{props.content}</section>
      <Row>
        <Col className="demo-code">
          <CodePreview>{props.code}</CodePreview>
        </Col>
        <Col className="demo-entity">我是实例</Col>
      </Row>
    </section>
  );
};

export default DemoItem;
