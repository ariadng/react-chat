import React, { useState } from 'react';

export default function ChatInput({ onSendMessage, placeholder = "Type a message..." }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      // onSendMessage will be implemented in a later step
      if (onSendMessage) {
        onSendMessage(inputValue);
      }
      // console.log('Sending message:', inputValue); // Keep for debugging if needed
      setInputValue('');
    }
  };

  return (
    <form className="rc-chat-input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="rc-chat-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={placeholder}
      />
      <button type="submit" className="rc-chat-send-button">
        Send
      </button>
    </form>
  );
}
