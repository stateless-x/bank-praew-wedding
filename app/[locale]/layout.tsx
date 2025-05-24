import type React from "react"
import { notFound } from "next/navigation"
import { I18nProvider } from "@/components/i18n-provider"

// Define the available locales
const locales = ['th', 'en'] as const
type Locale = typeof locales[number]

// Props interface for the layout
interface LocaleLayoutProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default async function LocaleLayout({
  children,
  params
}: LocaleLayoutProps) {
  const { locale } = await params

  // Check if the locale is valid
  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  return (
    <I18nProvider>
      <div key={locale}>
        {children}
      </div>
    </I18nProvider>
  )
} 