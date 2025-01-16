"use client"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Settings } from 'lucide-react'
import Link from "next/link"

interface UserProfileProps {
  name: string
  email: string
}

export function UserProfile({ name, email }: UserProfileProps) {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()

  return (
    <div className="p-4 border-t flex items-center gap-3">
      <Avatar className="h-8 w-8">
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium truncate">{name}</p>
        <p className="text-xs text-muted-foreground truncate">{email}</p>
      </div>
      <Button variant="ghost" size="icon" asChild>
        <Link href="/settings">
          <Settings className="h-4 w-4" />
          <span className="sr-only">Settings</span>
        </Link>
      </Button>
    </div>
  )
}

