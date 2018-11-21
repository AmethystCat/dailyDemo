import React from 'react';
import DemoItem from './demoItem';

export default class DemoDoc extends React.PureComponent {
  render() {
    const { pageData, utils, demos } = this.props;
    const desc = utils.toReactComponent(pageData.description);

    return (
      <section className="demo-wrapper">
        <DemoItem demoData={demos.basic} utils={utils} />
        {desc}
      </section>
    );
  }
}
