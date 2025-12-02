"use client";

import React from 'react';
import { User } from '@/types/community';
import { Circle } from 'lucide-react';

interface UserListItemProps {
    user: User;
    onClick?: () => void;
    showStatus?: boolean;
    selected?: boolean;
}

export default function UserListItem({ user, onClick, showStatus = true, selected = false }: UserListItemProps) {
    const formatLastSeen = (date: Date) => {
        const now = new Date();
        const diff = now.getTime() - date.getTime();
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(diff / 3600000);
        const days = Math.floor(diff / 86400000);

        if (minutes < 60) return `${minutes}m ago`;
        if (hours < 24) return `${hours}h ago`;
        return `${days}d ago`;
    };

    return (
        <div
            onClick={onClick}
            className={`flex items-center gap-3 rounded-xl p-3 transition-colors ${onClick ? 'cursor-pointer hover:bg-teal-50' : ''
                } ${selected ? 'bg-teal-100' : ''}`}
        >
            <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-2xl">
                    {user.avatar}
                </div>
                {showStatus && (
                    <div className="absolute bottom-0 right-0 rounded-full bg-white p-0.5">
                        <Circle
                            className={`h-3 w-3 ${user.isOnline ? 'fill-green-500 text-green-500' : 'fill-gray-400 text-gray-400'
                                }`}
                        />
                    </div>
                )}
            </div>
            <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900 truncate">{user.name}</p>
                {showStatus && (
                    <p className="text-sm text-gray-500">
                        {user.isOnline ? 'Online' : user.lastSeen ? formatLastSeen(user.lastSeen) : 'Offline'}
                    </p>
                )}
                {user.role && (
                    <span className="inline-block mt-1 px-2 py-0.5 text-xs rounded-full bg-teal-100 text-teal-700">
                        {user.role}
                    </span>
                )}
            </div>
        </div>
    );
}
