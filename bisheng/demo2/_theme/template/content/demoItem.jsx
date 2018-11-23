import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Tooltip } from 'antd';
import CodePreview from './codePreview';

class DemoItem extends React.PureComponent {
  state = {
    codeExpand: false
  };
  
  setExpand = (codeExpand) => this.setState({ codeExpand });
  
  render() {
    console.log('-----demoItem-----', this.props);
    const { codeExpand } = this.state;
    // demoData 的全部属性见下
    const { meta, content, highlightedCode, preview, style, highlightedStyle } = this.props.demoData;
    // 为什么要concat一个div?
    // ps: 如果不这样就可能出错，原因是：
    // 有些content的内容格式类似为：[["h2", xxx, xxx, [xxx, xxx]]]
    // 如果是上面的格式会引起jsonml.js报 'invalid JsonML' 的错误，原因是：
    // jsonml.js中的isElement的校验逻辑无法通过
    // isElement 判断jsonml为数组格式且第一个元素为字符串
    // function isElement(jml) {
    //    return isArray(jml) && isString(jml[0]) || isString(jml);
    // };
    const introChildren = this.props.utils.toReactComponent(['div'].concat(content));

    return (
      <section className="demo-item-w">
        {/* 判断markdownData中是否有自定义的css style代码块，如果有则插入style标签 */}
        {style ? <style dangerouslySetInnerHTML={{ __html: style }} /> : null}
        <Row className="code-demo item">
          <Col>{preview(React, ReactDOM)}</Col>
        </Row>
        <Row className="demo-desc item" style={{ borderBottomStyle: codeExpand ? 'dashed' : 'solid'}}>
          <Col>
            <h3 className="desc-title">{meta.title}</h3>
            <section className="desc-content">{introChildren}</section>
            <Tooltip title={codeExpand ? 'Hide Code' : 'Show Code'}>
              <span className="code-expand-icon">
                <img
                  alt="expand code"
                  src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg"
                  className={codeExpand ? 'code-expand-icon-hide' : 'code-expand-icon-show'}
                  onClick={() => this.setExpand(true)}
                />
                <img
                  alt="expand code"
                  src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg"
                  className={codeExpand ? 'code-expand-icon-show' : 'code-expand-icon-hide'}
                  onClick={() => this.setExpand(false)}
                />
              </span>
            </Tooltip>
          </Col>
        </Row>
        <Row className={codeExpand ? "code-pre item" : "code-pre item hide"}>
          <Col span={24} className="demo-code">
            <CodePreview>{this.props.utils.toReactComponent(highlightedCode)}</CodePreview>
          </Col>
        </Row>
        {highlightedStyle ? (
          <Row className={codeExpand ? "code-css item" : "code-css item hide"}>
            <Col>
              <div key="style" className="highlight">
                <pre>
                  <code className="css" dangerouslySetInnerHTML={{ __html: highlightedStyle }} />
                </pre>
              </div>
            </Col>
          </Row>
        ) : null}
      </section>
    );
  }
}

export default DemoItem;
