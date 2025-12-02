"use client";

import React from 'react';
import { Chat, User, Group } from '@/types/community';
import { getOtherUser, getUserById, currentUser } from '@/data/communityMockData';
import { MessageCircle, Users, Search, Plus } from 'lucide-react';

interface GroupSidebarProps {
    chats: Chat[];
    groups: Group[];
    users: User[];
    selectedChatId: string | null;
    onSelectChat: (chatId: string) => void;
    onCreateGroup: () => void;
}

export default function GroupSidebar({
    chats,
    groups,
    users,
    selectedChatId,
    onSelectChat,
    onCreateGroup,
}: GroupSidebarProps) {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [activeTab, setActiveTab] = React.useState<'all' | 'direct' | 'groups'>('all');

    const formatTime = (date: Date) => {
        const now = new Date();
        const diff = now.getTime() - date.getTime();
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(diff / 3600000);
        const days = Math.floor(diff / 86400000);

        if (minutes < 60) return `${minutes}m`;
        if (hours < 24) return `${hours}h`;
        if (days < 7) return `${days}d`;
        return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(date);
    };

    const getChatName = (chat: Chat): string => {
        if (chat.type === 'group') {
            return (chat as Group).name;
        }
        const otherUser = getOtherUser(chat, currentUser.id);
        return otherUser?.name || 'Unknown User';
    };

    const getChatAvatar = (chat: Chat): string => {
        if (chat.type === 'group') {
            return (chat as Group).avatar || '👥';
        }
        const otherUser = getOtherUser(chat, currentUser.id);
        return otherUser?.avatar || '👤';
    };

    const filteredChats = chats
        .filter((chat) => {
            if (activeTab === 'direct' && chat.type !== 'direct') return false;
            if (activeTab === 'groups' && chat.type !== 'group') return false;

            const chatName = getChatName(chat).toLowerCase();
            return chatName.includes(searchQuery.toLowerCase());
        })
        .sort((a, b) => {
            const aTime = a.lastMessage?.timestamp.getTime() || 0;
            const bTime = b.lastMessage?.timestamp.getTime() || 0;
            return bTime - aTime;
        });

    return (
        <div className="flex h-full flex-col border-r border-teal-200 bg-white">
            {/* Header */}
            <div className="border-b border-teal-200 p-4">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-gray-900">Messages</h2>
                    <button
                        onClick={onCreateGroup}
                        className="rounded-full bg-teal-500 p-2 text-white transition-colors hover:bg-teal-600"
                        aria-label="Create group"
                    >
                        <Plus className="h-5 w-5" />
                    </button>
                </div>

                {/* Search */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search conversations..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full rounded-full border-2 border-teal-200 py-2 pl-10 pr-4 text-sm focus:border-teal-500 focus:outline-none"
                    />
                </div>

                {/* Tabs */}
                <div className="mt-4 flex gap-2">
                    {(['all', 'direct', 'groups'] as const).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${activeTab === tab
                                    ? 'bg-teal-500 text-white'
                                    : 'bg-teal-50 text-teal-700 hover:bg-teal-100'
                                }`}
                        >
                            {tab === 'all' ? 'All' : tab === 'direct' ? 'Direct' : 'Groups'}
                        </button>
                    ))}
                </div>
            </div>

            {/* Chat list */}
            <div className="flex-1 overflow-y-auto">
                {filteredChats.length === 0 ? (
                    <div className="flex h-full items-center justify-center p-8 text-center">
                        <div>
                            <div className="mb-2 text-4xl">💬</div>
                            <p className="text-sm text-gray-500">No conversations found</p>
                        </div>
                    </div>
                ) : (
                    <div className="divide-y divide-teal-100">
                        {filteredChats.map((chat) => {
                            const isSelected = chat.id === selectedChatId;
                            const chatName = getChatName(chat);
                            const chatAvatar = getChatAvatar(chat);
                            const lastMessage = chat.lastMessage;

                            return (
                                <button
                                    key={chat.id}
                                    onClick={() => onSelectChat(chat.id)}
                                    className={`w-full p-4 text-left transition-colors hover:bg-teal-50 ${isSelected ? 'bg-teal-100' : ''
                                        }`}
                                >
                                    <div className="flex items-start gap-3">
                                        {/* Avatar */}
                                        <div className="relative flex-shrink-0">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-2xl">
                                                {chatAvatar}
                                            </div>
                                            {chat.unreadCount > 0 && (
                                                <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-teal-500 text-xs font-bold text-white">
                                                    {chat.unreadCount}
                                                </div>
                                            )}
                                        </div>

                                        {/* Chat info */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-baseline justify-between gap-2 mb-1">
                                                <h3 className="font-semibold text-gray-900 truncate">{chatName}</h3>
                                                {lastMessage && (
                                                    <span className="text-xs text-gray-400 flex-shrink-0">
                                                        {formatTime(lastMessage.timestamp)}
                                                    </span>
                                                )}
                                            </div>
                                            {lastMessage && (
                                                <p className="text-sm text-gray-500 truncate">
                                                    {lastMessage.senderId === currentUser.id ? 'You: ' : ''}
                                                    {lastMessage.content}
                                                </p>
                                            )}
                                            {chat.type === 'group' && (
                                                <div className="mt-1 flex items-center gap-1 text-xs text-gray-400">
                                                    <Users className="h-3 w-3" />
                                                    <span>{chat.participants.length} members</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
