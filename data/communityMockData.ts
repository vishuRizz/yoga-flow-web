import { User, Message, Chat, Group } from '@/types/community';

// Mock users - yoga instructors and students
export const mockUsers: User[] = [
    {
        id: 'user-1',
        name: 'Sarah Johnson',
        avatar: '👩‍🏫',
        isOnline: true,
        role: 'instructor',
    },
    {
        id: 'user-2',
        name: 'Michael Chen',
        avatar: '🧘‍♂️',
        isOnline: true,
        role: 'student',
    },
    {
        id: 'user-3',
        name: 'Priya Sharma',
        avatar: '👩‍💼',
        isOnline: false,
        lastSeen: new Date(Date.now() - 3600000), // 1 hour ago
        role: 'instructor',
    },
    {
        id: 'user-4',
        name: 'David Martinez',
        avatar: '🧑‍💻',
        isOnline: true,
        role: 'student',
    },
    {
        id: 'user-5',
        name: 'Emma Wilson',
        avatar: '👩‍🎓',
        isOnline: false,
        lastSeen: new Date(Date.now() - 7200000), // 2 hours ago
        role: 'student',
    },
    {
        id: 'user-6',
        name: 'Raj Patel',
        avatar: '🧘',
        isOnline: true,
        role: 'instructor',
    },
    {
        id: 'user-7',
        name: 'Lisa Anderson',
        avatar: '👩‍🦰',
        isOnline: false,
        lastSeen: new Date(Date.now() - 86400000), // 1 day ago
        role: 'student',
    },
    {
        id: 'user-8',
        name: 'You',
        avatar: '😊',
        isOnline: true,
        role: 'student',
    },
];

// Current user (for demo purposes)
export const currentUser = mockUsers[7]; // "You"

// Mock messages
const createMessage = (id: string, senderId: string, content: string, chatId: string, minutesAgo: number): Message => ({
    id,
    senderId,
    content,
    chatId,
    timestamp: new Date(Date.now() - minutesAgo * 60000),
});

// Mock groups
export const mockGroups: Group[] = [
    {
        id: 'group-1',
        type: 'group',
        name: "Beginner's Circle",
        description: 'A supportive space for yoga beginners to share experiences and ask questions',
        avatar: '🌱',
        participants: ['user-1', 'user-2', 'user-4', 'user-5', 'user-8'],
        admin: 'user-1',
        createdAt: new Date(Date.now() - 2592000000), // 30 days ago
        messages: [
            createMessage('msg-g1-1', 'user-1', 'Welcome everyone! Feel free to ask any questions about your practice.', 'group-1', 1440),
            createMessage('msg-g1-2', 'user-2', 'Thanks Sarah! I have a question about proper breathing during poses.', 'group-1', 1420),
            createMessage('msg-g1-3', 'user-1', 'Great question! Let me share some tips...', 'group-1', 1400),
            createMessage('msg-g1-4', 'user-4', 'This is so helpful! Thank you 🙏', 'group-1', 1380),
            createMessage('msg-g1-5', 'user-5', 'Can someone recommend good yoga mats for beginners?', 'group-1', 60),
            createMessage('msg-g1-6', 'user-2', 'I use the Manduka PROlite and love it!', 'group-1', 45),
        ],
        lastMessage: createMessage('msg-g1-6', 'user-2', 'I use the Manduka PROlite and love it!', 'group-1', 45),
        unreadCount: 2,
    },
    {
        id: 'group-2',
        type: 'group',
        name: 'Advanced Practitioners',
        description: 'For experienced yogis exploring advanced asanas and techniques',
        avatar: '🔥',
        participants: ['user-1', 'user-3', 'user-6', 'user-8'],
        admin: 'user-6',
        createdAt: new Date(Date.now() - 5184000000), // 60 days ago
        messages: [
            createMessage('msg-g2-1', 'user-6', 'Who wants to join a handstand practice session this weekend?', 'group-2', 180),
            createMessage('msg-g2-2', 'user-1', "I'm in! What time works for everyone?", 'group-2', 175),
            createMessage('msg-g2-3', 'user-3', 'Saturday morning would be perfect for me', 'group-2', 170),
            createMessage('msg-g2-4', 'user-6', 'Great! Let\'s do 9 AM on Saturday then.', 'group-2', 165),
        ],
        lastMessage: createMessage('msg-g2-4', 'user-6', 'Great! Let\'s do 9 AM on Saturday then.', 'group-2', 165),
        unreadCount: 0,
    },
    {
        id: 'group-3',
        type: 'group',
        name: 'Meditation & Mindfulness',
        description: 'Exploring meditation practices and mindfulness in daily life',
        avatar: '🧘‍♀️',
        participants: ['user-1', 'user-2', 'user-3', 'user-5', 'user-7', 'user-8'],
        admin: 'user-3',
        createdAt: new Date(Date.now() - 1296000000), // 15 days ago
        messages: [
            createMessage('msg-g3-1', 'user-3', 'Good morning everyone! Starting the day with gratitude 🙏', 'group-3', 300),
            createMessage('msg-g3-2', 'user-5', 'Beautiful! I just finished a 20-minute meditation session.', 'group-3', 290),
            createMessage('msg-g3-3', 'user-2', 'Does anyone have tips for staying focused during meditation?', 'group-3', 120),
            createMessage('msg-g3-4', 'user-3', 'Try focusing on your breath. When your mind wanders, gently bring it back.', 'group-3', 115),
            createMessage('msg-g3-5', 'user-7', 'I find guided meditations really helpful for staying focused!', 'group-3', 110),
        ],
        lastMessage: createMessage('msg-g3-5', 'user-7', 'I find guided meditations really helpful for staying focused!', 'group-3', 110),
        unreadCount: 1,
    },
];

