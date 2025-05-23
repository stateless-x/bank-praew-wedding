import type React from "react"
import { notFound } from "next/navigation"

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

export default function LocaleLayout({
  children,
  params: { locale }
}: LocaleLayoutProps) {
  // Check if the locale is valid
  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  return (
    <>
      {children}
    </>
  )
} 