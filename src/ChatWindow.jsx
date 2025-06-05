import React from 'react';
import ChatMessage from './ChatMessage';
import './styles.scss';

export default function ChatWindow({ messages = [] }) {
  return (
    <div className="rc-chat-window">
      {messages.map((msg, idx) => (
        <ChatMessage key={idx} message={msg} />
      ))}
    </div>
  );
}
