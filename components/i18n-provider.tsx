"use client"

import { useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import '@/lib/i18n'

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const params = useParams()
  const { i18n } = useTranslation()
  
  // Get locale from params (for dynamic routes) or fallback to URL parsing
  const locale = (params?.locale as string) || 'th'

  useEffect(() => {
    // Set language if it's different from current
    if (['th', 'en'].includes(locale) && i18n.language !== locale) {
      i18n.changeLanguage(locale)
    }
  }, [locale, i18n])

  return <>{children}</>
} 