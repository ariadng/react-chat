"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ChatMessage;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
// Render a single chat message. Supports either a plain string or an object in
// the OpenAI response message format.
/**
 * @typedef {import('./ChatWindow').Message} Message - Imports Message type from ChatWindow JSDoc.
 */

/**
 * ChatMessage component renders a single chat message with appropriate styling
 * for the sender's role and an optional timestamp.
 *
 * @param {Object} props - The component's props.
 * @param {Message | string} props.message - The message object or a string for a simple message.
 *                                          If a string is provided, it's treated as assistant's text content.
 * @returns {JSX.Element}
 */
function ChatMessage(_ref) {
  var message = _ref.message;
  if (message == null) return null;
  var isObject = _typeof(message) === 'object';
  var role = isObject ? message.role : undefined;
  var content = isObject ? message.content : [{
    type: 'text',
    text: message
  }];
  var isValidTimestamp = isObject && typeof message.timestamp === 'number';
  var timestampValue = isValidTimestamp ? new Date(message.timestamp * 1000) : null;
  var formatTimestamp = function formatTimestamp(date) {
    if (!date) return '';
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return "".concat(hours, ":").concat(minutes, " ").concat(ampm);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "rc-chat-message".concat(role ? " rc-role-".concat(role) : '')
  }, content.map(function (part, idx) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: idx,
      className: "rc-message-bubble"
    }, part.type === 'text' ? /*#__PURE__*/_react["default"].createElement("span", null, part.text) : null);
  }), timestampValue && /*#__PURE__*/_react["default"].createElement("div", {
    className: "rc-message-timestamp"
  }, formatTimestamp(timestampValue)));
}