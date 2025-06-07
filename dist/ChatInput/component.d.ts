/**
 * ChatInput component provides a form with a text input and a send button for chat.
 *
 * @param {Object} props - The component's props.
 * @param {Function} [props.onSendMessage] - Callback function triggered when the message is sent. Receives the input text (string).
 * @param {string} [props.placeholder="Type a message..."] - Placeholder text for the input field.
 * @param {boolean} [props.disabled=false] - If true, disables the input and send button, and shows a spinner on the button.
 * @returns {JSX.Element}
 */
export function ChatInput({ onSendMessage, placeholder, disabled }: {
    onSendMessage?: Function;
    placeholder?: string;
    disabled?: boolean;
}): JSX.Element;
