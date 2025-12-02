"use client";

import React from 'react';
import { User, Group } from '@/types/community';
import UserListItem from './UserListItem';
import { Users as UsersIcon, Crown, UserPlus } from 'lucide-react';

interface MembersSidebarProps {
    chat: Group | null;
    users: User[];
    currentUserId: string;
}

export default function MembersSidebar({ chat, users, currentUserId }: MembersSidebarProps) {
    if (!chat || chat.type !== 'group') {
        return (
            <div className="hidden lg:flex h-full flex-col border-l border-teal-200 bg-white w-64">
                <div className="flex h-full items-center justify-center p-8 text-center">
                    <div>
                        <div className="mb-2 text-4xl">👥</div>
                        <p className="text-sm text-gray-500">Select a group to view members</p>
                    </div>
                </div>
            </div>
        );
    }

    const members = users.filter((user) => chat.participants.includes(user.id));
    const isAdmin = chat.admin === currentUserId;

    return (
        <div className="hidden lg:flex h-full flex-col border-l border-teal-200 bg-white w-64">
            {/* Header */}
            <div className="border-b border-teal-200 p-4">
                <div className="mb-3 flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">Group Info</h3>
                </div>

                {/* Group details */}
                <div className="mb-4 text-center">
                    <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-4xl">
                        {chat.avatar || '👥'}
                    </div>
                    <h2 className="font-bold text-gray-900">{chat.name}</h2>
                    {chat.description && (
                        <p className="mt-1 text-sm text-gray-500">{chat.description}</p>
                    )}
                </div>

                {/* Members count */}
                <div className="flex items-center justify-center gap-2 rounded-lg bg-teal-50 px-3 py-2 text-sm">
                    <UsersIcon className="h-4 w-4 text-teal-600" />
                    <span className="font-medium text-teal-900">{members.length} members</span>
                </div>

                {isAdmin && (
                    <button className="mt-3 w-full rounded-full bg-teal-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-teal-600 flex items-center justify-center gap-2">
                        <UserPlus className="h-4 w-4" />
                        Add Members
                    </button>
                )}
            </div>

            {/* Members list */}
            <div className="flex-1 overflow-y-auto p-4">
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Members
                </h4>
                <div className="space-y-2">
                    {members.map((member) => (
                        <div key={member.id} className="relative">
                            <UserListItem user={member} showStatus={true} />
                            {member.id === chat.admin && (
                                <div className="absolute right-2 top-2">
                                    <div className="rounded-full bg-yellow-100 p-1" title="Admin">
                                        <Crown className="h-3 w-3 text-yellow-600" />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
