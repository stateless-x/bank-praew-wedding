"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useParams } from "next/navigation"
import { Calendar, Gift, MapPin, HelpCircle, Image, Heart } from "lucide-react"
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from './language-switcher'

export function NavigationBar() {
  const pathname = usePathname()
  const params = useParams()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { t } = useTranslation()
  const [isMounted, setIsMounted] = useState(false);

  // Ensure translations are only used after mounting
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Get current language from params
  const currentLocale = (params?.locale as string) || 'th'

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
      name: isMounted ? t("schedule") : "กำหนดการ",
      href: `/${currentLocale}`,
      icon: Calendar,
      emoji: "📅",
    },
    {
      name: isMounted ? t("venue") : "สถานที่จัดงาน",
      href: `/${currentLocale}/venue`,
      icon: MapPin,
      emoji: "🏫",
    },
    {
      name: isMounted ? t("gallery") : "แกลเลอรี",
      href: "https://drive.google.com/drive/folders/1VYYBEbXUi8ze4CzioeBBVHcEWd_On3MA?usp=drive_link",
      icon: Image,
      emoji: "📸",
    },
    {
      name: isMounted ? t("hongbao") : "ซองแดง",
      href: `/${currentLocale}/hongbao`,
      icon: Gift,
      emoji: "💰",
    },
    {
      name: isMounted ? t("blessings") : "คำอวยพรจากใจ",
      href: `/${currentLocale}/blessings`,
      icon: Heart,
      emoji: "💌",
    },
    {
      name: isMounted ? t("qa") : "ถาม-ตอบ",
      href: `/${currentLocale}/qa`,
      icon: HelpCircle,
      emoji: "❓",
    },
  ]

  return (
    <>
      {/* Language switcher - fixed top right */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>

      {/* Navigation bar */}
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
              (item.href === `/${currentLocale}` && pathname === `/${currentLocale}`) ||
              (item.href !== `/${currentLocale}` && pathname.startsWith(item.href))

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center py-2 px-1 ${
                  isActive ? "text-maroon" : "text-gray hover:text-maroon-light"
                }`}
              >
                <div className={`p-1.5 rounded-full mb-1 ${isActive ? "bg-[#f5f3ee]" : ""}`}>
                  <div className="text-lg">{item.emoji}</div>
                </div>
                <span className="text-[10px] font-medium text-center">{item.name}</span>
                {isActive && <span className="absolute bottom-1 h-1 w-8 bg-maroon rounded-full"></span>}
              </Link>
            )
          })}
        </div>
      </nav>
    </>
  )
}
