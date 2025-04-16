"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Calendar, Gift, MapPin, HelpCircle } from "lucide-react"

export function NavigationBar() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Handle scroll to hide/show navigation on mobile
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const navItems = [
    {
      name: "Schedule",
      href: "/",
      icon: Calendar,
      emoji: "📅",
    },
    {
      name: "Venue",
      href: "/venue",
      icon: MapPin,
      emoji: "🏫",
    },
    {
      name: "Hongbao",
      href: "/hongbao",
      icon: Gift,
      emoji: "🧧",
    },
    {
      name: "Q&A",
      href: "/qa",
      icon: HelpCircle,
      emoji: "❓",
    },
  ]

  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 bg-white border-t border-[#f5f3ee] shadow-lg transition-transform duration-300 z-50 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
      data-theme="wedding"
    >
      <div className="h-1 bg-gradient-to-r from-maroon via-coral to-maroon absolute top-0 left-0 right-0"></div>
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href === "/" && pathname === "/") ||
            (item.href !== "/" && pathname.startsWith(item.href))

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center py-2 px-2 ${
                isActive ? "text-maroon" : "text-gray hover:text-maroon-light"
              }`}
            >
              <div className={`p-1.5 rounded-full mb-1 ${isActive ? "bg-[#f5f3ee]" : ""}`}>
                <div className="text-lg">{item.emoji}</div>
              </div>
              <span className="text-[10px] font-medium">{item.name}</span>
              {isActive && <span className="absolute bottom-1 h-1 w-8 bg-maroon rounded-full"></span>}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
