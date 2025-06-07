function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useState } from 'react';
import { Spinner } from '../Spinner/index';
import classNames from 'classnames';
import styles from "./styles.module.scss";

/**
 * ChatInput component provides a form with a text input and a send button for chat.
 *
 * @param {Object} props - The component's props.
 * @param {Function} [props.onSendMessage] - Callback function triggered when the message is sent. Receives the input text (string).
 * @param {string} [props.placeholder="Type a message..."] - Placeholder text for the input field.
 * @param {boolean} [props.disabled=false] - If true, disables the input and send button, and shows a spinner on the button.
 * @returns {JSX.Element}
 */
export function ChatInput(_ref) {
  var onSendMessage = _ref.onSendMessage,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? "Type a message..." : _ref$placeholder,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.trim()) {
      if (onSendMessage) {
        onSendMessage(inputValue);
      }
      setInputValue('');
    }
  };
  return /*#__PURE__*/React.createElement("form", {
    className: styles.ChatInputForm,
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: styles.ChatInput,
    disabled: disabled,
    value: inputValue,
    onChange: function onChange(e) {
      return setInputValue(e.target.value);
    },
    placeholder: placeholder,
    "aria-busy": disabled
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: classNames(styles.SendButton),
    disabled: disabled
  }, disabled ? /*#__PURE__*/React.createElement(Spinner, null) : 'Send'));
}