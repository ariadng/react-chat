import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ChatInput from '../src/ChatInput'; // Adjust path if necessary based on where ChatInput is exported from src

describe('ChatInput', () => {
  test('renders the input field and send button', () => {
    render(<ChatInput />);
    expect(screen.getByPlaceholderText('Type a message...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
  });

  test('allows user to type in the input field', () => {
    render(<ChatInput />);
    const inputElement = screen.getByPlaceholderText('Type a message...');
    fireEvent.change(inputElement, { target: { value: 'Hello there!' } });
    expect(inputElement.value).toBe('Hello there!');
  });

  test('calls onSendMessage with the input text and clears input on submit', () => {
    const mockOnSendMessage = jest.fn();
    render(<ChatInput onSendMessage={mockOnSendMessage} />);
    const inputElement = screen.getByPlaceholderText('Type a message...');
    const sendButton = screen.getByRole('button', { name: /send/i });

    fireEvent.change(inputElement, { target: { value: 'Test message' } });
    fireEvent.click(sendButton);

    expect(mockOnSendMessage).toHaveBeenCalledWith('Test message');
    expect(inputElement.value).toBe('');
  });

  test('does not call onSendMessage if input is empty', () => {
    const mockOnSendMessage = jest.fn();
    render(<ChatInput onSendMessage={mockOnSendMessage} />);
    const sendButton = screen.getByRole('button', { name: /send/i });

    fireEvent.click(sendButton);
    expect(mockOnSendMessage).not.toHaveBeenCalled();
  });

  test('does not call onSendMessage if input is only whitespace', () => {
    const mockOnSendMessage = jest.fn();
    render(<ChatInput onSendMessage={mockOnSendMessage} />);
    const inputElement = screen.getByPlaceholderText('Type a message...');
    const sendButton = screen.getByRole('button', { name: /send/i });

    fireEvent.change(inputElement, { target: { value: '   ' } });
    fireEvent.click(sendButton);
    expect(mockOnSendMessage).not.toHaveBeenCalled();
    expect(inputElement.value).toBe('   '); // Input should retain whitespace until a valid send
  });

  test('displays custom placeholder text', () => {
    render(<ChatInput placeholder="Enter your witty remark here..." />);
    expect(screen.getByPlaceholderText('Enter your witty remark here...')).toBeInTheDocument();
  });

  test('disables input and button, and shows spinner when disabled prop is true', () => {
    const mockOnSendMessage = jest.fn();
    render(<ChatInput onSendMessage={mockOnSendMessage} disabled={true} />);
    const inputElement = screen.getByPlaceholderText('Type a message...');
    const sendButton = screen.getByRole('button'); // Not querying by name "Send" as it's replaced by spinner

    expect(inputElement).toBeDisabled();
    expect(sendButton).toBeDisabled();
    // Check for spinner presence by looking for its class or a child element with the spinner role/class
    // Assuming the spinner is a span with class 'rc-spinner' as per ChatInput.jsx
    const spinner = sendButton.querySelector('.rc-spinner');
    expect(spinner).toBeInTheDocument();

    // Try to submit
    fireEvent.change(inputElement, { target: { value: 'Trying to send when disabled' } });
    fireEvent.click(sendButton);
    expect(mockOnSendMessage).not.toHaveBeenCalled();
  });
});
