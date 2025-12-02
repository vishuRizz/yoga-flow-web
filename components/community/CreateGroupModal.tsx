"use client";

import React from 'react';
import { User } from '@/types/community';
import { X, Check } from 'lucide-react';
import UserListItem from './UserListItem';

interface CreateGroupModalProps {
    isOpen: boolean;
    onClose: () => void;
    onCreateGroup: (name: string, description: string, memberIds: string[]) => void;
    availableUsers: User[];
    currentUserId: string;
}

export default function CreateGroupModal({
    isOpen,
    onClose,
    onCreateGroup,
    availableUsers,
    currentUserId,
}: CreateGroupModalProps) {
    const [groupName, setGroupName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [selectedMembers, setSelectedMembers] = React.useState<string[]>([currentUserId]);
    const [searchQuery, setSearchQuery] = React.useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (groupName.trim() && selectedMembers.length >= 2) {
            onCreateGroup(groupName.trim(), description.trim(), selectedMembers);
            // Reset form
            setGroupName('');
            setDescription('');
            setSelectedMembers([currentUserId]);
            setSearchQuery('');
            onClose();
        }
    };

    const toggleMember = (userId: string) => {
        if (userId === currentUserId) return; // Can't deselect yourself

        setSelectedMembers((prev) =>
            prev.includes(userId)
                ? prev.filter((id) => id !== userId)
                : [...prev, userId]
        );
    };

    const filteredUsers = availableUsers.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="relative w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-gray-400 transition-colors hover:text-gray-600"
                    aria-label="Close"
                >
                    <X className="h-6 w-6" />
                </button>

                <h2 className="mb-6 text-3xl font-bold text-gray-900" style={{ fontFamily: 'serif' }}>
                    Create New Group
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Group name */}
                    <div>
                        <label htmlFor="groupName" className="mb-2 block text-sm font-medium text-gray-700">
                            Group Name *
                        </label>
                        <input
                            id="groupName"
                            type="text"
                            value={groupName}
                            onChange={(e) => setGroupName(e.target.value)}
                            placeholder="e.g., Morning Yoga Squad"
                            required
                            className="w-full rounded-lg border-2 border-teal-200 px-4 py-3 focus:border-teal-500 focus:outline-none"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label htmlFor="description" className="mb-2 block text-sm font-medium text-gray-700">
                            Description (Optional)
                        </label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="What's this group about?"
                            rows={3}
                            className="w-full rounded-lg border-2 border-teal-200 px-4 py-3 focus:border-teal-500 focus:outline-none resize-none"
                        />
                    </div>

                    {/* Member selection */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Add Members * (Selected: {selectedMembers.length})
                        </label>

                        {/* Search */}
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search users..."
                            className="mb-3 w-full rounded-lg border-2 border-teal-200 px-4 py-2 text-sm focus:border-teal-500 focus:outline-none"
                        />

                        {/* User list */}
                        <div className="max-h-64 space-y-2 overflow-y-auto rounded-lg border-2 border-teal-200 p-3">
                            {filteredUsers.map((user) => {
                                const isSelected = selectedMembers.includes(user.id);
                                const isCurrentUser = user.id === currentUserId;

                                return (
                                    <button
                                        key={user.id}
                                        type="button"
                                        onClick={() => toggleMember(user.id)}
                                        disabled={isCurrentUser}
                                        className={`w-full rounded-lg transition-colors ${isSelected ? 'bg-teal-100' : 'hover:bg-teal-50'
                                            } ${isCurrentUser ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    >
                                        <div className="flex items-center justify-between p-2">
                                            <UserListItem user={user} showStatus={false} />
                                            {isSelected && (
                                                <div className="flex-shrink-0 rounded-full bg-teal-500 p-1">
                                                    <Check className="h-4 w-4 text-white" />
                                                </div>
                                            )}
                                            {isCurrentUser && (
                                                <span className="text-xs text-gray-500">(You)</span>
                                            )}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {selectedMembers.length < 2 && (
                            <p className="mt-2 text-sm text-red-500">
                                Please select at least one other member
                            </p>
                        )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 rounded-full border-2 border-teal-200 px-6 py-3 font-medium text-teal-700 transition-colors hover:bg-teal-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={!groupName.trim() || selectedMembers.length < 2}
                            className="flex-1 rounded-full bg-teal-500 px-6 py-3 font-medium text-white transition-colors hover:bg-teal-600 disabled:cursor-not-allowed disabled:bg-gray-300"
                        >
                            Create Group
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
