"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Heart, Send, Edit, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { useTranslation } from 'react-i18next'
import { FloatingDecorations } from '@/components/floating-decorations'
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
  "🐼", "🐨", "🐯", "🦊", "🐰", "🐱", "🐶", "🐻", "🦁", "🐮",
  "🐷", "🐸", "🐙", "🦄", "🦋", "🐢", "🐬", "🦉", "🦝", "🐿️",
]

// Function to get a random avatar
const getRandomAvatar = () => {
  const randomIndex = Math.floor(Math.random() * CUTE_AVATARS.length)
  return CUTE_AVATARS[randomIndex]
}

interface Message {
  id: string
  name: string
  message: string
  avatar: string
  createdAt: Date
  updatedAt: Date
}

export default function BlessingsPage() {
  const { t } = useTranslation();
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [previewAvatar, setPreviewAvatar] = useState("")
  const { toast } = useToast()
  
  // Fetch messages from MongoDB
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('/api/messages')
        const data = await response.json()
        setMessages(data)
      } catch (error) {
        console.error('Error fetching messages:', error)
        toast({
          title: t('error'),
          description: t('failedToLoadMessages'),
          variant: "destructive",
        })
      }
    }

    fetchMessages()
  }, [toast, t])

  const handlePreview = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !message) {
      toast({
        title: t('missingInformation'),
        description: t('pleaseFillNameAndMessage'),
        variant: "destructive",
      })
      return
    }

    // Generate a random avatar for preview
    setPreviewAvatar(getRandomAvatar())

    // Show confirmation dialog
    setShowConfirmation(true)
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          message,
          avatar: previewAvatar,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      const newMessage = await response.json()
      setMessages([newMessage, ...messages])

      // Reset the form and close dialog
      setName("")
      setMessage("")
      setIsSubmitting(false)
      setShowConfirmation(false)

      // Show success message
      toast({
        title: t('blessingSent'),
        description: t('messageDeliveredToPraewBank'),
        variant: "default",
      })
    } catch (error) {
      console.error('Error sending message:', error)
      toast({
        title: t('error'),
        description: t('failedToSendMessage'),
        variant: "destructive",
      })
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#761213] via-[#761213] to-[#8a2223] pb-6" data-theme="wedding" suppressHydrationWarning>
      {/* Floating decorations */}
      <FloatingDecorations />

      {/* Header */}
      <header className="pt-8 pb-6 px-4 text-center">
        <div className="flex justify-center mb-2">
          <div className="relative">
            <div className="text-4xl">💕</div>
            <Heart className="absolute -top-2 -right-4 h-4 w-4 text-white fill-coral-light animate-pulse" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-white mb-1">{t('blessingWall')}</h1>
        <p className="text-md text-white/80 max-w-md mx-auto text-center">
          {t('shareYourLoveAndWishes')}
        </p>
      </header>

      {/* Main content */}
      <main className="px-4 pb-8 max-w-md mx-auto">
        {/* Send Blessing Form */}
        <Card className="border-white/20 border-2 rounded-xl shadow-md mb-6 overflow-hidden bg-white">
          <div className="h-2 bg-gradient-to-r from-coral via-maroon to-coral"></div>

          <CardContent className="pt-4">
            <form onSubmit={handlePreview} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-maroon">
                  {t('yourName')}
                </Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t('enterYourName')}
                  className="border-[#f5f3ee] focus-visible:ring-maroon"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-maroon">
                  {t('yourMessage')}
                </Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t('leaveBlessingsHere')}
                  className="min-h-[100px] border-[#f5f3ee] focus-visible:ring-maroon"
                />
              </div>

              <Button 
                type="submit" 
                className={`w-full rounded-full ${
                  !name || !message 
                    ? 'bg-maroon/30 cursor-not-allowed' 
                    : 'bg-maroon hover:bg-maroon-light'
                } text-white`}
                disabled={!name || !message}
              >
                <span className="flex items-center">
                  <Send className="mr-2 h-4 w-4" /> {t('previewAndSend')}
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
                          <p className="text-xs text-maroon mt-0.5">{new Date(msg.createdAt).toLocaleDateString()}</p>
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
              <p className="text-white">{t('noMessagesFound')}</p>
            </div>
          )}
        </div>
      </main>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="sm:max-w-md bg-white border-2 border-[#f5f3ee] rounded-xl">
          <DialogHeader>
            <DialogTitle className="text-center text-maroon">{t('confirmYourBlessing')}</DialogTitle>
            <DialogDescription className="text-center text-maroon/70">
              {t('previewMessageAppearance')}
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
              <Edit className="mr-2 h-4 w-4" /> {t('editMessage')}
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
                  {t('sending')}
                </span>
              ) : (
                <span className="flex items-center">
                  <Check className="mr-2 h-4 w-4" /> {t('confirmAndSend')}
                </span>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
