import type React from "react"
import type { Metadata } from "next"
import { Quicksand } from "next/font/google"
import "./globals.css"
import { NavigationBar } from "@/components/navigation-bar"
import Script from "next/script"

const quicksand = Quicksand({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Praew & Bank Wedding Invitation",
  description: "Join us to celebrate our special day"}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="wedding">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-40WGV7ZWKK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-40WGV7ZWKK');
          `}
        </Script>
      </head>
      <body className={quicksand.className}>
        {children}
        <NavigationBar />
        <div className="bg-[#8a2223]"></div> {/* Spacer for fixed navigation */}
      </body>
    </html>
  )
}