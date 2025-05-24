"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Calendar, Gift, MapPin, HelpCircle, Image, Heart } from "lucide-react"
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from './language-switcher'

export function NavigationBar() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [currentLang, setCurrentLang] = useState('th') // Force re-render state
  const { t, i18n } = useTranslation()

  // Use state value for current locale to ensure re-renders
  const currentLocale = currentLang

  console.log('🔄 NavigationBar render - locale:', currentLocale, 'i18n.language:', i18n.language);

  // Sync currentLang state with i18n.language and force re-renders
  useEffect(() => {
    const updateLanguage = () => {
      const newLang = i18n.language || 'th';
      console.log('🔄 NavigationBar - Language change detected:', currentLang, '->', newLang);
      if (newLang !== currentLang) {
        setCurrentLang(newLang);
      }
    };

    // Update immediately
    updateLanguage();

    // Listen for language changes
    i18n.on('languageChanged', updateLanguage);
    
    return () => {
      i18n.off('languageChanged', updateLanguage);
    };
  }, [i18n, currentLang]);

  // Create nav items - these will update when currentLang state changes
  const navItems = [
    {
      name: t("schedule"),
      href: `/${currentLocale}`,
      icon: Calendar,
      emoji: "📅",
    },
    {
      name: t("venue"),
      href: `/${currentLocale}/venue`,
      icon: MapPin,
      emoji: "🏫",
    },
    {
      name: t("gallery"),
      href: "https://drive.google.com/drive/folders/1VYYBEbXUi8ze4CzioeBBVHcEWd_On3MA?usp=drive_link",
      icon: Image,
      emoji: "📸",
    },
    {
      name: t("hongbao"),
      href: `/${currentLocale}/hongbao`,
      icon: Gift,
      emoji: "💰",
    },
    {
      name: t("blessings"),
      href: `/${currentLocale}/blessings`,
      icon: Heart,
      emoji: "💌",
    },
    {
      name: t("qa"),
      href: `/${currentLocale}/qa`,
      icon: HelpCircle,
      emoji: "❓",
    },
  ];

  console.log('📋 NavItems:', navItems.map(item => `${item.emoji} ${item.name}`));

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

  return (
    <div key={`nav-${currentLocale}`}>
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
          {navItems.map((item, index) => {
            const isActive =
              pathname === item.href ||
              (item.href === `/${currentLocale}` && pathname === `/${currentLocale}`) ||
              (item.href !== `/${currentLocale}` && pathname.startsWith(item.href))

            return (
              <Link
                key={`${item.emoji}-${index}-${currentLocale}`}
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
    </div>
  )
}
