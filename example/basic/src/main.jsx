import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ChatWindow } from '../../../dist'; // Using the built files from dist

const initialMessages = [
  {
    id: 'joke_req_1',
    type: 'message',
    role: 'user',
    content: [{ type: 'text', text: 'Hey AI, tell me a joke!' }],
    timestamp: Math.floor((Date.now() - 5 * 60 * 1000) / 1000) // 5 minutes ago
  },
  {
    id: 'joke_resp_1',
    type: 'message',
    role: 'assistant',
    content: [{ type: 'text', text: 'Certainly! Analyzing humor parameters... Joke construction initiated. Did you hear about the mathematician who’s afraid of negative numbers?' }],
    timestamp: Math.floor((Date.now() - 4 * 60 * 1000 - 30 * 1000) / 1000) // 4.5 minutes ago
  },
  {
    id: 'joke_req_2',
    type: 'message',
    role: 'user',
    content: [{ type: 'text', text: "Okay... what happened to him?" }],
    timestamp: Math.floor((Date.now() - 4 * 60 * 1000) / 1000) // 4 minutes ago
  },
  {
    id: 'joke_resp_2',
    type: 'message',
    role: 'assistant',
    content: [{ type: 'text', text: "He’ll stop at nothing to avoid them! ... Recalibrating humor matrix based on potential user response. Probability of laughter: 67.3%." }],
    timestamp: Math.floor((Date.now() - 3 * 60 * 1000) / 1000) // 3 minutes ago
  },
  {
    id: 'joke_req_3',
    type: 'message',
    role: 'user',
    content: [{ type: 'text', text: "Haha, okay, that wasn't bad. Got another one? Maybe something about computers?" }],
    timestamp: Math.floor((Date.now() - 2 * 60 * 1000 - 45 * 1000) / 1000) // 2 min 45 sec ago
  },
  {
    id: 'joke_resp_3',
    type: 'message',
    role: 'assistant',
    content: [{ type: 'text', text: 'Affirmative. Why did the private classes break up?' }],
    timestamp: Math.floor((Date.now() - 2 * 60 * 1000) / 1000) // 2 minutes ago
  },
  {
    id: 'joke_req_4',
    type: 'message',
    role: 'user',
    content: [{ type: 'text', text: 'Hmm, I give up. Why?' }],
    timestamp: Math.floor((Date.now() - 1 * 60 * 1000 - 30 * 1000) / 1000) // 1 min 30 sec ago
  },
  {
    id: 'joke_resp_4',
    type: 'message',
    role: 'assistant',
    content: [{ type: 'text', text: 'Because they never saw each other. Get it? Encapsulation! My internal chronometer indicates this joke has a 72.5% success rate in simulated human trials.' }],
    timestamp: Math.floor((Date.now() - 1 * 60 * 1000) / 1000) // 1 minute ago
  },
  {
    id: 'joke_req_5',
    type: 'message',
    role: 'user',
    content: [{ type: 'text', text: "You and your 'simulated human trials'... alright, one more, make it your best!" }],
    timestamp: Math.floor((Date.now() - 30 * 1000) / 1000) // 30 seconds ago
  },
  {
    id: 'joke_resp_5',
    type: 'message',
    role: 'assistant',
    content: [{ type: 'text', text: 'Processing... Accessing premium joke database... Error 418: I am a teapot. Cannot dispense coffee-related humor. My apologies, I seem to have encountered a... whimsical fault.' }],
    timestamp: Math.floor(Date.now() / 1000) // Current time
  }
];

function App() {
  const [messages, setMessages] = useState(initialMessages);
  const [isLoading, setIsLoading] = useState(false);

  const customTheme = {
    primary: '#007bff',
    assistantBubble: '#f0f0f0',
    assistantText: '#333',
    userBubble: '#007bff',
    userText: '#fff',
    chatBackground: '#f9f9f9',
    inputBackground: '#fff',
    inputText: '#212529',
    buttonBackground: '#007bff',
    buttonText: '#fff',
  };

  const handleSendMessage = (text) => {
    const newUserMessage = {
      id: String(Date.now()), // Using timestamp for a simple unique ID
      type: 'message',
      role: 'user',
      content: [{ type: 'text', text, annotations: [] }],
      timestamp: Math.floor(Date.now() / 1000),
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
        timestamp: Math.floor(Date.now() / 1000),
      };
      setMessages((prevMessages) => [...prevMessages, assistantResponse]);
      setIsLoading(false);
    }, 1500); // Increased delay to better see loading state
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', padding: '20px', boxSizing: 'border-box' }}>
      <h1>Basic Example</h1>
      <div style={{ flexGrow: 1, border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
        <ChatWindow 
          messages={messages} 
          onSendMessage={handleSendMessage} 
          inputPlaceholder="Type your message here..."
          isLoading={isLoading}
          theme={customTheme}
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
