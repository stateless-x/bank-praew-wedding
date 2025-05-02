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
        className="bg-[#1a1a1a] rounded-2xl shadow-2xl overflow-hidden border border-[#2a2a2a]"
      >
        <div className="p-5">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="bg-[#ffe042] p-2 rounded-xl">
                <Sparkles className="h-5 w-5 text-[#1a1a1a]" />
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-sm text-white font-semibold mb-1">
                This app was made by BrainFried.co 🧠💥
              </h3>
              <p className="text-sm text-white/80 mb-2">
                Need one for your own wedding or startup? We got you.
              </p>
              <button
                onClick={handleClick}
                className="group flex items-center gap-1 text-[#ffe042] hover:text-[#bda52a] transition-colors"
              >
                <span className="text-sm font-semibold">Book a Free Consult</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-[#666666] hover:text-white transition-colors text-sm"
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 