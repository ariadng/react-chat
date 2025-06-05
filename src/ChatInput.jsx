import React, { useState } from 'react';

export default function ChatInput({ onSendMessage, placeholder = "Type a message...", disabled = false }) {
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
        disabled={disabled}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={placeholder}
        aria-busy={disabled}
      />
      <button type="submit" className={`rc-chat-send-button ${disabled ? 'rc-loading' : ''}`} disabled={disabled}>
        {disabled ? <span className="rc-spinner"></span> : 'Send'}
      </button>
    </form>
  );
}
