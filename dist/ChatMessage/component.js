function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

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
export function ChatMessage(_ref) {
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
  return /*#__PURE__*/React.createElement("div", {
    className: classNames(styles.ChatMessage, _defineProperty(_defineProperty({}, styles.role_assistant, role === 'assistant'), styles.role_user, role === 'user'))
  }, content.map(function (part, idx) {
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      className: styles.MessageBubble
    }, part.type === 'text' ? /*#__PURE__*/React.createElement("span", null, part.text) : null);
  }), timestampValue && /*#__PURE__*/React.createElement("div", {
    className: styles.Timestamp
  }, formatTimestamp(timestampValue)));
}