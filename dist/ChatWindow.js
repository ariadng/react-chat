"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ChatWindow;
var _react = _interopRequireWildcard(require("react"));
var _ChatMessage = _interopRequireDefault(require("./ChatMessage"));
var _ChatInput = _interopRequireDefault(require("./ChatInput"));
require("./reset.scss");
require("./styles.scss");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
/**
 * @typedef {Object} MessageContentPart
 * @property {'text'} type - The type of content part (currently only 'text').
 * @property {string} text - The text content.
 * @property {any[]} [annotations] - Optional annotations.
 */

/**
 * @typedef {Object} Message
 * @property {string} id - Unique identifier for the message.
 * @property {'message'} type - Type of the item.
 * @property {'user' | 'assistant'} role - Role of the sender.
 * @property {MessageContentPart[]} content - Array of content parts.
 * @property {number} [timestamp] - Optional UNIX timestamp (in seconds).
 */

/**
 * ChatWindow component displays a list of messages and an input field for sending new messages.
 *
 * @param {Object} props - The component's props.
 * @param {Message[]} [props.messages=[]] - Array of message objects to display.
 * @param {Function} [props.onSendMessage] - Callback function triggered when a new message is submitted. Receives the message text (string).
 * @param {string} [props.inputPlaceholder] - Placeholder text for the message input field.
 * @param {boolean} [props.isLoading=false] - If true, displays a loading indicator and disables input.
 * @returns {JSX.Element}
 */
function ChatWindow(_ref) {
  var _ref$messages = _ref.messages,
    messages = _ref$messages === void 0 ? [] : _ref$messages,
    onSendMessage = _ref.onSendMessage,
    inputPlaceholder = _ref.inputPlaceholder,
    _ref$isLoading = _ref.isLoading,
    isLoading = _ref$isLoading === void 0 ? false : _ref$isLoading;
  var messagesAreaRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    if (messagesAreaRef.current) {
      messagesAreaRef.current.scrollTop = messagesAreaRef.current.scrollHeight;
    }
  }, [messages]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "rc-chat-window-container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "rc-chat-messages-area",
    ref: messagesAreaRef
  }, messages.map(function (msg, idx) {
    return /*#__PURE__*/_react["default"].createElement(_ChatMessage["default"], {
      key: idx,
      message: msg
    });
  }), isLoading && /*#__PURE__*/_react["default"].createElement("div", {
    key: "thinking-indicator",
    className: "rc-chat-message rc-role-assistant rc-thinking-indicator"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "rc-spinner"
  }), " Thinking...")), /*#__PURE__*/_react["default"].createElement(_ChatInput["default"], {
    onSendMessage: onSendMessage,
    placeholder: inputPlaceholder,
    disabled: isLoading
  }));
}