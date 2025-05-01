"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Sparkles, ArrowRight } from "lucide-react"

export function PromotionalBanner() {
  const [isVisible, setIsVisible] = useState(true)

  const handleClick = () => {
    // Track click event here
    window.open("https://brainfried.co", "_blank")
  }

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="mt-8 mb-6"
    >
      <div
        className="bg-gradient-to-br from-[#f8f4ed] to-[#f5f3ee] rounded-2xl shadow-xl overflow-hidden border border-[#e8e4dd]"
      >
        <div className="p-5">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="bg-[#761213] p-2 rounded-xl">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="flex-grow">
              <p className="text-sm text-[#761213] font-medium mb-2">
                Craft a wedding app to elevate your guests' experience at an affordable price with Bangkok's BrainFried.co team!
              </p>
              <button
                onClick={handleClick}
                className="group flex items-center gap-1 text-[#761213] hover:text-[#8a2223] transition-colors"
              >
                <span className="text-sm font-semibold">Book a free consultation</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-[#b0b1b0] hover:text-[#761213] transition-colors text-sm"
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 