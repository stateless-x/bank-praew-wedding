"use client"

import { useState, useEffect } from "react"

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false)
  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    // Check if running in browser environment
    if (typeof window !== "undefined") {
      // Check if mobile device
      const checkMobile = () => {
        const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera

        // Check if iOS
        const isIOSDevice = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream
        setIsIOS(isIOSDevice)

        // Check if mobile
        const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
        setIsMobile(isMobileDevice)
      }

      checkMobile()

      // Update on resize (in case of responsive mode in desktop browsers)
      window.addEventListener("resize", checkMobile)

      return () => {
        window.removeEventListener("resize", checkMobile)
      }
    }
  }, [])

  return { isMobile, isIOS }
}
