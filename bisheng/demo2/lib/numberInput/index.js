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
      value: _this.props.value || DEFAULT_VALUE,
      width: 120
    }, _this.onChangeHandler = function (e) {
      // e => event object
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          onCustomChangeHandler = _this$props.onCustomChangeHandler;


      onChange(e.target.value);
      onCustomChangeHandler(e.target.value);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NumberInput, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onChangeHandler = _props.onChangeHandler,
          onMinus = _props.onMinus,
          onPlus = _props.onPlus;
      var val = this.state.val;


      return _react2.default.createElement(_antd.Input, {
        value: val,
        onChange: onChangeHandler,
        addonBefore: _react2.default.createElement(_antd.Icon, { type: 'minus', onClick: onMinus }),
        addonAfter: _react2.default.createElement(_antd.Icon, { type: 'plus', onClick: onPlus }),
        style: { width: 120 }
      });
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps) {
      // Should be a controlled components
      if ('value' in nextProps) {
        return _extends({}, nextProps.value || DEFAULT_VALUE);
      }
      return null;
    }
  }]);

  return NumberInput;
}(_react2.default.PureComponent);

NumberInput.propTypes = {
  onCustomChangeHandler: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onMinus: _propTypes2.default.func,
  onPlus: _propTypes2.default.func,
  width: _propTypes2.default.number
};
NumberInput.defaultProps = {
  onCustomChangeHandler: function onCustomChangeHandler() {},
  onMinus: function onMinus() {},
  onPlus: function onPlus() {},
  onChange: function onChange() {}
};
exports.default = NumberInput;