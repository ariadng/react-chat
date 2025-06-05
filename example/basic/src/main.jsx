import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChatWindow } from '../../src';

const messages = ['Hello', 'world!'];

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChatWindow messages={messages} />
);
