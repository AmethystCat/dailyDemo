import React from 'react';
import { Input, Icon } from 'antd';
import PropTypes from 'prop-types';

const DEFAULT_VALUE = 0;
const DEFAULT_ACCURACY = 1;
const OP_MINUS = 'onMinus';
const OP_PLUS = 'onPlus';

export default class NumberInput extends React.PureComponent {
  static propTypes = {
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    onMinus: PropTypes.func,
    onPlus: PropTypes.func,
    width: PropTypes.number,
    accuracy: PropTypes.number //默认加减的精度
  };

  static defaultProps = {
    defaultValue: '',
    accuracy: 1,
    width: 120,
    onMinus: () => {},
    onPlus: () => {},
    onChange: () => {},
  };

  static getDerivedStateFromProps(nextProps) {
    // Should be a controlled components
    if ('value' in nextProps) {
      console.log(nextProps);
      return {
        ...(nextProps.value || DEFAULT_VALUE)
      };
    }
    return null;
  }

  state = {
    value: this.props.value,
    accuracy: this.props.accuracy || DEFAULT_ACCURACY
  };

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
    const newValue = operate === OP_MINUS ? Number(value) - accuracy : Number(value) + accuracy;

    this.setState({ value: newValue }, () => {
      this.props[operate](this.state.value);
    });
  };

  render() {
    const { width, defaultValue } = this.props;
    const { value } = this.state;

    return (
      <Input
        defaultValue={defaultValue}
        value={value}
        onChange={this.onChangeHandler}
        addonBefore={<Icon type="minus" onClick={() => this.operate(OP_MINUS)} />}
        addonAfter={<Icon type="plus" onClick={() => this.operate(OP_PLUS)} />}
        style={{ width, textAlign: 'center' }}
      />
    );
  }
}
