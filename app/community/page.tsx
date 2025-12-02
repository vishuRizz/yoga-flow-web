"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GroupSidebar from '@/components/community/GroupSidebar';
import ChatInterface from '@/components/community/ChatInterface';
import MembersSidebar from '@/components/community/MembersSidebar';
import MessageInput from '@/components/community/MessageInput';
import CreateGroupModal from '@/components/community/CreateGroupModal';
import { Chat, Message, Group } from '@/types/community';
import {
    mockChats,
    mockUsers,
    currentUser,
    getChatById,
} from '@/data/communityMockData';
import { Menu, X } from 'lucide-react';

export default function CommunityPage() {
    const [chats, setChats] = React.useState<Chat[]>(mockChats);
    const [selectedChatId, setSelectedChatId] = React.useState<string | null>(null);
    const [isCreateGroupModalOpen, setIsCreateGroupModalOpen] = React.useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    const selectedChat = selectedChatId ? chats.find(c => c.id === selectedChatId) || null : null;

    const handleSendMessage = (content: string) => {
        if (!selectedChatId) return;

        const newMessage: Message = {
            id: `msg-${Date.now()}`,
            senderId: currentUser.id,
            content,
            timestamp: new Date(),
            chatId: selectedChatId,
        };

        setChats((prevChats) =>
            prevChats.map((chat) => {
                if (chat.id === selectedChatId) {
                    return {
                        ...chat,
                        messages: [...chat.messages, newMessage],
                        lastMessage: newMessage,
                    };
                }
                return chat;
            })
        );
    };

    const handleCreateGroup = (name: string, description: string, memberIds: string[]) => {
        const newGroup: Group = {
            id: `group-${Date.now()}`,
            type: 'group',
            name,
            description,
            avatar: '👥',
            participants: memberIds,
            admin: currentUser.id,
            createdAt: new Date(),
            messages: [],
            unreadCount: 0,
        };

        setChats((prevChats) => [newGroup, ...prevChats]);
        setSelectedChatId(newGroup.id);
    };

    const handleSelectChat = (chatId: string) => {
        setSelectedChatId(chatId);
        setIsSidebarOpen(false);

        // Mark as read
        setChats((prevChats) =>
            prevChats.map((chat) => {
                if (chat.id === chatId) {
                    return { ...chat, unreadCount: 0 };
                }
                return chat;
            })
        );
    };

    const groups = chats.filter((chat) => chat.type === 'group') as Group[];

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gradient-to-b from-teal-50 via-cyan-50 to-teal-100 pt-24 md:pt-28">
                <div className="mx-auto max-w-[1800px] px-4 py-8">
                    {/* Page header */}
                    <div className="mb-6 text-center">
                        <h1
                            className="mb-2 text-4xl font-bold text-gray-900 md:text-5xl"
                            style={{ fontFamily: 'serif' }}
                        >
                            Community
                        </h1>
                        <p className="text-lg text-gray-600" style={{ fontFamily: 'serif' }}>
                            Connect with fellow yogis, share experiences, and grow together
                        </p>
                    </div>

                    {/* Chat container */}
                    <div className="mx-auto max-w-7xl">
                        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
                            <div className="flex h-[calc(100vh-280px)] min-h-[600px]">
                                {/* Mobile sidebar toggle */}
                                <button
                                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                                    className="fixed bottom-6 right-6 z-50 rounded-full bg-teal-500 p-4 text-white shadow-lg transition-colors hover:bg-teal-600 lg:hidden"
                                    aria-label="Toggle sidebar"
                                >
                                    {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                                </button>

                                {/* Left sidebar - Groups/Chats list */}
                                <div
                                    className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                                        } fixed inset-y-0 left-0 z-40 w-80 transition-transform duration-300 lg:relative lg:translate-x-0 lg:w-80`}
                                >
                                    <GroupSidebar
                                        chats={chats}
                                        groups={groups}
                                        users={mockUsers}
                                        selectedChatId={selectedChatId}
                                        onSelectChat={handleSelectChat}
                                        onCreateGroup={() => setIsCreateGroupModalOpen(true)}
                                    />
                                </div>

                                {/* Overlay for mobile */}
                                {isSidebarOpen && (
                                    <div
                                        className="fixed inset-0 z-30 bg-black/50 lg:hidden"
                                        onClick={() => setIsSidebarOpen(false)}
                                    />
                                )}

                                {/* Main chat area */}
                                <div className="flex flex-1 flex-col">
                                    {selectedChat ? (
                                        <>
                                            {/* Chat header */}
                                            <div className="border-b border-teal-200 bg-white px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-xl">
                                                        {selectedChat.type === 'group'
                                                            ? (selectedChat as Group).avatar || '👥'
                                                            : mockUsers.find(
                                                                (u) =>
                                                                    selectedChat.participants.includes(u.id) &&
                                                                    u.id !== currentUser.id
                                                            )?.avatar || '👤'}
                                                    </div>
                                                    <div>
                                                        <h2 className="font-semibold text-gray-900">
                                                            {selectedChat.type === 'group'
                                                                ? (selectedChat as Group).name
                                                                : mockUsers.find(
                                                                    (u) =>
                                                                        selectedChat.participants.includes(u.id) &&
                                                                        u.id !== currentUser.id
                                                                )?.name || 'Unknown User'}
                                                        </h2>
                                                        {selectedChat.type === 'group' && (
                                                            <p className="text-sm text-gray-500">
                                                                {selectedChat.participants.length} members
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Messages */}
                                            <div className="flex-1 overflow-hidden">
                                                <ChatInterface
                                                    messages={selectedChat.messages}
                                                    users={mockUsers}
                                                    chatName={
                                                        selectedChat.type === 'group'
                                                            ? (selectedChat as Group).name
                                                            : undefined
                                                    }
                                                    onSendMessage={handleSendMessage}
                                                />
                                            </div>

                                            {/* Message input */}
                                            <MessageInput onSendMessage={handleSendMessage} />
                                        </>
                                    ) : (
                                        <div className="flex h-full items-center justify-center bg-teal-50/30">
                                            <div className="text-center">
                                                <div className="mb-4 text-6xl">💬</div>
                                                <h3 className="mb-2 text-2xl font-semibold text-gray-900">
                                                    Welcome to Community Chat
                                                </h3>
                                                <p className="text-gray-500">
                                                    Select a conversation to start chatting
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Right sidebar - Members (desktop only) */}
                                <MembersSidebar
                                    chat={selectedChat?.type === 'group' ? (selectedChat as Group) : null}
                                    users={mockUsers}
                                    currentUserId={currentUser.id}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Info cards */}
                    <div className="mx-auto mt-8 grid max-w-7xl gap-6 md:grid-cols-3">
                        <div className="rounded-2xl bg-white p-6 shadow-lg">
                            <div className="mb-3 text-3xl">🌟</div>
                            <h3 className="mb-2 text-lg font-semibold text-gray-900">Share Your Journey</h3>
                            <p className="text-sm text-gray-600">
                                Connect with fellow practitioners and share your yoga experiences
                            </p>
                        </div>
                        <div className="rounded-2xl bg-white p-6 shadow-lg">
                            <div className="mb-3 text-3xl">👥</div>
                            <h3 className="mb-2 text-lg font-semibold text-gray-900">Join Groups</h3>
                            <p className="text-sm text-gray-600">
                                Find your tribe in specialized groups for different practices
                            </p>
                        </div>
                        <div className="rounded-2xl bg-white p-6 shadow-lg">
                            <div className="mb-3 text-3xl">💡</div>
                            <h3 className="mb-2 text-lg font-semibold text-gray-900">Learn Together</h3>
                            <p className="text-sm text-gray-600">
                                Ask questions, share tips, and grow your practice together
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Create group modal */}
            <CreateGroupModal
                isOpen={isCreateGroupModalOpen}
                onClose={() => setIsCreateGroupModalOpen(false)}
                onCreateGroup={handleCreateGroup}
                availableUsers={mockUsers}
                currentUserId={currentUser.id}
            />

            <Footer />
        </>
    );
}
