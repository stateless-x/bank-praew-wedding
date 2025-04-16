"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import { Heart, Send, Edit, Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

// Cute cartoon avatars for blessing wall
const CUTE_AVATARS = [
  "🐼",
  "🐨",
  "🐯",
  "🦊",
  "🐰",
  "🐱",
  "🐶",
  "🐻",
  "🦁",
  "🐮",
  "🐷",
  "🐸",
  "🐙",
  "🦄",
  "🦋",
  "🐢",
  "🐬",
  "🦉",
  "🦝",
  "🐿️",
]

// Sample data for messages that would normally come from a database
const INITIAL_MESSAGES = [
  {
    id: 1,
    name: "Aunt Mei",
    message: "Wishing you both a lifetime of happiness! 恭喜恭喜!",
    avatar: "🐼",
    date: "2025-05-20",
  },
  {
    id: 2,
    name: "Uncle Li",
    message: "May your marriage be blessed with love and joy. 祝福你们!",
    avatar: "🦊",
    date: "2025-05-21",
  },
  {
    id: 3,
    name: "Cousin Jia",
    message: "So happy for you both! Congratulations on your special day!",
    avatar: "🐰",
    date: "2025-05-22",
  },
]

// Function to get a random avatar
const getRandomAvatar = () => {
  const randomIndex = Math.floor(Math.random() * CUTE_AVATARS.length)
  return CUTE_AVATARS[randomIndex]
}

