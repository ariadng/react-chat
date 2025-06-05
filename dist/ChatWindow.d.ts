/**
 * @typedef {Object} MessageContentPart
 * @property {'text'} type - The type of content part (currently only 'text').
 * @property {string} text - The text content.
 * @property {any[]} [annotations] - Optional annotations.
 */
/**
 * @typedef {Object} Message
 * @property {string} id - Unique identifier for the message.
 * @property {'message'} type - Type of the item.
 * @property {'user' | 'assistant'} role - Role of the sender.
 * @property {MessageContentPart[]} content - Array of content parts.
 * @property {number} [timestamp] - Optional UNIX timestamp (in seconds).
 */
/**
 * ChatWindow component displays a list of messages and an input field for sending new messages.
 *
 * @param {Object} props - The component's props.
 * @param {Message[]} [props.messages=[]] - Array of message objects to display.
 * @param {Function} [props.onSendMessage] - Callback function triggered when a new message is submitted. Receives the message text (string).
 * @param {string} [props.inputPlaceholder] - Placeholder text for the message input field.
 * @param {boolean} [props.isLoading=false] - If true, displays a loading indicator and disables input.
 * @returns {JSX.Element}
 */
export default function ChatWindow({ messages, onSendMessage, inputPlaceholder, isLoading }: {
    messages?: Message[];
    onSendMessage?: Function;
    inputPlaceholder?: string;
    isLoading?: boolean;
}): JSX.Element;
export type MessageContentPart = {
    /**
     * - The type of content part (currently only 'text').
     */
    type: "text";
    /**
     * - The text content.
     */
    text: string;
    /**
     * - Optional annotations.
     */
    annotations?: any[];
};
export type Message = {
    /**
     * - Unique identifier for the message.
     */
    id: string;
    /**
     * - Type of the item.
     */
    type: "message";
    /**
     * - Role of the sender.
     */
    role: "user" | "assistant";
    /**
     * - Array of content parts.
     */
    content: MessageContentPart[];
    /**
     * - Optional UNIX timestamp (in seconds).
     */
    timestamp?: number;
};
