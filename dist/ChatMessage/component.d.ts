/**
 * @typedef {import('./ChatWindow').Message} Message - Imports Message type from ChatWindow JSDoc.
 */
/**
 * ChatMessage component renders a single chat message with appropriate styling
 * for the sender's role and an optional timestamp.
 *
 * @param {Object} props - The component's props.
 * @param {Message | string} props.message - The message object or a string for a simple message.
 *                                          If a string is provided, it's treated as assistant's text content.
 * @returns {JSX.Element}
 */
export function ChatMessage({ message }: {
    message: Message | string;
}): JSX.Element;
/**
 * - Imports Message type from ChatWindow JSDoc.
 */
export type Message = any;
