import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import styles from "./styles.module.scss";
import { ChatMessage } from '../ChatMessage/index';
import { ChatInput } from '../ChatInput/index';
import { Spinner } from '../Spinner/index';

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
export function ChatWindow(_ref) {
  var _ref$messages = _ref.messages,
    messages = _ref$messages === void 0 ? [] : _ref$messages,
    onSendMessage = _ref.onSendMessage,
    inputPlaceholder = _ref.inputPlaceholder,
    _ref$isLoading = _ref.isLoading,
    isLoading = _ref$isLoading === void 0 ? false : _ref$isLoading;
  var messagesAreaRef = useRef(null);
  useEffect(function () {
    if (messagesAreaRef.current) {
      messagesAreaRef.current.scrollTop = messagesAreaRef.current.scrollHeight;
    }
  }, [messages]);
  return /*#__PURE__*/React.createElement("div", {
    className: classNames(styles.Reset, styles.ChatWindowContainer)
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.ChatWindow
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.ChatMessagesArea,
    ref: messagesAreaRef
  }, messages.map(function (msg, idx) {
    return /*#__PURE__*/React.createElement(ChatMessage, {
      key: idx,
      message: msg
    });
  }), isLoading && /*#__PURE__*/React.createElement("div", {
    key: "thinking-indicator",
    className: styles.ThinkingIndicator
  }, /*#__PURE__*/React.createElement(Spinner, null), " Thinking...")), /*#__PURE__*/React.createElement(ChatInput, {
    onSendMessage: onSendMessage,
    placeholder: inputPlaceholder,
    disabled: isLoading
  })));
}