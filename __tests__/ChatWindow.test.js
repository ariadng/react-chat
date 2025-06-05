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

test('displays loading indicator and disables input when isLoading is true', () => {
  render(<ChatWindow messages={[]} isLoading={true} />);
  expect(screen.getByText('Thinking...')).toBeInTheDocument();
  // Assuming default placeholder if not provided, to find the input
  const inputElement = screen.getByPlaceholderText('Type a message...'); 
  expect(inputElement).toBeDisabled();
});

test('passes inputPlaceholder to ChatInput', () => {
  render(<ChatWindow messages={[]} inputPlaceholder="Test placeholder" />);
  expect(screen.getByPlaceholderText('Test placeholder')).toBeInTheDocument();
});

test('renders message with timestamp', () => {
  const messagesWithTimestamp = [
    {
      id: 'ts1',
      type: 'message',
      role: 'user',
      content: [{ type: 'text', text: 'Message with time' }],
      timestamp: Math.floor(new Date(2023, 0, 15, 14, 35, 0).getTime() / 1000) // 2:35 PM
    }
  ];
  render(<ChatWindow messages={messagesWithTimestamp} />);
  expect(screen.getByText('Message with time')).toBeInTheDocument();
  expect(screen.getByText('2:35 PM')).toBeInTheDocument();
});
