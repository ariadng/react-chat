import React, { useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import './reset.scss';
import './styles.scss';

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
