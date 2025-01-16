import { Card, CardContent } from "@/components/ui/card"
import { Layout } from "@/components/layout"
import { ChatPanel } from "@/components/chat/chat-panel"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SearchBar } from "../components/search-bar";




export default function Home() {
  const features = [
    {
      title: "Upload images",
      description: "Upload images for quick processing",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cGaYuoBSXDxruHqhjKepjW3Gj1X7Lw.png",
    },
    {
      title: "Generate images",
      description: "Create custom AI generated images from your ideas",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cGaYuoBSXDxruHqhjKepjW3Gj1X7Lw.png",
    },
    {
      title: "Upload files",
      description: "Easily manage and process various file types",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cGaYuoBSXDxruHqhjKepjW3Gj1X7Lw.png",
    },
    {
      title: "Voice Memo",
      description: "Upload or record voice memo to generate ideas",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cGaYuoBSXDxruHqhjKepjW3Gj1X7Lw.png",
    },
  ]

  return (
    <>
    <Layout>
      <div className="max-w-4xl mx-auto w-full">
        <div className="mb-8">
          <h1 className="text-4xl font-semibold mb-2">Hi, Elizabeth!</h1>
          <p className="text-xl text-muted-foreground mb-6">
            How can I assist you today?
          </p>
          
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border border-muted/40 shadow-sm hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-muted/10">
                    <Image
                      src={feature.icon || "/placeholder.svg"}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        
        </div>
        <div >
        <ChatPanel />
        </div>
        
      </div>
      {/* <div className="p-4 fixed bg-red-400 w-full bottom-3">
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
      </div> */}
    </Layout>
    
  </>
  )
}