// Mock direct message chats
export const mockDirectChats: Chat[] = [
    {
        id: 'dm-1',
        type: 'direct',
        participants: ['user-1', 'user-8'],
        messages: [
            createMessage('msg-dm1-1', 'user-1', 'Hi! How are you finding the classes?', 'dm-1', 720),
            createMessage('msg-dm1-2', 'user-8', "They're amazing! I'm learning so much.", 'dm-1', 715),
            createMessage('msg-dm1-3', 'user-1', "That's wonderful to hear! Keep up the great work 💪", 'dm-1', 710),
            createMessage('msg-dm1-4', 'user-8', 'Thank you! I have a question about the shoulder stand pose...', 'dm-1', 30),
            createMessage('msg-dm1-5', 'user-1', 'Of course! What would you like to know?', 'dm-1', 25),
        ],
        lastMessage: createMessage('msg-dm1-5', 'user-1', 'Of course! What would you like to know?', 'dm-1', 25),
        unreadCount: 1,
    },
    {
        id: 'dm-2',
        type: 'direct',
        participants: ['user-2', 'user-8'],
        messages: [
            createMessage('msg-dm2-1', 'user-2', 'Hey! Want to practice together sometime?', 'dm-2', 240),
            createMessage('msg-dm2-2', 'user-8', 'Absolutely! When are you free?', 'dm-2', 235),
            createMessage('msg-dm2-3', 'user-2', 'How about tomorrow evening?', 'dm-2', 230),
            createMessage('msg-dm2-4', 'user-8', 'Perfect! See you then 😊', 'dm-2', 225),
        ],
        lastMessage: createMessage('msg-dm2-4', 'user-8', 'Perfect! See you then 😊', 'dm-2', 225),
        unreadCount: 0,
    },
    {
        id: 'dm-3',
        type: 'direct',
        participants: ['user-6', 'user-8'],
        messages: [
            createMessage('msg-dm3-1', 'user-6', 'Great progress in today\'s class!', 'dm-3', 90),
            createMessage('msg-dm3-2', 'user-8', 'Thank you so much, Raj! Your guidance really helps.', 'dm-3', 85),
            createMessage('msg-dm3-3', 'user-6', 'Keep practicing and you\'ll master those inversions soon! 🙌', 'dm-3', 80),
        ],
        lastMessage: createMessage('msg-dm3-3', 'user-6', 'Keep practicing and you\'ll master those inversions soon! 🙌', 'dm-3', 80),
        unreadCount: 0,
    },
];

// Combine all chats
export const mockChats: Chat[] = [...mockDirectChats, ...mockGroups];

// Helper function to get user by ID
export const getUserById = (userId: string): User | undefined => {
    return mockUsers.find(user => user.id === userId);
};

// Helper function to get chat by ID
export const getChatById = (chatId: string): Chat | undefined => {
    return mockChats.find(chat => chat.id === chatId);
};

// Helper function to get other user in a direct chat
export const getOtherUser = (chat: Chat, currentUserId: string): User | undefined => {
    if (chat.type !== 'direct') return undefined;
    const otherUserId = chat.participants.find(id => id !== currentUserId);
    return otherUserId ? getUserById(otherUserId) : undefined;
};
