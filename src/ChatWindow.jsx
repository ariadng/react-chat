import React, { useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import './reset.scss';
import './styles.scss';

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
export default function ChatWindow({ messages = [], onSendMessage, inputPlaceholder, isLoading = false }) {
  const messagesAreaRef = useRef(null);
  useEffect(() => {
    if (messagesAreaRef.current) {
      messagesAreaRef.current.scrollTop = messagesAreaRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="rc-chat-window-container">
      <div className="rc-chat-messages-area" ref={messagesAreaRef}>
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} message={msg} />
        ))}
        {isLoading && (
          <div key="thinking-indicator" className="rc-chat-message rc-role-assistant rc-thinking-indicator">
            <span className="rc-spinner"></span> Thinking...
          </div>
        )}
      </div>
      {/* ChatInput is now correctly placed within the flex container */}
      <ChatInput onSendMessage={onSendMessage} placeholder={inputPlaceholder} disabled={isLoading} />
    </div>
  );
}
