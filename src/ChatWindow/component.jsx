import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import styles from "./styles.module.scss"
import { ChatMessage } from '../ChatMessage/index';
import { ChatInput } from '../ChatInput/index';
import { Spinner } from '../Spinner/index';

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
export function ChatWindow({ messages = [], onSendMessage, inputPlaceholder, isLoading = false, theme = {} }) {
	const messagesAreaRef = useRef(null);
	useEffect(() => {
		if (messagesAreaRef.current) {
			messagesAreaRef.current.scrollTop = messagesAreaRef.current.scrollHeight;
		}
	}, [messages]);

	const chatWindowStyle = {};
	if (theme.primary) chatWindowStyle['--rc-primary-color'] = theme.primary;
	if (theme.assistantBubble) chatWindowStyle['--rc-assistant-bubble-color'] = theme.assistantBubble;
	if (theme.assistantText) chatWindowStyle['--rc-assistant-text-color'] = theme.assistantText;
	if (theme.userBubble) chatWindowStyle['--rc-user-bubble-color'] = theme.userBubble;
	if (theme.userText) chatWindowStyle['--rc-user-text-color'] = theme.userText;
	if (theme.chatBackground) chatWindowStyle['--rc-chat-background-color'] = theme.chatBackground;
	if (theme.inputBackground) chatWindowStyle['--rc-input-background-color'] = theme.inputBackground;
	if (theme.inputText) chatWindowStyle['--rc-input-text-color'] = theme.inputText;
	if (theme.buttonBackground) chatWindowStyle['--rc-button-background-color'] = theme.buttonBackground;
	if (theme.buttonText) chatWindowStyle['--rc-button-text-color'] = theme.buttonText;
	if (theme.headerBackground) chatWindowStyle['--rc-header-background-color'] = theme.headerBackground;
	if (theme.headerText) chatWindowStyle['--rc-header-text-color'] = theme.headerText;

	return (
		<div className={classNames(styles.Reset, styles.ChatWindowContainer)} style={chatWindowStyle}>
			<div className={styles.ChatWindow}>
				<div className={styles.ChatMessagesArea} ref={messagesAreaRef}>
					{messages.map((msg, idx) => (
						<ChatMessage key={idx} message={msg} />
					))}
					{isLoading && (
						<div key="thinking-indicator" className={styles.ThinkingIndicator}>
							<Spinner /> Thinking...
						</div>
					)}
				</div>
				<ChatInput onSendMessage={onSendMessage} placeholder={inputPlaceholder} disabled={isLoading} />
			</div>
		</div>
	);
}