export default function HongbaoPage() {
  const searchParams = useSearchParams()
  const tabParam = searchParams.get("tab")

  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [messages, setMessages] = useState(INITIAL_MESSAGES)
  const [activeTab, setActiveTab] = useState(tabParam === "blessings" ? "blessings" : "send")
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [previewAvatar, setPreviewAvatar] = useState("")
  const { toast } = useToast()

  // Update active tab when URL parameter changes
  useEffect(() => {
    if (tabParam === "blessings") {
      setActiveTab("blessings")
    }
  }, [tabParam])

  const handlePreview = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !message) {
      toast({
        title: "Missing information",
        description: "Please fill in your name and message",
        variant: "destructive",
      })
      return
    }

    // Generate a random avatar for preview
    setPreviewAvatar(getRandomAvatar())

    // Show confirmation dialog
    setShowConfirmation(true)
  }

  const handleSubmit = () => {
    setIsSubmitting(true)

    // Simulate sending the blessing
    setTimeout(() => {
      // Add the new message to the list
      const newMessage = {
        id: messages.length + 1,
        name,
        message,
        avatar: previewAvatar,
        date: new Date().toISOString().split("T")[0],
      }

      setMessages([newMessage, ...messages])

      // Reset the form and close dialog
      setName("")
      setMessage("")
      setIsSubmitting(false)
      setShowConfirmation(false)

      // Show success message
      toast({
        title: "Blessing sent!",
        description: "Your message has been delivered to Praew & Bank",
        variant: "default",
      })

      // Switch to blessing wall tab to show the new message
      setActiveTab("blessings")
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#761213] via-[#761213] to-[#8a2223] pb-6" data-theme="wedding">
      {/* Floating decorations */}
      <div className="fixed top-10 left-5 text-2xl animate-float" style={{ animationDelay: "0.5s" }}>
        🌸
      </div>
      <div className="fixed top-20 right-10 text-2xl animate-float" style={{ animationDelay: "1.2s" }}>
        💕
      </div>
      <div className="fixed bottom-20 left-8 text-2xl animate-float" style={{ animationDelay: "0.8s" }}>
        🌺
      </div>
      <div className="fixed bottom-40 right-5 text-2xl animate-float" style={{ animationDelay: "1.5s" }}>
        💖
      </div>

      {/* Header */}
      <header className="pt-8 pb-6 px-4 text-center">
        <div className="flex justify-center mb-2">
          <div className="relative">
            <div className="text-4xl">🧧</div>
            <Heart className="absolute -top-2 -right-4 h-4 w-4 text-white fill-coral-light animate-pulse" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-white mb-1">Virtual Hongbao</h1>
        <p className="text-sm text-white/80 max-w-md mx-auto">
          Send your blessings and a digital red envelope to Praew & Bank
        </p>
      </header>

      {/* Main content */}
      <main className="px-4 max-w-md mx-auto">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 rounded-full p-1 bg-white/20">
            <TabsTrigger
              value="send"
              className="text-sm rounded-full text-white data-[state=active]:bg-white data-[state=active]:text-maroon"
            >
              Send Hongbao
            </TabsTrigger>
            <TabsTrigger
              value="blessings"
              className="text-sm rounded-full text-white data-[state=active]:bg-white data-[state=active]:text-maroon"
            >
              Blessing Wall
            </TabsTrigger>
          </TabsList>

          {/* Send Hongbao Tab */}
          <TabsContent value="send">
            {/* QR Code Card - SIMPLIFIED */}
            <Card className="border-white/20 border-2 rounded-xl shadow-md mb-6 overflow-hidden bg-white">
              <div className="h-2 bg-gradient-to-r from-maroon via-coral to-maroon"></div>
              <CardHeader className="bg-[#f5f3ee] pb-2">
                <CardTitle className="text-maroon text-center">Scan to Send Hongbao</CardTitle>
              </CardHeader>

              <CardContent className="pt-6 pb-4">
                <div className="relative mx-auto w-64 h-64 flex items-center justify-center">
                  {/* Simplified QR Code */}
                  <div className="w-full h-full p-4 bg-white rounded-lg shadow-sm border-2 border-[#f5f3ee]">
                    <Image
                      src="/qr-sample-current.png?height=240&width=240"
                      alt="Payment QR Code"
                      width={240}
                      height={240}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <div className="text-center mt-6 space-y-2">
                  <p className="text-sm font-medium text-maroon">Praew & Bank Wedding</p>
                  <p className="text-sm text-maroon">Account: 1234-5678-9012-3456</p>
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <Sparkles className="h-3 w-3 text-coral" />
                    <p className="text-xs text-maroon">In Thai tradition, amounts ending in 9 are considered lucky!</p>
                    <Sparkles className="h-3 w-3 text-coral" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Blessing Wall Tab */}
          <TabsContent value="blessings">
            <div className="text-center mb-4">
              <p className="text-sm text-white/80">Messages of love and good wishes from family and friends</p>
            </div>

            {/* Send Blessing Form - MOVED TO BLESSING WALL */}
            <Card className="border-white/20 border-2 rounded-xl shadow-md mb-6 overflow-hidden bg-white">
              <div className="h-2 bg-gradient-to-r from-coral via-maroon to-coral"></div>
              <CardHeader className="bg-[#f5f3ee] pb-2">
                <CardTitle className="text-maroon text-center">Leave Your Blessing</CardTitle>
              </CardHeader>

              <CardContent className="pt-4">
                <form onSubmit={handlePreview} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-maroon">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="border-[#f5f3ee] focus-visible:ring-maroon"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-maroon">
                      Your Blessing
                    </Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your blessing or congratulations..."
                      className="min-h-[100px] border-[#f5f3ee] focus-visible:ring-maroon"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-maroon hover:bg-maroon-light text-white rounded-full">
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" /> Preview & Send
                    </span>
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-4 mb-10">
              {messages.length > 0 ? (
                messages.map((msg) => (
                  <Card
                    key={msg.id}
                    className="border-0 overflow-hidden bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-0">
                      <div className="relative">
                        {/* Decorative top with gradient */}
                        <div className="h-2 bg-gradient-to-r from-maroon to-coral"></div>

                        {/* Message content */}
                        <div className="p-4">
                          <div className="flex items-start gap-3 mb-3">
                            <div className="flex-shrink-0 w-12 h-12 bg-[#f5f3ee] rounded-full flex items-center justify-center text-2xl shadow-sm border-2 border-[#f5f3ee]">
                              {msg.avatar}
                            </div>
                            <div className="flex-1 pt-1">
                              <h3 className="font-medium text-maroon">{msg.name}</h3>
                              <p className="text-xs text-maroon mt-0.5">{new Date(msg.date).toLocaleDateString()}</p>
                            </div>
                          </div>

                          <div className="relative pl-14">
                            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#f5f3ee]"></div>
                            <div className="bg-[#f5f3ee]/50 p-3 rounded-lg border border-[#f5f3ee]/50 relative">
                              {/* Speech bubble pointer */}
                              <div className="absolute -left-2 top-3 w-0 h-0 border-t-8 border-r-8 border-b-8 border-transparent border-r-[#f5f3ee]/50"></div>
                              <p className="text-sm text-maroon leading-relaxed">{msg.message}</p>
                            </div>
                          </div>

                          <div className="mt-2 pl-14 flex justify-end">
                            <div className="flex items-center gap-1">
                              <Heart className="h-3 w-3 text-maroon fill-maroon" />
                              <Heart className="h-3 w-3 text-coral fill-coral-light" />
                              <Heart className="h-3 w-3 text-maroon fill-maroon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-10 bg-white/20 rounded-xl">
                  <p className="text-white">No messages found</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="sm:max-w-md bg-white border-2 border-[#f5f3ee] rounded-xl">
          <DialogHeader>
            <DialogTitle className="text-center text-maroon">Confirm Your Blessing</DialogTitle>
            <DialogDescription className="text-center text-maroon/70">
              Preview how your message will appear on the blessing wall
            </DialogDescription>
          </DialogHeader>

          {/* Message Preview */}
          <div className="py-2">
            <Card className="border-0 overflow-hidden bg-white/80 backdrop-blur-sm shadow-md">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="h-2 bg-gradient-to-r from-maroon to-coral"></div>

                  <div className="p-4">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#f5f3ee] rounded-full flex items-center justify-center text-2xl shadow-sm border-2 border-[#f5f3ee]">
                        {previewAvatar}
                      </div>
                      <div className="flex-1 pt-1">
                        <h3 className="font-medium text-maroon">{name}</h3>
                        <p className="text-xs text-maroon mt-0.5">{new Date().toLocaleDateString()}</p>
                      </div>
                    </div>

                    <div className="relative pl-14">
                      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#f5f3ee]"></div>
                      <div className="bg-[#f5f3ee]/50 p-3 rounded-lg border border-[#f5f3ee]/50 relative">
                        <div className="absolute -left-2 top-3 w-0 h-0 border-t-8 border-r-8 border-b-8 border-transparent border-r-[#f5f3ee]/50"></div>
                        <p className="text-sm text-maroon leading-relaxed">{message}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Dialog footer */}
          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button
              type="button"
              variant="outline"
              className="flex-1 border-[#f5f3ee] text-maroon hover:bg-[#f5f3ee] rounded-full"
              onClick={() => setShowConfirmation(false)}
            >
              <Edit className="mr-2 h-4 w-4" /> Edit Message
            </Button>
            <Button
              type="button"
              className="flex-1 bg-maroon hover:bg-maroon-light text-white rounded-full"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center">
                  <Check className="mr-2 h-4 w-4" /> Confirm & Send
                </span>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
