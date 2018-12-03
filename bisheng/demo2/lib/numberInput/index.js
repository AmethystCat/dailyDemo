'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

var DEFAULT_VALUE = 0;
var DEFAULT_ACCURACY = 1;
var OP_MINUS = 'onMinus';
var OP_PLUS = 'onPlus';

var NumberInput = function (_React$PureComponent) {
  _inherits(NumberInput, _React$PureComponent);

  function NumberInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NumberInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NumberInput.__proto__ || Object.getPrototypeOf(NumberInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: _this.props.value,
      accuracy: _this.props.accuracy
    }, _this.onChangeHandler = function (e) {
      // e => event object
      var onChange = _this.props.onChange;

      var value = e.target.value;

      if (value !== '-' && value && isNaN(Number(value))) return;

      _this.setState({ value: value }, function () {
        var value = _this.state.value;

        onChange(value);
      });
    }, _this.operate = function (operate) {
      var _this$state = _this.state,
          accuracy = _this$state.accuracy,
          value = _this$state.value;

      var newValue = operate === OP_MINUS ? Number(value) - accuracy : Number(value) + accuracy;

      _this.setState({ value: newValue }, function () {
        _this.props[operate](_this.state.value);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NumberInput, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          width = _props.width,
          defaultValue = _props.defaultValue;
      var value = this.state.value;


      return _react2.default.createElement(_antd.Input, {
        defaultValue: defaultValue,
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
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps) {
      // Should be a controlled components
      console.log(nextProps);
      if ('value' in nextProps) {
        return _extends({}, nextProps.value || DEFAULT_VALUE);
      }
      return null;
    }
  }]);

  return NumberInput;
}(_react2.default.PureComponent);

NumberInput.propTypes = {
  defaultValue: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onMinus: _propTypes2.default.func,
  onPlus: _propTypes2.default.func,
  width: _propTypes2.default.number,
  accuracy: _propTypes2.default.number //默认加减的精度
};
NumberInput.defaultProps = {
  defaultValue: '',
  accuracy: DEFAULT_ACCURACY,
  width: 120,
  onMinus: function onMinus() {},
  onPlus: function onPlus() {},
  onChange: function onChange() {}
};
exports.default = NumberInput;