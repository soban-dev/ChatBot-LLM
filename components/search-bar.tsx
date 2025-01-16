"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link, Library, Wand2, X, Paperclip, ImageIcon, FileText, Mic } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { useChatStore } from "@/lib/store"
const DUMMY_RESPONSES: Record<string, string> = {
  "hi": "Hello! How can I assist you today?",
  "hello": "Hi there! What can I help you with?",
  "help": "I'm here to help! What would you like to know?",
  "default": "I understand. Please tell me more about what you need."
}

export function SearchBar() {
  const [input, setInput] = useState("")
  const { addMessage } = useChatStore()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    addMessage(input, 'user')

    // Get response
    const response = DUMMY_RESPONSES[input.toLowerCase()] || DUMMY_RESPONSES.default
    
    // Simulate API delay
    setTimeout(() => {
      addMessage(response, 'assistant')
    }, 500)

    setInput("")
  }

  return (
    <form onSubmit={handleSubmit} className="relative rounded-xl border shadow-sm">
      <div className="px-4 py-3">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="success" className="h-5 rounded-md px-1.5 text-xs font-medium">
            New
          </Badge>
          <span className="text-sm text-muted-foreground">
            Bring your docs, code, and files to collaborate with Sand and your team.
          </span>
          <Button type="button" variant="ghost" size="icon" className="ml-auto h-6 w-6">
            <span className="sr-only">Dismiss</span>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="relative ">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            className="border-0 shadow-none focus-visible:ring-0 pr-32 px-1"
          />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <Button type="button" variant="ghost" size="icon" className="h-8 w-8">
              <Paperclip className="h-4 w-4" />
            </Button>
            <Button type="button" variant="ghost" size="icon" className="h-8 w-8">
              <ImageIcon className="h-4 w-4" />
            </Button>
            <Button type="button" variant="ghost" size="icon" className="h-8 w-8">
              <FileText className="h-4 w-4" />
            </Button>
            <Button type="button" variant="ghost" size="icon" className="h-8 w-8">
              <Mic className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="border-t px-4 py-2 flex items-center gap-4">
        <Button type="button" variant="ghost" size="sm" className="text-muted-foreground">
          <Library className="mr-2 h-4 w-4" />
          Prompt Library
        </Button>
        <Button type="button" variant="ghost" size="sm" className="text-muted-foreground">
          <Wand2 className="mr-2 h-4 w-4" />
          Improve Prompt
        </Button>
      </div>
    </form>
  )
}

