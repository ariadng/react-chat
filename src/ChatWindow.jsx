import React from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import './reset.scss';
import './styles.scss';

export default function ChatWindow({ messages = [], onSendMessage, inputPlaceholder }) {
  return (
    <div className="rc-chat-window-container">
      <div className="rc-chat-messages-area">
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} message={msg} />
        ))}
      </div>
      {/* ChatInput is now correctly placed within the flex container */}
      <ChatInput onSendMessage={onSendMessage} placeholder={inputPlaceholder} />
    </div>
  );
}
