import React from 'react';

// Render a single chat message. Supports either a plain string or an object in
// the OpenAI response message format.
export default function ChatMessage({ message }) {
  if (message == null) return null;

  const isObject = typeof message === 'object';
  const role = isObject ? message.role : undefined;
  const content = isObject ? message.content : [{ type: 'text', text: message }];
  const isValidTimestamp = isObject && typeof message.timestamp === 'number';
  const timestampValue = isValidTimestamp ? new Date(message.timestamp * 1000) : null;

  const formatTimestamp = (date) => {
    if (!date) return '';
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutes} ${ampm}`;
  };

  return (
    <div
      className={`rc-chat-message${role ? ` rc-role-${role}` : ''}`}
    >
      {content.map((part, idx) => (
        <div key={idx} className="rc-message-bubble">
          {/* Currently only rendering text parts. Future: switch on part.type */} 
          {part.type === 'text' ? <span>{part.text}</span> : null}
        </div>
      ))}
      {timestampValue && (
        <div className="rc-message-timestamp">
          {formatTimestamp(timestampValue)}
        </div>
      )}
    </div>
  );
}
