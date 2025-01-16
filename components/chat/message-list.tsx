"use client";

import { useEffect, useRef } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useChatStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export function MessageList() {
  const { messages } = useChatStore(); // Access messages from the store
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length > 0) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Conditionally render if there are messages
  if (messages.length === 0) {
    return null; 
  }

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 ">
      {messages.map((message) => (
        <div
          key={message.id}
          className={cn(
            "flex gap-3",
            message.role === "user" ? "flex-row-reverse" : "flex-row"
          )}
        >
          <Avatar>
            <AvatarFallback>
              {message.role === "assistant" ? "AI" : "ME"}
            </AvatarFallback>
          </Avatar>
          <div
            className={cn(
              "rounded-lg px-4 py-2 max-w-[80%]",
              message.role === "assistant"
                ? "bg-muted"
                : "bg-primary text-primary-foreground"
            )}
          >
            {message.content}
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}
