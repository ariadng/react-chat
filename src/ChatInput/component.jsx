import React, { useState } from 'react';
import { Spinner } from '../Spinner/index';
import classNames from 'classnames';
import styles from "./styles.module.scss";

/**
 * ChatInput component provides a form with a text input and a send button for chat.
 *
 * @param {Object} props - The component's props.
 * @param {Function} [props.onSendMessage] - Callback function triggered when the message is sent. Receives the input text (string).
 * @param {string} [props.placeholder="Type a message..."] - Placeholder text for the input field.
 * @param {boolean} [props.disabled=false] - If true, disables the input and send button, and shows a spinner on the button.
 * @returns {JSX.Element}
 */
export function ChatInput({
	onSendMessage,
	placeholder = "Type a message...",
	disabled = false
}) {

	const [ inputValue, setInputValue ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue.trim()) {
			if (onSendMessage) {
				onSendMessage(inputValue);
			}
			setInputValue('');
		}
	};

	return (
		<form className={styles.ChatInputForm} onSubmit={handleSubmit}>

			<input
				type="text"
				className={styles.ChatInput}
				disabled={disabled}
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				placeholder={placeholder}
				aria-busy={disabled}
			/>

			<button
				type="submit"
				className={classNames(styles.SendButton)}
				disabled={disabled}
			>
				{disabled ? <Spinner /> : 'Send'}
			</button>
			
		</form>
	);
}
