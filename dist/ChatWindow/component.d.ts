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
 * @typedef {Object} ThemeColors
 * @property {string} [primary] - Primary color for accents.
 * @property {string} [assistantBubble] - Background color for assistant messages.
 * @property {string} [assistantText] - Text color for assistant messages.
 * @property {string} [userBubble] - Background color for user messages.
 * @property {string} [userText] - Text color for user messages.
 * @property {string} [chatBackground] - Background color for the chat window area.
 * @property {string} [inputBackground] - Background color for the text input field.
 * @property {string} [inputText] - Text color for the input field.
 * @property {string} [buttonBackground] - Background color for the send button.
 * @property {string} [buttonText] - Text color for the send button.
 * @property {string} [headerBackground] - Background color for the chat header (if any).
 * @property {string} [headerText] - Text color for the chat header (if any).
 */
/**
 * ChatWindow component displays a list of messages and an input field for sending new messages.
 *
 * @param {Object} props - The component's props.
 * @param {Message[]} [props.messages=[]] - Array of message objects to display.
 * @param {Function} [props.onSendMessage] - Callback function triggered when a new message is submitted. Receives the message text (string).
 * @param {string} [props.inputPlaceholder] - Placeholder text for the message input field.
 * @param {boolean} [props.isLoading=false] - If true, displays a loading indicator and disables input.
 * @param {ThemeColors} [props.theme={}] - Optional theme object for customizing colors.
 * @returns {JSX.Element}
 */
export function ChatWindow({ messages, onSendMessage, inputPlaceholder, isLoading, theme }: {
    messages?: Message[];
    onSendMessage?: Function;
    inputPlaceholder?: string;
    isLoading?: boolean;
    theme?: ThemeColors;
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
export type ThemeColors = {
    /**
     * - Primary color for accents.
     */
    primary?: string;
    /**
     * - Background color for assistant messages.
     */
    assistantBubble?: string;
    /**
     * - Text color for assistant messages.
     */
    assistantText?: string;
    /**
     * - Background color for user messages.
     */
    userBubble?: string;
    /**
     * - Text color for user messages.
     */
    userText?: string;
    /**
     * - Background color for the chat window area.
     */
    chatBackground?: string;
    /**
     * - Background color for the text input field.
     */
    inputBackground?: string;
    /**
     * - Text color for the input field.
     */
    inputText?: string;
    /**
     * - Background color for the send button.
     */
    buttonBackground?: string;
    /**
     * - Text color for the send button.
     */
    buttonText?: string;
    /**
     * - Background color for the chat header (if any).
     */
    headerBackground?: string;
    /**
     * - Text color for the chat header (if any).
     */
    headerText?: string;
};
