import React from 'react';
import ChatMessage from './ChatMessage';

export default function ChatWindow({ messages = [] }) {
  return (
    <div className="chat-window">
      {messages.map((msg, idx) => (
        <ChatMessage key={idx} message={msg} />
      ))}
    </div>
  );
}
