"use client";

import React from 'react';
import { Message, User } from '@/types/community';
import { currentUser } from '@/data/communityMockData';

interface ChatInterfaceProps {
    messages: Message[];
    users: User[];
    chatName?: string;
    onSendMessage: (content: string) => void;
}

export default function ChatInterface({ messages, users, chatName }: ChatInterfaceProps) {
    const messagesEndRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const getUserById = (userId: string) => users.find(u => u.id === userId);

    const formatTime = (date: Date) => {
        return new Intl.DateTimeFormat('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
        }).format(date);
    };

    const formatDate = (date: Date) => {
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);

        if (date.toDateString() === today.toDateString()) {
            return 'Today';
        } else if (date.toDateString() === yesterday.toDateString()) {
            return 'Yesterday';
        } else {
            return new Intl.DateTimeFormat('en-US', {
                month: 'short',
                day: 'numeric',
            }).format(date);
        }
    };

    // Group messages by date
    const groupedMessages = messages.reduce((groups, message) => {
        const date = formatDate(message.timestamp);
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(message);
        return groups;
    }, {} as Record<string, Message[]>);

    if (messages.length === 0) {
        return (
            <div className="flex h-full items-center justify-center bg-teal-50/30">
                <div className="text-center">
                    <div className="mb-4 text-6xl">💬</div>
                    <h3 className="mb-2 text-xl font-semibold text-gray-900">No messages yet</h3>
                    <p className="text-gray-500">
                        {chatName ? `Start the conversation in ${chatName}` : 'Send a message to start chatting'}
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex h-full flex-col overflow-y-auto bg-teal-50/30 p-4 space-y-6">
            {Object.entries(groupedMessages).map(([date, dateMessages]) => (
                <div key={date}>
                    {/* Date separator */}
                    <div className="flex items-center justify-center mb-4">
                        <div className="bg-white rounded-full px-4 py-1 text-xs font-medium text-gray-500 shadow-sm">
                            {date}
                        </div>
                    </div>

                    {/* Messages for this date */}
                    <div className="space-y-4">
                        {dateMessages.map((message) => {
                            const sender = getUserById(message.senderId);
                            const isCurrentUser = message.senderId === currentUser.id;

                            return (
                                <div
                                    key={message.id}
                                    className={`flex items-start gap-3 ${isCurrentUser ? 'flex-row-reverse' : ''}`}
                                >
                                    {/* Avatar */}
                                    {!isCurrentUser && (
                                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm">
                                            {sender?.avatar || '👤'}
                                        </div>
                                    )}

                                    {/* Message bubble */}
                                    <div className={`flex flex-col ${isCurrentUser ? 'items-end' : 'items-start'} max-w-[70%]`}>
                                        {!isCurrentUser && (
                                            <span className="mb-1 text-xs font-medium text-gray-600">{sender?.name}</span>
                                        )}
                                        <div
                                            className={`rounded-2xl px-4 py-2 ${isCurrentUser
                                                    ? 'bg-teal-500 text-white'
                                                    : 'bg-white text-gray-900 shadow-sm'
                                                }`}
                                        >
                                            <p className="whitespace-pre-wrap break-words">{message.content}</p>
                                        </div>
                                        <span className="mt-1 text-xs text-gray-400">{formatTime(message.timestamp)}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
            <div ref={messagesEndRef} />
        </div>
    );
}
