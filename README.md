# React Chat UI Library

This library provides a lightweight and fully customizable chat user interface for React applications.

<img width="1081" alt="Screenshot 2025-06-05 at 19 44 41" src="https://github.com/user-attachments/assets/0ab8e625-0067-4f9f-a07d-89ba629787f0" />

## Installation

```bash
npm install @ariadng/react-chat
```

## Usage

```jsx
import { ChatWindow } from 'react-chat';

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

## Component API

This section details the props accepted by the main components of the `react-chat-ui` library.

### `ChatWindow`

The `ChatWindow` component is the main container for displaying messages and the chat input field.

| Prop               | Type     | Default | Description                                                                                                |
|--------------------|----------|---------|------------------------------------------------------------------------------------------------------------|
| `messages`         | `Array`  | `[]`    | An array of message objects to display. See "Message Object Structure" below for details.                  |
| `onSendMessage`    | `Function` |         | Callback function triggered when a new message is submitted from the input. Receives the message text (string) as an argument. |
| `inputPlaceholder` | `String` |         | Placeholder text for the message input field.                                                              |
| `isLoading`        | `Boolean`| `false` | If `true`, displays a "Thinking..." indicator below messages and disables the chat input.                |

### `ChatInput`

(Note: `ChatInput` is used internally by `ChatWindow` but can also be used standalone if needed, though it's primarily designed for integration within `ChatWindow`.)

The `ChatInput` component provides the text input field and send button.

| Prop              | Type     | Default              | Description                                                                                                                     |
|-------------------|----------|----------------------|---------------------------------------------------------------------------------------------------------------------------------|
| `onSendMessage`   | `Function` |                      | Callback function triggered when the send button is clicked or the form is submitted. Receives the input value (string) as an argument. |
| `placeholder`     | `String` | `"Type a message..."` | Placeholder text for the input field.                                                                                           |
| `disabled`        | `Boolean`| `false`              | If `true`, disables the input field and send button. The send button will also show a spinner.                                    |

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
  - ✅ Implem`ent auto-scrolling to the latest message.
- ✅ **Message Enhancements:**
  - ✅ Add support for displaying message timestamps.
- ✅ **Documentation:**
  - ✅ Expand `README.md` with detailed API for all components/props.
  - ✅ Add JSDoc comments to components.
- ✅ **Examples:**
  - ✅ Update `example/basic` to showcase new input component and features.
- ✅ **Testing:**
  - ✅ Add unit tests for `ChatInput.jsx`.
  - ✅ Ensure existing tests cover new functionalities.

## Styling & Customization

There are a few ways to customize the appearance of the chat components:

### 1. Using the `theme` Prop (Recommended for Colors)

The `ChatWindow` component accepts a `theme` prop, which allows you to easily customize the core color scheme of the chat interface. This is the recommended approach for most color-related theming needs as it sets multiple underlying CSS custom properties for you.

Pass an object to the `theme` prop with any of the following keys:

```typescript
interface ThemeColors {
  primary?: string;          // Primary accent color (e.g., for spinner, button hover effects)
  assistantBubble?: string;  // Background color for assistant messages
  assistantText?: string;    // Text color for assistant messages
  userBubble?: string;       // Background color for user messages
  userText?: string;         // Text color for user messages
  chatBackground?: string;   // Background color for the main chat area
  inputBackground?: string;  // Background color for the text input field
  inputText?: string;        // Text color for the input field and timestamps
  buttonBackground?: string; // Background color for the send button
  buttonText?: string;       // Text color for the send button
  headerBackground?: string; // Background color for a potential future header
  headerText?: string;       // Text color for a potential future header
}
```

**Example:**

```jsx
import { ChatWindow } from '@ariadng/react-chat';

const myTheme = {
  primary: '#ff69b4', // Hot pink
  userBubble: '#ff69b4',
  userText: '#ffffff',
  assistantBubble: '#f0f8ff', // Alice blue
  assistantText: '#333333',
  chatBackground: '#fafafa',
  buttonBackground: '#ff69b4',
  buttonText: '#ffffff',
};

function MyThemedChat() {
  return <ChatWindow messages={messages} theme={myTheme} />;
}
```

This `theme` prop sets corresponding CSS custom properties (e.g., `theme.primary` sets `--rc-primary-color`). You can still override these individual CSS custom properties if you need more fine-grained control (see section below).

### 2. Overriding CSS Classes

All CSS classes used by this library are prefixed with `rc-` (e.g., `.rc-chat-window-container`, `.rc-chat-message`, `.rc-chat-input`). You can target these classes in your own CSS files to override specific styles. Make sure your custom styles have enough specificity or are loaded after the library's styles.

**Example:**

```css
/* Your custom CSS file */
.rc-chat-message.rc-role-user {
  background-color: #007bff; /* Change user message background to a different blue */
  color: white;
}
```

### 3. Using CSS Custom Properties (Variables) Directly

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
*   `--rc-primary-color`: Primary accent color (set by `theme.primary`).
*   `--rc-user-bubble-color`: Background color for user messages (set by `theme.userBubble`).
*   `--rc-user-text-color`: Text color for user messages (set by `theme.userText`).
*   `--rc-assistant-bubble-color`: Background color for assistant messages (set by `theme.assistantBubble`).
*   `--rc-assistant-text-color`: Text color for assistant messages (set by `theme.assistantText`).
*   `--rc-chat-background-color`: Background for the chat messages area (set by `theme.chatBackground`).
*   `--rc-input-background-color`: Background for the text input field (set by `theme.inputBackground`).
*   `--rc-input-text-color`: Text color for the input field and timestamps (set by `theme.inputText`).
*   `--rc-button-background-color`: Background for the send button (set by `theme.buttonBackground`).
*   `--rc-button-text-color`: Text color for the send button (set by `theme.buttonText`).
*   `--rc-header-background-color`: Background for a potential header (set by `theme.headerBackground`).
*   `--rc-header-text-color`: Text color for a potential header (set by `theme.headerText`).
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

By using these methods, you can adapt the `@ariadng/react-chat` components to better fit the visual style of your application. Using the `theme` prop is generally the easiest way to apply a consistent color scheme.

## Development

Install dependencies and run the test suite:

```bash
npm install
npm test
```
