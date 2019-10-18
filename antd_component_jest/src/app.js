import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

export class T extends React.Component {
  
  componentDidMount() {
    this.setState({v: 2});
    console.log(this.state.v);

    this.setState({v: 3}, () => {
      console.log(this.state.v);
    })
  }
  render() {
    return <Select style={{width: 200}} defaultValue={"0"}>
      <Option value="0">Lily</Option>
      <Option value="1">Lucy</Option>
    </Select>
  }
}