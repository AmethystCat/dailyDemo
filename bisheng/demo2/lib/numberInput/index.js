'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_VALUE = '0';
var DEFAULT_ACCURACY = 1;
var OP_MINUS = 'MINUS';
var OP_PLUS = 'PLUS';

var NumberInput = function (_React$PureComponent) {
  _inherits(NumberInput, _React$PureComponent);

  _createClass(NumberInput, null, [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps) {
      // Should be a controlled components
      if ('value' in nextProps) {
        return {
          value: nextProps.value
        };
      }
      return null;
    }
  }]);

  function NumberInput(props) {
    _classCallCheck(this, NumberInput);

    var _this = _possibleConstructorReturn(this, (NumberInput.__proto__ || Object.getPrototypeOf(NumberInput)).call(this, props));

    _initialiseProps.call(_this);

    var _this$props = _this.props,
        value = _this$props.value,
        defaultValue = _this$props.defaultValue,
        accuracy = _this$props.accuracy;

    _this.state = {
      value: value || defaultValue || DEFAULT_VALUE,
      accuracy: accuracy
    };
    return _this;
  }

  _createClass(NumberInput, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var width = this.props.width;
      var value = this.state.value;


      return _react2.default.createElement(_antd.Input, {
        value: value,
        onChange: this.onChangeHandler,
        addonBefore: _react2.default.createElement(_antd.Icon, { type: 'minus', onClick: function onClick() {
            return _this2.operate(OP_MINUS);
          } }),
        addonAfter: _react2.default.createElement(_antd.Icon, { type: 'plus', onClick: function onClick() {
            return _this2.operate(OP_PLUS);
          } }),
        style: { width: width, textAlign: 'center' }
      });
    }
  }]);

  return NumberInput;
}(_react2.default.PureComponent);

NumberInput.propTypes = {
  defaultValue: _propTypes2.default.string,
  value: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  interceptor: _propTypes2.default.func,
  width: _propTypes2.default.number,
  accuracy: _propTypes2.default.number //默认加减的精度
};
NumberInput.defaultProps = {
  accuracy: DEFAULT_ACCURACY,
  width: 120,
  onChange: function onChange() {},
  interceptor: function interceptor() {
    return true;
  }
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onChangeHandler = function (e) {
    // e => event object
    var onChange = _this3.props.onChange;

    var value = e.target.value;

    if (value !== '-' && value && isNaN(Number(value))) return;

    _this3.setState({ value: value }, function () {
      var value = _this3.state.value;

      onChange(value);
    });
  };

  this.operate = function (operate) {
    var _state = _this3.state,
        accuracy = _state.accuracy,
        value = _state.value;

    var newValue = operate === OP_MINUS ? '' + (Number(value) - Number(accuracy)) : '' + (Number(value) + Number(accuracy));
    var _props = _this3.props,
        onChange = _props.onChange,
        interceptor = _props.interceptor;

    // 这里设置一道拦截器，加减改变状态前，可以停止修改。

    if (!interceptor(value, newValue, operate)) return false;

    _this3.setState({ value: newValue }, function () {
      // this.props[operate](this.state.value);
      onChange(_this3.state.value);
    });
  };
};

exports.default = NumberInput;