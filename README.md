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

## Roadmap / TODO Checklist

- ✅ **Message Input Component (`ChatInput.jsx`):**
  - ✅ Create a component for typing and sending messages.
  - ✅ Implement `onSendMessage` callback in `ChatWindow`.
- ✅ **Build & Packaging:**
  - ✅ Add build script to `package.json` (e.g., Babel/Rollup) for `dist` output.
  - [ ] Generate TypeScript declaration files (`.d.ts`).
- [ ] **Styling & Customization:**
  - [ ] Refine default styles for a modern look and feel.
  - [ ] Document methods for style customization (CSS variables/overrides).
- [ ] **Core `ChatWindow` Features:**
  - [ ] Add `isLoading` prop for loading states.
  - [ ] Add `placeholder` prop for the message input.
  - [ ] Implement auto-scrolling to the latest message.
- [ ] **Message Enhancements:**
  - [ ] Add support for displaying message timestamps.
- [ ] **Documentation:**
  - [ ] Expand `README.md` with detailed API for all components/props.
  - [ ] Add JSDoc comments to components.
- [ ] **Examples:**
  - [ ] Update `example/basic` to showcase new input component and features.
- [ ] **Testing:**
  - [ ] Add unit tests for `ChatInput.jsx`.
  - [ ] Ensure existing tests cover new functionalities.

## Development

Install dependencies and run the test suite:

```bash
npm install
npm test
```
