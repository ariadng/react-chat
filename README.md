# React Chat UI Library

This library provides a lightweight and fully customizable chat user interface for React applications.
Styles are built with Sass and include a prefixed subset of TailwindCSS utilities so they won't interfere with host applications.

## Installation

```bash
npm install react-chat-ui
```

## Usage

```jsx
import { ChatWindow } from 'react-chat-ui';

const messages = [
  {
    id: '1',
    type: 'message',
    role: 'assistant',
    content: [
      { type: 'text', text: 'Hello', annotations: [] }
    ]
  },
  {
    id: '2',
    type: 'message',
    role: 'user',
    content: [
      { type: 'text', text: 'World', annotations: [] }
    ]
  }
];

function App() {
  return <ChatWindow messages={messages} />;
}
```

## Examples

This repository includes demo projects under the `example` folder. The first
one demonstrates basic usage by importing the components directly from the
source code.

```bash
cd example/basic
npm install
npm run dev
```

Running the command above starts a Vite dev server so you can interact with the
components without installing the package from npm.

## Development

Install dependencies and run the test suite:

```bash
npm install
npm test
```
