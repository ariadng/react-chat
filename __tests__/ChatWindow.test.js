import React from 'react';
import { render, screen } from '@testing-library/react';
import { ChatWindow } from '../src';

test('renders messages', () => {
  const messages = [
    {
      id: '1',
      type: 'message',
      role: 'user',
      content: [
        { type: 'text', text: 'hello', annotations: [] }
      ]
    },
    {
      id: '2',
      type: 'message',
      role: 'assistant',
      content: [
        { type: 'text', text: 'world', annotations: [] }
      ]
    }
  ];
  render(<ChatWindow messages={messages} />);
  expect(screen.getByText('hello')).toBeInTheDocument();
  expect(screen.getByText('world')).toBeInTheDocument();
});
