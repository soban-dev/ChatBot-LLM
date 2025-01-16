"use client"

import { useChatStore } from "@/lib/store"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function ChatMessages() {
  const { messages } = useChatStore()

  return (
    <div className="space-y-4 mt-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex gap-3 ${
            message.role === 'assistant' ? 'flex-row' : 'flex-row-reverse'
          }`}
        >
          <Avatar className="h-8 w-8">
            <AvatarFallback>
              {message.role === 'assistant' ? 'AI' : 'ME'}
            </AvatarFallback>
          </Avatar>
          <div
            className={`rounded-lg px-4 py-2 max-w-[80%] ${
              message.role === 'assistant'
                ? 'bg-muted'
                : 'bg-primary text-primary-foreground'
            }`}
          >
            {message.content}
          </div>
        </div>
      ))}
    </div>
  )
}

