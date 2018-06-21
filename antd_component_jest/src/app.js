import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

export class T extends React.Component {
  render() {
    return <Select style={{width: 200}} defaultValue={"0"}>
      <Option value="0">Lily</Option>
      <Option value="1">Lucy</Option>
    </Select>
  }
}