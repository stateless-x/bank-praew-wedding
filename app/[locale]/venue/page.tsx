"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Heart, MapPin, Navigation, Clock, Info, ExternalLink, Sparkles } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"
import { PromotionalBanner } from "@/components/promotional-banner"
import { useTranslation } from 'react-i18next'
import { FloatingDecorations } from '@/components/floating-decorations'

export default function VenuePage() {
  const { t } = useTranslation()
  const { isMobile, isIOS } = useMobile()
  const [isMapLoaded, setIsMapLoaded] = useState(false)
  
  // Venue coordinates
  const venueName = t('venueName')
  const venueAddress = t('venueAddress')
  const googleMapsUrl = "https://maps.app.goo.gl/5zB2rmjcLRwPEYfj6"
  const appleMapsUrl = "https://maps.apple.com/place?place-id=IFC417482416A60B1&address=372+Rama+3+Rd.%2C+Bang+Khlo%2C+Phra+Nakhon+Si+Bang+Kho+Laem%2C+Bangkok+10120%2C+Thailand&coordinate=13.688173%2C100.507644&name=Montien+Riverside+Hotel+Bangkok&_provider=9902"

  // Function to open the appropriate maps app
  const openMapsApp = (preferApple = false) => {
    if (isIOS && preferApple) {
      window.open(appleMapsUrl, "_blank")
    } else {
      window.open(googleMapsUrl, "_blank")
    }
  }

  // Simulate map loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMapLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#761213] via-[#761213] to-[#8a2223] pb-6" data-theme="wedding" suppressHydrationWarning>
      {/* Floating decorations */}
      <FloatingDecorations />

      {/* Header */}
      <header className="pt-8 pb-6 px-4 text-center">
        <div className="flex justify-center mb-3">
          <div className="relative">
            <div className="text-4xl">🏫</div>
            <Heart className="absolute -top-2 -right-4 h-4 w-4 text-white fill-coral-light animate-pulse" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-white mb-1">{t('weddingVenue')}</h1>
        <p className="text-sm text-white/80 max-w-md mx-auto">{t('findYourWayToOurSpecialDay')}</p>
      </header>

      {/* Main content */}
      <main className="px-4 max-w-md mx-auto">
        {/* Venue Details Card */}
        <Card className="border-white/20 border-2 rounded-xl shadow-md overflow-hidden mb-6 bg-white">
          <div className="h-2 bg-gradient-to-r from-maroon via-coral to-maroon"></div>
          <CardHeader className="bg-[#f5f3ee] pb-2">
            <CardTitle className="text-maroon flex items-center gap-2">
              <MapPin className="h-5 w-5" /> {t('venueInformation')}
            </CardTitle>
          </CardHeader>

          <CardContent className="pt-4">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-[#f5f3ee] p-2 rounded-full">
                  <Info className="h-5 w-5 text-maroon" />
                </div>
                <div>
                  <p className="font-medium text-maroon">{venueName}</p>
                  <p className="text-sm text-maroon">{venueAddress}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#f5f3ee] p-2 rounded-full">
                  <Clock className="h-5 w-5 text-maroon" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-maroon pb-2">
                    {t('weddingDate')}
                  </p>
                  <p className="text-sm pb-1 text-maroon">
                    {t('khanMakParade')}
                  </p>
                  <p className="text-sm pb-1 text-maroon">
                    {t('engagementCeremony')}
                  </p>
                  <p className="text-sm pb-1 text-maroon">
                    {t('weddingCocktail')}
                  </p>
                  <p className="text-sm text-maroon">
                    {t('afterParty')}
                  </p>
                </div>
              </div>

              <div className="bg-[#f5f3ee] p-4 rounded-xl border border-[#f5f3ee] mt-4">
                <p className="text-sm text-maroon font-medium">{t('parkingInformation')}</p>
                <p className="text-sm text-maroon mt-2">
                  {t('freeParkingAvailable')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Map Card */}
        <Card className="border-white/20 border-2 rounded-xl shadow-md overflow-hidden mb-6 bg-white">
          <div className="h-2 bg-gradient-to-r from-coral via-maroon to-coral"></div>
          <CardHeader className="bg-[#f5f3ee] pb-2">
            <CardTitle className="text-maroon flex items-center gap-2">
              <Navigation className="h-5 w-5" /> {t('mapAndDirections')}
            </CardTitle>
          </CardHeader>

          <CardContent className="p-0">
            {/* Map Container */}
            <div className="relative w-full h-64 bg-[#f5f3ee]">
              {!isMapLoaded ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin h-8 w-8 border-4 border-coral rounded-full border-t-transparent"></div>
                </div>
              ) : (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5370.555555049588!2d100.50541251188233!3d13.688671986641165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a20ab84f31a5%3A0x34b3789c67759568!2sMontien%20Riverside%20Hotel%20Bangkok!5e1!3m2!1sen!2sth!4v1744813866159!5m2!1sen!2sth"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              )}
            </div>

            {/* Direction Buttons */}
            <div className="p-4 space-y-3">
              <Button
                onClick={() => openMapsApp(false)}
                className="w-full bg-maroon hover:bg-maroon-light text-white rounded-full"
              >
                <Navigation className="mr-2 h-4 w-4" />
                {t('openInGoogleMaps')}
              </Button>

              {isIOS && (
                <Button
                  onClick={() => openMapsApp(true)}
                  variant="outline"
                  className="w-full border-[#f5f3ee] text-maroon hover:bg-[#f5f3ee] rounded-full"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {t('openInAppleMaps')}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Additional Information */}
        <Card className="border-white/20 border-2 rounded-xl shadow-md mb-10 overflow-hidden bg-white">
          <div className="h-2 bg-gradient-to-r from-maroon to-coral-dark"></div>
          <CardHeader className="bg-[#f5f3ee] pb-2">
            <CardTitle className="text-maroon">{t('gettingThere')}</CardTitle>
          </CardHeader>

          <CardContent className="pt-4">
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-maroon mb-2">{t('byCar')}</h3>
                <p className="text-sm text-maroon">
                  {t('byCarDirections')}
                </p>
              </div>

              <div>
                <h3 className="font-medium text-maroon mb-2">{t('byPublicTransport')}</h3>
                <p className="text-sm text-maroon">
                  {t('byPublicTransportDirections')}
                </p>
              </div>

              <div className="bg-[#f5f3ee] p-4 rounded-xl border border-[#f5f3ee] mt-2">
                <div className="flex items-start gap-2">
                  <p className="text-sm text-maroon">
                    {t('contactHotelForAssistance')}
                    <span className="font-medium"> 02-292-2999</span>.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <div>
          <PromotionalBanner />
        </div>
      </main>
    </div>
  )
}
