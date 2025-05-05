import type React from "react"
import type { Metadata } from "next"
import { Quicksand } from "next/font/google"
import "./globals.css"
import { NavigationBar } from "@/components/navigation-bar"
import Script from "next/script"

const quicksand = Quicksand({ subsets: ["latin"] })

// Get the site URL from environment variable or use a default
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://praewbankforevermore.love';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Praew & Bank Wedding — Powered by Brainfried.co",
  description: "A custom wedding app for Praew & Bank · May 25, 2025 · Built by Brainfried.co — Thailand-based team for tailored web apps & systems.",
  icons: {
    icon: '/favicon.svg?v=2',
  },
  openGraph: {
    title: "Praew & Bank Wedding",
    description: "Custom wedding app for Praew & Bank · Built by Brainfried.co — Thailand-based team for web apps & systems",
    images: [
      {
        url: '/pb-home-v2.png',
        width: 1000,
        height: 1000,
        alt: "Praew & Bank Wedding",
      },
    ],
    siteName: "Praew & Bank Wedding",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Praew & Bank Wedding",
    description: "Custom wedding app for Praew & Bank · Built by Brainfried.co — Thailand-based team for web apps & systems",
    images: ['/pb-home-v2.png'],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="wedding">
      <head>
        <link rel="icon" href="/favicon.svg?v=2" type="image/svg+xml" />
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