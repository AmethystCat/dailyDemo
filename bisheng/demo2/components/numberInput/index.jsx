import React from 'react';
import { Input, Icon } from 'antd';
import PropTypes from 'prop-types';

const DEFAULT_VALUE = '0';
const DEFAULT_ACCURACY = 1;
const OP_MINUS = 'MINUS';
const OP_PLUS = 'PLUS';

export default class NumberInput extends React.PureComponent {
  static propTypes = {
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    interceptor: PropTypes.func,
    width: PropTypes.number,
    accuracy: PropTypes.number //默认加减的精度
  };

  static defaultProps = {
    accuracy: DEFAULT_ACCURACY,
    width: 120,
    onChange: () => {},
    interceptor: () => true
  };

  static getDerivedStateFromProps(nextProps) {
    // Should be a controlled components
    if ('value' in nextProps) {
      return {
        value: nextProps.value,
      };
    }
    return null;
  }

  constructor(props) {
    super(props);

    const { value, defaultValue, accuracy } = this.props;
    this.state = {
      value: value || defaultValue || DEFAULT_VALUE,
      accuracy
    };
  }

  onChangeHandler = e => {
    // e => event object
    const { onChange } = this.props;
    const value = e.target.value;

    if (value !== '-' && value && isNaN(Number(value))) return;

    this.setState({ value }, () => {
      const { value } = this.state;
      onChange(value);
    });
  };

  operate = operate => {
    const { accuracy, value } = this.state;
    const newValue = (operate === OP_MINUS)
      ? `${Number(value) - Number(accuracy)}` 
      : `${Number(value) + Number(accuracy)}`;
    const { onChange, interceptor } = this.props;

    // 这里设置一道拦截器，加减改变状态前，可以停止修改。
    if (!interceptor(value, newValue, operate)) return false;

    this.setState({ value: newValue }, () => {
      // this.props[operate](this.state.value);
      onChange(this.state.value);
    });
  };

  render() {
    const { width } = this.props;
    const { value } = this.state;

    return (
      <Input
        value={value}
        onChange={this.onChangeHandler}
        addonBefore={<Icon type="minus" onClick={() => this.operate(OP_MINUS)} />}
        addonAfter={<Icon type="plus" onClick={() => this.operate(OP_PLUS)} />}
        style={{ width, textAlign: 'center' }}
      />
    );
  }
}
