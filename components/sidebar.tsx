"use client"

import { Button } from "@/components/ui/button"
import { ScrollText, Plus, DollarSign, Paintbrush, FileText, MessageSquare } from 'lucide-react'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { UserProfile } from "./user-profile"

export function Sidebar() {
  const pathname = usePathname()

  const navigation = [
    { name: "New Project", href: "/new-project", icon: Plus },
    { name: "Pricing Section", href: "/pricing", icon: DollarSign },
    { name: "Design Guidelines", href: "/guidelines", icon: Paintbrush },
    { name: "Design Brief", href: "/brief", icon: FileText },
    { name: "Marketing", href: "/marketing", icon: ScrollText },
  ]

  return (
    <div className="w-64 border-r bg-gray-50/40 flex flex-col">
      <div className="p-4">
        <h2 className="font-semibold px-2 mb-2">Sand</h2>
        <Button className="w-full justify-start" variant="default">
          <MessageSquare className="mr-2 h-4 w-4" />
          New Chat
        </Button>
      </div>
      
      <div className="px-2 py-2 flex-1">
        <h3 className="px-4 text-sm font-medium mb-2">Workspace</h3>
        <nav className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2 text-sm rounded-md hover:bg-gray-100 ${
                  pathname === item.href ? "bg-gray-100" : ""
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.name}
              </Link>
            )
          })}
        </nav>
      </div>

      <UserProfile 
        name="Elizabeth Keen"
        email="elizabeth@example.com"
      />
    </div>
  )
}

