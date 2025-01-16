// "use client"
import { ReactNode } from "react"
import { Sidebar } from "./sidebar"
import { Header } from "./header"
import { Button } from "@/components/ui/button"
import { SearchBar } from "../components/search-bar";

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 flex flex-col ">
        <Header />
        <div className="flex-1 overflow-auto p-8">
          {children}
        </div>
        <div className="p-4 w-[80%] mx-auto">
          <SearchBar />
          <div className="mt-6 flex items-center justify-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="text-xs text-muted-foreground"
            >
              Identify similar images online
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-xs text-muted-foreground"
            >
              Summarize this transcript
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-xs text-muted-foreground"
            >
              Analyze the contents of this image
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

