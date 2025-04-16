import type React from "react"
import type { Metadata } from "next"
import { Quicksand } from "next/font/google"
import "./globals.css"
import { NavigationBar } from "@/components/navigation-bar"

const quicksand = Quicksand({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Preaw & Bank Wedding Invitation",
  description: "Join us to celebrate our special day",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="wedding">
      <body className={quicksand.className}>
        {children}
        <NavigationBar />
        <div className="h-16 bg-[#8a2223]"></div> {/* Spacer for fixed navigation */}
      </body>
    </html>
  )
}


import './globals.css'