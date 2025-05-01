"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export function PromotionalBanner() {
  const [isVisible, setIsVisible] = useState(true)

  const handleClick = () => {
    // Track click event here
    window.open("https://brainfried.co", "_blank")
  }

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mt-8 mb-6"
    >
      <div
        className="bg-white/80 rounded-xl shadow-sm overflow-hidden border border-[#f5f3ee]"
        data-theme="wedding"
      >
        <div className="h-0.5 bg-gradient-to-r from-maroon/20 via-coral/20 to-maroon/20"></div>
        <div className="p-3 flex items-center gap-2">
          <div className="flex-shrink-0">
            <Sparkles className="h-4 w-4 text-maroon/70" />
          </div>
          <div className="flex-grow">
            <p className="text-xs text-maroon/80">
              Craft a wedding app to elevate your guests' experience at an affordable price with Bangkok's BrainFried.co team!
            </p>
            <button
              onClick={handleClick}
              className="mt-1 text-[10px] text-coral/80 hover:text-maroon/80 transition-colors"
            >
              Book a free consultation today!
            </button>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400/60 hover:text-maroon/60 transition-colors text-xs"
          >
            ✕
          </button>
        </div>
      </div>
    </motion.div>
  )
} 