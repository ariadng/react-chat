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

### Message Object Structure

Each message object in the `messages` array should conform to the following structure:

```typescript
interface MessageContentPart {
  type: 'text'; // Currently only 'text' is supported
  text: string;
  annotations?: any[]; // Optional, for future use or custom rendering
}

interface Message {
  id: string; // Unique identifier for the message
  type: 'message'; // Type of the item, currently 'message'
  role: 'user' | 'assistant'; // Role of the sender
  content: MessageContentPart[]; // Array of content parts
  timestamp?: number; // Optional: UNIX timestamp (in seconds) of when the message was sent/received
}
```
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
  - ✅ Generate TypeScript declaration files (`.d.ts`).
- ✅ **Styling & Customization:**
  - ✅ Refine default styles for a modern look and feel.
  - ✅ Document methods for style `customization (CSS variables/overrides).
- ✅ **Core `ChatWindow` Features:**
  - ✅ Add `isLoading` prop for` loading states.
  - ✅ Add `inputPlaceholder` prop for the message input.
  - ✅ Implement auto-scrolling to the latest message.
- [ ] **Message Enhancements:**
  - [x] Add support for displaying message timestamps.
- [ ] **Documentation:**
  - [ ] Expand `README.md` with detailed API for all components/props.
  - [ ] Add JSDoc comments to components.
- [ ] **Examples:**
  - [ ] Update `example/basic` to showcase new input component and features.
- [ ] **Testing:**
  - [ ] Add unit tests for `ChatInput.jsx`.
  - [ ] Ensure existing tests cover new functionalities.

## Styling & Customization

There are two main ways to customize the appearance of the chat components:

### 1. Overriding CSS Classes

All CSS classes used by this library are prefixed with `rc-` (e.g., `.rc-chat-window-container`, `.rc-chat-message`, `.rc-chat-input`). You can target these classes in your own CSS files to override specific styles. Make sure your custom styles have enough specificity or are loaded after the library's styles.

**Example:**

```css
/* Your custom CSS file */
.rc-chat-message.rc-role-user {
  background-color: #007bff; /* Change user message background to a different blue */
  color: white;
}
```

### 2. Using CSS Custom Properties (Variables)

For more straightforward theming of common elements, the library exposes several CSS custom properties. You can redefine these variables in your own CSS, typically within a `:root` selector or a more specific parent container.

**Available CSS Custom Properties:**

*   `--rc-input-form-border-color`: Top border color of the input form area.
*   `--rc-input-form-bg-color`: Background color of the input form area.
*   `--rc-input-height`: Height of the text input field.
*   `--rc-input-padding`: Padding of the text input field.
*   `--rc-input-border-color`: Border color of the text input field.
*   `--rc-input-border-radius`: Border radius of the text input field.
*   `--rc-input-margin-right`: Right margin of the text input field.
*   `--rc-input-font-size`: Font size for the text input field.
*   `--rc-input-text-color`: Text color of the text input field.
*   `--rc-input-bg-color`: Background color of the text input field.
*   `--rc-input-placeholder-color`: Placeholder text color in the input field.
*   `--rc-input-focus-border-color`: Border color of the input field when focused.
*   `--rc-input-focus-shadow-color`: Box shadow color of the input field when focused.
*   `--rc-send-button-height`: Height of the send button.
*   `--rc-send-button-padding`: Padding of the send button.
*   `--rc-send-button-bg-color`: Background color of the send button.
*   `--rc-send-button-text-color`: Text color of the send button.
*   `--rc-send-button-border-radius`: Border radius of the send button.
*   `--rc-send-button-hover-bg-color`: Background color of the send button on hover.
*   `--rc-send-button-loading-bg-color`: Background color of the send button when in loading state (spinner active).
*   `--rc-messages-area-bg-color`: Background color of the messages area.
*   `--rc-messages-gap`: Gap between messages in the messages area.
*   `--rc-user-message-bg-color`: Background color for user messages.
*   `--rc-user-message-text-color`: Text color for user messages.
*   `--rc-assistant-message-bg-color`: Background color for assistant messages.
*   `--rc-assistant-message-text-color`: Text color for assistant messages.
*   `--rc-send-button-disabled-bg-color`: Background color for the send button when disabled.
*   `--rc-input-disabled-bg-color`: Background color for the input field when disabled.
*   `--rc-timestamp-font-size`: Font size for the message timestamp (default: `0.75em`).
*   `--rc-timestamp-text-color`: Text color for the message timestamp (default: `#6c757d`).

**Example of overriding custom properties:**

```css
/* Your custom CSS file */
:root { /* Or a more specific selector like .my-chat-app-container */
  --rc-user-message-bg-color: #e0f7fa; /* Light cyan */
  --rc-user-message-text-color: #00796b; /* Dark teal */
  --rc-assistant-message-bg-color: #fce4ec; /* Light pink */
  --rc-assistant-message-text-color: #c2185b; /* Dark pink */
  --rc-send-button-bg-color: #4CAF50; /* Green */
  --rc-send-button-hover-bg-color: #388E3C; /* Darker Green */
}
```

By using these methods, you can adapt the `react-chat-ui` components to better fit the visual style of your application.

## Development

Install dependencies and run the test suite:

```bash
npm install
npm test
```
