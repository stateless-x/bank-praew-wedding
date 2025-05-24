"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Heart, Sparkles } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { PromotionalBanner } from "@/components/promotional-banner"
import { FloatingDecorations } from '@/components/floating-decorations'

export default function HongbaoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#761213] via-[#761213] to-[#8a2223] pb-6" data-theme="wedding" suppressHydrationWarning>
      {/* Floating decorations */}
      <FloatingDecorations />

      {/* Header */}
      <header className="pt-8 pb-6 px-4 text-center">
        <div className="flex justify-center mb-2">
          <div className="relative">
            <div className="text-4xl">💰</div>
            <Heart className="absolute -top-2 -right-4 h-4 w-4 text-white fill-coral-light animate-pulse" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-white mb-1">Digital Envelope 💖</h1>
        <p className="text-md text-white/80 max-w-md mx-auto text-center">
          Scan the QR code below to send us a digital hongbao!
        </p>
      </header>

      {/* Main content */}
      <main className="px-4 pb-8 max-w-md mx-auto">
        {/* QR Code Card */}
        <Card className="border-white/20 border-2 rounded-xl shadow-md mb-6 overflow-hidden bg-white">
          <div className="h-2 bg-gradient-to-r from-maroon via-coral to-maroon"></div>

          <CardContent className="pt-6 pb-4">
            <div className="relative mx-auto w-64 h-64 flex items-center justify-center">
              {/* QR Code */}
              <div className="w-full h-full p-4 bg-white rounded-lg shadow-sm border-2 border-[#f5f3ee]">
                <Image
                  src="/preaw-qr.png?height=240&width=240"
                  alt="Payment QR Code"
                  width={240}
                  height={240}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="text-center mt-6 space-y-2">
              <p className="text-md font-medium text-maroon">PromptPay</p>
              <p className="text-md text-maroon">Chunita Wongwiboonrath</p>
              <div className="flex items-center justify-center gap-2 mt-4">
                <Sparkles className="h-3 w-3 text-coral" />
                <p className="text-sm text-maroon">Thank you for your support.<br/> We really appreciate it!</p>
                <Sparkles className="h-3 w-3 text-coral" />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="pb-6">
          <PromotionalBanner />
        </div>
      </main>
    </div>
  )
}
