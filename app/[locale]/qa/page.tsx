"use client"

import { useState, useEffect } from "react"
import { PromotionalBanner } from "@/components/promotional-banner"
import { Heart, HelpCircle } from "lucide-react"
import Link from "next/link"
import { useTranslation } from 'react-i18next'
import { FloatingDecorations } from '@/components/floating-decorations'

export default function QAPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#761213] via-[#761213] to-[#8a2223] pb-20" data-theme="wedding" suppressHydrationWarning>
      {/* Floating decorations */}
      <FloatingDecorations />

      {/* Header */}
      <header className="pt-8 pb-6 px-4 text-center">
        <div className="flex justify-center mb-3">
          <div className="relative">
            <div className="text-4xl">❓</div>
            <Heart className="absolute -top-2 -right-4 h-4 w-4 text-white fill-coral-light animate-pulse" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-white mb-1">{t('qa')}</h1>
        <p className="text-sm text-white/80 max-w-md mx-auto">{t('everythingYouNeedToKnow')}</p>
      </header>

      {/* Main content */}
      <main className="px-4 max-w-md mx-auto">
        <div className="card bg-white shadow-md mb-6 overflow-hidden border-2 border-white/20 rounded-2xl">
          <div className="h-2 bg-gradient-to-r from-maroon via-coral to-maroon"></div>
          <div className="card-body p-4">
            <h2 className="card-title text-maroon flex items-center gap-2 text-lg mb-4">
              <HelpCircle className="h-4 w-4" /> {t('frequentlyAskedQuestions')}
            </h2>

            <div className="space-y-3">
              <div className="collapse collapse-arrow bg-[#f5f3ee] rounded-xl border border-[#f5f3ee]">
                <input type="checkbox" defaultChecked />
                <div className="collapse-title font-medium text-sm text-maroon">{t('whatShouldIWear')}</div>
                <div className="collapse-content text-sm text-maroon">
                  <p className="mb-3">{t('pleaseDressInWeddingColors')}</p>
                  <div className="flex flex-wrap gap-3 mb-3">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-[#761213] shadow-md"></div>
                      <span className="text-xs mt-1 text-maroon">{t('maroon')}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-[#beb09b] shadow-md"></div>
                      <span className="text-xs mt-1 text-maroon">{t('taupe')}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-[#b0b1b0] shadow-md"></div>
                      <span className="text-xs mt-1 text-maroon">{t('gray')}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-[#ec8b8a] shadow-md"></div>
                      <span className="text-xs mt-1 text-maroon">{t('coral')}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-[#d68471] shadow-md"></div>
                      <span className="text-xs mt-1 text-maroon">{t('darkCoral')}</span>
                    </div>
                  </div>
                  <div className="bg-[#f5f3ee] py-3 rounded-lg mt-3">
                    <p className="text-sm text-maroon">
                      {t('formalOrSemiFormal')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-[#f5f3ee] rounded-xl border border-[#f5f3ee]">
                <input type="checkbox" defaultChecked={false} />
                <div className="collapse-title font-medium text-sm text-maroon">{t('doYouHaveAGiftRegistry')}</div>
                <div className="collapse-content text-sm text-maroon">
                  <p>
                    {t('yourPresenceIsOurPresent')}
                  </p>
                  <Link
                    href="/hongbao"
                    className="btn btn-sm bg-maroon hover:bg-maroon-light border-none text-white mt-4 normal-case rounded-full"
                  >
                    {t('sendDigitalEnvelope')}
                  </Link>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-[#f5f3ee] rounded-xl border border-[#f5f3ee]">
                <input type="checkbox" defaultChecked={false} />
                <div className="collapse-title font-medium text-sm text-maroon">{t('isThereParkingAtTheVenue')}</div>
                <div className="collapse-content text-sm text-maroon">
                  <p>{t('yesFreeParking')}</p>
                  <Link
                    href="/venue"
                    className="btn btn-sm bg-maroon hover:bg-maroon-light border-none text-white mt-4 normal-case rounded-full"
                  >
                    {t('venueDetails')}
                  </Link>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-[#f5f3ee] rounded-xl border border-[#f5f3ee]">
                <input type="checkbox" defaultChecked={false} />
                <div className="collapse-title font-medium text-sm text-maroon">{t('canIBringAPlusOne')}</div>
                <div className="collapse-content text-sm text-maroon">
                  <p>
                    {t('ofCoursePlusOne')} 🤝 
                  </p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-[#f5f3ee] rounded-xl border border-[#f5f3ee]">
                <input type="checkbox" defaultChecked={false} />
                <div className="collapse-title font-medium text-sm text-maroon">{t('whatsTheStyleOfTheEvent')}</div>
                <div className="collapse-content text-sm text-maroon">
                  <p>
                    {t('cocktailStyleCelebration')} 🥂
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Color Guide Card */}
        {/* <div className="card bg-white shadow-md mb-6 overflow-hidden border-2 border-white/20 rounded-2xl">
          <div className="h-2 bg-gradient-to-r from-maroon to-coral"></div>
          <div className="card-body p-4">
            <h2 className="card-title text-maroon text-lg mb-3">Dress Code Colors</h2>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white p-3 rounded-lg shadow-sm border border-[#f5f3ee] flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-[#761213] shadow-md flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-sm text-maroon">Maroon</p>
                  <p className="text-xs text-maroon/70">#761213</p>
                </div>
              </div>

              <div className="bg-white p-3 rounded-lg shadow-sm border border-[#f5f3ee] flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-[#beb09b] shadow-md flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-sm text-maroon">Taupe</p>
                  <p className="text-xs text-maroon/70">#beb09b</p>
                </div>
              </div>

              <div className="bg-white p-3 rounded-lg shadow-sm border border-[#f5f3ee] flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-[#b0b1b0] shadow-md flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-sm text-maroon">Gray</p>
                  <p className="text-xs text-maroon/70">#b0b1b0</p>
                </div>
              </div>

              <div className="bg-white p-3 rounded-lg shadow-sm border border-[#f5f3ee] flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-[#ec8b8a] shadow-md flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-sm text-maroon">Coral</p>
                  <p className="text-xs text-maroon/70">#ec8b8a</p>
                </div>
              </div>

              <div className="bg-white p-3 rounded-lg shadow-sm border border-[#f5f3ee] flex items-center gap-3 col-span-2">
                <div className="w-14 h-14 rounded-full bg-[#d68471] shadow-md flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-sm text-maroon">Dark Coral</p>
                  <p className="text-xs text-maroon/70">#d68471</p>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-[#f5f3ee] rounded-lg">
              <p className="text-xs text-maroon">
                These colors are inspired by traditional Thai wedding colors, symbolizing love, prosperity, and
                happiness. Feel free to incorporate these colors in your attire in any way you prefer.
              </p>
            </div>
          </div>
        </div> */}

        {/* Additional Questions */}
        <div className="card bg-white shadow-md mb-10 overflow-hidden border-2 border-white/20 rounded-2xl">
          <div className="h-2 bg-gradient-to-r from-coral to-maroon"></div>
          <div className="card-body p-4">
            <h2 className="card-title text-maroon text-lg mb-2">{t('stillHaveQuestions')}</h2>
            <p className="text-sm text-maroon mb-3">
              {t('ifYouHaveAnyOtherQuestions')}
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="tel:0626541493"
                className="btn btn-md bg-maroon hover:bg-maroon-light border-none text-white normal-case rounded-full"
              >
                {t('callPraew')}
              </a>
              <a
                href="tel:0979639929"
                className="btn btn-md bg-coral-dark hover:bg-coral border-none text-white normal-case rounded-full"
              >
                {t('callBank')}
              </a>
            </div>
          </div>
        </div>
        <div>
          <PromotionalBanner />
        </div>
      </main>
    </div>
  )
}
