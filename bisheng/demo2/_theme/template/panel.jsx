import React from 'react';
import collect from 'bisheng/collect';

class Panel extends React.PureComponent {
   render() {
      console.log(this.props); 
      const { pageData, utils } = this.props;
      console.log(pageData);
      return <div>
        <h3>{pageData.meta.title}</h3>
        {utils.toReactComponent(pageData.content)}
        {utils.toReactComponent(pageData.description)}
      </div>;
   }
}
export default collect(async (nextProps) => {
  console.log(nextProps);
  if (!nextProps.pageData) {
    throw 404;
  }
  const pageData = await nextProps.pageData();
  return { pageData };
})(Panel);