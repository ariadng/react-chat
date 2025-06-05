import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ChatWindow } from '../../../src'; // Adjust path if your project structure is different

const initialMessages = [
  {
    id: '1',
    type: 'message',
    role: 'assistant',
    content: [
      { type: 'text', text: 'Hello! This is a basic example of react-chat-ui.', annotations: [] }
    ]
  },
  {
    id: '2',
    type: 'message',
    role: 'user',
    content: [
      { type: 'text', text: 'Great! How does it look?', annotations: [] }
    ]
  },
  {
    id: '3',
    type: 'message',
    role: 'assistant',
    content: [
      { type: 'text', text: 'It uses SCSS for styling. Try sending a message!', annotations: [] }
    ]
  },
];

function App() {
  const [messages, setMessages] = useState(initialMessages);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = (text) => {
    const newUserMessage = {
      id: String(Date.now()), // Using timestamp for a simple unique ID
      type: 'message',
      role: 'user',
      content: [{ type: 'text', text, annotations: [] }],
    };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setIsLoading(true);

    // Simulate assistant response
    setTimeout(() => {
      const assistantResponse = {
        id: String(Date.now() + 1), // Ensure unique ID for assistant's reply
        type: 'message',
        role: 'assistant',
        content: [{ type: 'text', text: `I received: "${text}"`, annotations: [] }],
      };
      setMessages((prevMessages) => [...prevMessages, assistantResponse]);
      setIsLoading(false);
    }, 1500); // Increased delay to better see loading state
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', padding: '20px', boxSizing: 'border-box' }}>
      <h1>React Chat UI - Basic Example (with Input)</h1>
      <div style={{ flexGrow: 1, border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
        <ChatWindow 
          messages={messages} 
          onSendMessage={handleSendMessage} 
          inputPlaceholder="Type your message here..."
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
