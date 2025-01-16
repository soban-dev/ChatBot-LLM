"use client";

import { MessageList } from "./message-list";
import { useChatStore } from "@/lib/store";

export function ChatPanel() {
  const { messages } = useChatStore();

  return (
    <>
    <div className="flex flex-col">
      {messages.length > 0 ? (
        <div className="h-[360px]">
        <MessageList />
        </div>
      ) : (
        <div>
        </div>
      )}
      
    </div>
    
  </>
  );
}
