import React from 'react';
import { Input, Icon } from 'antd';
import PropTypes from 'prop-types';

const DEFAULT_VALUE = 0;
export default class NumberInput extends React.PureComponent {
  static propTypes = {
    onCustomChangeHandler: PropTypes.func,
    onChange: PropTypes.func,
    onMinus: PropTypes.func,
    onPlus: PropTypes.func,
    width: PropTypes.number,
  };

  static defaultProps = {
    onCustomChangeHandler: () => {},
    onMinus: () => {},
    onPlus: () => {},
    onChange: () => {},
  };

  static getDerivedStateFromProps(nextProps) {
    // Should be a controlled components
    if ('value' in nextProps) {
      return {
        ...(nextProps.value || DEFAULT_VALUE)
      };
    }
    return null;
  }

  state = {
    value: this.props.value || DEFAULT_VALUE,
    width: 120,
  };
  
  onChangeHandler = (e) => {
    // e => event object
    const { onChange, onCustomChangeHandler } = this.props;
    
    onChange(e.target.value);
    onCustomChangeHandler(e.target.value);
  }

  render() {
    const { onChangeHandler, onMinus, onPlus } = this.props;
    const { val } = this.state;

    return (
      <Input
        value={val}
        onChange={onChangeHandler}
        addonBefore={<Icon type="minus" onClick={onMinus} />}
        addonAfter={<Icon type="plus" onClick={onPlus} />}
        style={{ width: 120 }}
      />
    );
  }
}
