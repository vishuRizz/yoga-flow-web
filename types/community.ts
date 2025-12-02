// Community chat types
export interface User {
    id: string;
    name: string;
    avatar: string;
    isOnline: boolean;
    lastSeen?: Date;
    role?: 'instructor' | 'student';
}

export interface Message {
    id: string;
    senderId: string;
    content: string;
    timestamp: Date;
    chatId: string;
}

export interface Chat {
    id: string;
    type: 'direct' | 'group';
    name?: string;
    participants: string[];
    messages: Message[];
    lastMessage?: Message;
    unreadCount: number;
}

export interface Group extends Chat {
    type: 'group';
    name: string;
    description?: string;
    avatar?: string;
    admin: string;
    createdAt: Date;
}

export interface DirectMessage extends Chat {
    type: 'direct';
    otherUserId: string;
}
