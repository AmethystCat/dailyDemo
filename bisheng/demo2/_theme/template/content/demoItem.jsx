import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'antd';
import CodePreview from './codePreview';

const DemoItem = props => {
  console.log('-----demoItem-----', props);
  // props 的全部属性见下
  const { meta, content, highlightedCode, preview, style, highlightedStyle } = props.demoData;

  return (
    <section className="demo-item">
      <h3 className="demo-title">{meta.title}</h3>
      <section className="demo-desc">{content}</section>
      {/* 判断markdownData中是否有自定义的css style代码块，如果有则插入style标签 */}
      {style ? <style dangerouslySetInnerHTML={{ __html: style }} /> : null}
      <Row>
        <Col span={24} className="demo-code">
          <CodePreview>{props.utils.toReactComponent(highlightedCode)}</CodePreview>
        </Col>
      </Row>
      {highlightedStyle ? (
        <div key="style" className="highlight">
          <pre>
            <code className="css" dangerouslySetInnerHTML={{ __html: highlightedStyle }} />
          </pre>
        </div>
      ) : null}
      <Row />
      <Row>
        <Col>eg: {preview(React, ReactDOM)}</Col>
      </Row>
    </section>
  );
};

export default DemoItem;
