"use client"

import { useState, useEffect } from 'react'

export function FloatingDecorations() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <div
        className="fixed top-10 left-5 text-2xl animate-float"
        style={{ animationDelay: "0.5s" }}
      >
        🌸
      </div>
      <div
        className="fixed top-20 right-10 text-2xl animate-float"
        style={{ animationDelay: "1.2s" }}
      >
        💕
      </div>
      <div
        className="fixed bottom-20 left-8 text-2xl animate-float"
        style={{ animationDelay: "0.8s" }}
      >
        🌺
      </div>
      <div
        className="fixed bottom-40 right-5 text-2xl animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        💖
      </div>
    </>
  )
} 