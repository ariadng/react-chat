import React from 'react';

// Render a single chat message. Supports either a plain string or an object in
// the OpenAI response message format.
export default function ChatMessage({ message }) {
  if (message == null) return null;

  const isObject = typeof message === 'object';
  const role = isObject ? message.role : undefined;
  const content = isObject ? message.content : [{ type: 'text', text: message }];

  return (
    <div
      className={`rc-chat-message${role ? ` rc-role-${role}` : ''}`}
    >
      {content.map((part, idx) => (
        part.type === 'text' ? <span key={idx}>{part.text}</span> : null
      ))}
    </div>
  );
}
