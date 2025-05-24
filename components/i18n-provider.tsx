"use client"

import { useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import '@/lib/i18n'

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const params = useParams()
  const { i18n } = useTranslation()
  
  // Get locale from params (for dynamic routes) or fallback to default
  const locale = (params?.locale as string) || 'th'

  console.log('🏗️ I18nProvider render - locale:', locale, 'i18n.language:', i18n.language, 'i18n.isInitialized:', i18n.isInitialized);

  useEffect(() => {
    // Only change language if it's different and valid
    if (['th', 'en'].includes(locale) && i18n.language !== locale) {
      console.log('🔄 I18nProvider: Changing language from', i18n.language, 'to', locale)
      
      // Change language immediately - i18next handles this efficiently
      i18n.changeLanguage(locale).then(() => {
        console.log('✅ I18nProvider: Language changed successfully to', locale)
        
        // Set document language for accessibility
        document.documentElement.lang = locale;
      }).catch((error) => {
        console.error('❌ I18nProvider: Failed to change language:', error)
      });
    }
  }, [locale, i18n])

  // Simple re-render with locale key - let React handle the re-rendering
  return (
    <div key={`i18n-${locale}`} className="min-h-screen">
      {children}
    </div>
  )
} 