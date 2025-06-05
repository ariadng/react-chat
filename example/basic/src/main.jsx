import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChatWindow } from '../../../src';

const messages = [
  {
    id: '1',
    type: 'message',
    role: 'user',
    content: [
      { type: 'text', text: 'Hi there!', annotations: [] }
    ]
  },
  {
    id: '2',
    type: 'message',
    role: 'assistant',
    content: [
      { type: 'text', text: 'Hello! How can I help you today?', annotations: [] }
    ]
  },
  {
    id: '3',
    type: 'message',
    role: 'user',
    content: [
      { type: 'text', text: 'Tell me a joke.', annotations: [] }
    ]
  },
  {
    id: '4',
    type: 'message',
    role: 'assistant',
    content: [
      {
        type: 'text',
        text: 'Why did the scarecrow win an award? Because he was outstanding in his field.',
        annotations: []
      }
    ]
  },
  {
    id: '5',
    type: 'message',
    role: 'user',
    content: [
      { type: 'text', text: "Haha, that's funny!", annotations: [] }
    ]
  },
  {
    id: '6',
    type: 'message',
    role: 'assistant',
    content: [
      { type: 'text', text: 'Glad you liked it. Need anything else?', annotations: [] }
    ]
  },
  {
    id: '7',
    type: 'message',
    role: 'user',
    content: [
      { type: 'text', text: 'No thanks, that was all.', annotations: [] }
    ]
  },
  {
    id: '8',
    type: 'message',
    role: 'assistant',
    content: [
      { type: 'text', text: 'You\'re welcome! Have a great day.', annotations: [] }
    ]
  },
  {
    id: '9',
    type: 'message',
    role: 'user',
    content: [
      { type: 'text', text: 'Bye!', annotations: [] }
    ]
  },
  {
    id: '10',
    type: 'message',
    role: 'assistant',
    content: [
      { type: 'text', text: 'Goodbye!', annotations: [] }
    ]
  }
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChatWindow messages={messages} />
);
