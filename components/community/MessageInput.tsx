"use client";

import React from 'react';
import { Send } from 'lucide-react';

interface MessageInputProps {
    onSendMessage: (content: string) => void;
    disabled?: boolean;
}

export default function MessageInput({ onSendMessage, disabled }: MessageInputProps) {
    const [message, setMessage] = React.useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (message.trim() && !disabled) {
            onSendMessage(message.trim());
            setMessage('');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="border-t border-teal-200 bg-white p-4">
            <div className="flex items-end gap-3">
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type a message..."
                    disabled={disabled}
                    rows={1}
                    className="flex-1 resize-none rounded-full border-2 border-teal-200 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-teal-500 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                    style={{ maxHeight: '120px', minHeight: '48px' }}
                />
                <button
                    type="submit"
                    disabled={!message.trim() || disabled}
                    className="rounded-full bg-teal-500 p-3 text-white transition-colors hover:bg-teal-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    aria-label="Send message"
                >
                    <Send className="h-5 w-5" />
                </button>
            </div>
        </form>
    );
}
