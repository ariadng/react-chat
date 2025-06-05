import React from 'react';
import { render, screen } from '@testing-library/react';
import { ChatWindow } from '../src';

test('renders messages', () => {
  render(<ChatWindow messages={['hello', 'world']} />);
  expect(screen.getByText('hello')).toBeInTheDocument();
  expect(screen.getByText('world')).toBeInTheDocument();
});
