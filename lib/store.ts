import { create } from 'zustand'

interface Message {
  id: string
  content: string
  role: 'user' | 'assistant'
  timestamp: Date
}

interface ChatStore {
  messages: Message[]
  addMessage: (content: string, role: 'user' | 'assistant') => void
}

export const useChatStore = create<ChatStore>((set) => ({
  messages: [],
  addMessage: (content, role) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          id: Math.random().toString(36).substring(7),
          content,
          role,
          timestamp: new Date(),
        },
      ],
    })),
}))

