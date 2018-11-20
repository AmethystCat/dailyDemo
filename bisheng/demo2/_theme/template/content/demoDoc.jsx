import React from 'react';
import DemoItem from './demoItem';

export default class DemoDoc extends React.PureComponent {
  render() {
    const { pageData, utils } = this.props;
    // const content = utils.toReactComponent(['div'].concat(pageData.content));
    const code = utils.toReactComponent(pageData.content);
    
    return <section className="demo-wrapper">
    <DemoItem title={pageData.meta.title} code={code} />
    </section>;
  }
}
