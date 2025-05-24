"use client"

import { useState, useEffect } from "react"
import { Heart, Sparkles, Check } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { FloatingDecorations } from '@/components/floating-decorations'

export default function DressCodePage() {
  const [selectedGender, setSelectedGender] = useState<"ladies" | "gentlemen" | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-100 via-cream-100 to-coral-100 pb-6" data-theme="wedding" suppressHydrationWarning>
      {/* Floating decorations */}
      <FloatingDecorations />

      {/* Header */}
      <header className="pt-8 pb-6 px-4 text-center">
        <div className="flex justify-center mb-3">
          <div className="relative">
            <div className="text-4xl">👗👔</div>
            <Heart className="absolute -top-2 -right-4 h-4 w-4 text-maroon-700 fill-coral-400 animate-pulse" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-maroon-700 mb-1">Dress Code</h1>
        <p className="text-sm text-coral-500 max-w-md mx-auto">What to wear to our special day</p>
      </header>

      {/* Main content */}
      <main className="px-4 max-w-md mx-auto">
        {/* Gender Selection */}
        <div className="mb-6">
          <p className="text-center text-sm font-medium text-pink-600 mb-3">Select to see dress code:</p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setSelectedGender("ladies")}
              className={`relative flex-1 py-3 px-4 rounded-xl border-2 transition-all ${
                selectedGender === "ladies"
                  ? "border-maroon-300 bg-cream-100 shadow-md"
                  : "border-cream-200 bg-white hover:border-maroon-300"
              }`}
            >
              <div className="flex flex-col items-center">
                <span className="text-3xl mb-1">👸</span>
                <span className="font-medium text-maroon-700">Ladies</span>
              </div>
              {selectedGender === "ladies" && (
                <div className="absolute -top-2 -right-2 bg-maroon-700 text-white p-1 rounded-full">
                  <Check className="h-3 w-3" />
                </div>
              )}
            </button>

            <button
              onClick={() => setSelectedGender("gentlemen")}
              className={`relative flex-1 py-3 px-4 rounded-xl border-2 transition-all ${
                selectedGender === "gentlemen"
                  ? "border-coral-300 bg-cream-100 shadow-md"
                  : "border-cream-200 bg-white hover:border-coral-300"
              }`}
            >
              <div className="flex flex-col items-center">
                <span className="text-3xl mb-1">🤵</span>
                <span className="font-medium text-coral-500">Gentlemen</span>
              </div>
              {selectedGender === "gentlemen" && (
                <div className="absolute -top-2 -right-2 bg-coral-500 text-white p-1 rounded-full">
                  <Check className="h-3 w-3" />
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Ladies Dress Code */}
        {selectedGender === "ladies" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <Card className="border-cream-200 border-2 rounded-xl shadow-md overflow-hidden mb-6">
              <div className="h-2 bg-gradient-to-r from-maroon-700 to-maroon-600"></div>
              <CardHeader className="bg-cream-100 pb-2">
                <CardTitle className="text-maroon-700">Ladies Dress Code</CardTitle>
              </CardHeader>

              <CardContent className="pt-4">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="relative rounded-lg overflow-hidden border-2 border-pink-100 bg-white shadow-sm">
                    <Image
                      src="/placeholder.svg?height=180&width=150"
                      alt="Formal dress example"
                      width={150}
                      height={180}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-pink-50/90 py-1 px-2 text-xs text-center text-pink-600">
                      Formal Dress
                    </div>
                  </div>

                  <div className="relative rounded-lg overflow-hidden border-2 border-pink-100 bg-white shadow-sm">
                    <Image
                      src="/placeholder.svg?height=180&width=150"
                      alt="Traditional qipao example"
                      width={150}
                      height={180}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-pink-50/90 py-1 px-2 text-xs text-center text-pink-600">
                      Traditional Qipao
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-maroon-700 mb-2">Recommended Attire:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="text-maroon-600 mt-1">•</div>
                        <p className="text-sm text-maroon-700">Traditional Thai attire like sabai/chut thai</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="text-maroon-600 mt-1">•</div>
                        <p className="text-sm text-maroon-700">Cocktail dresses or formal attire</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="text-maroon-600 mt-1">•</div>
                        <p className="text-sm text-maroon-700">Cream or gold accents are encouraged</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="text-maroon-600 mt-1">•</div>
                        <p className="text-sm text-maroon-700">Elegant jewelry and accessories</p>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-pink-100">
                    <h3 className="font-medium text-pink-500 mb-2">Please Avoid:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="text-pink-400 mt-1">•</div>
                        <p className="text-sm text-pink-600">White (reserved for the bride)</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="text-pink-400 mt-1">•</div>
                        <p className="text-sm text-pink-600">All black outfits (associated with funerals)</p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-pink-50 rounded-lg border border-pink-100">
                  <div className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 text-pink-400 mt-0.5" />
                    <p className="text-xs text-pink-600">
                      Comfortable yet elegant footwear is recommended as there will be both standing during the ceremony
                      and dancing in the evening.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Gentlemen Dress Code */}
        {selectedGender === "gentlemen" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <Card className="border-cream-200 border-2 rounded-xl shadow-md overflow-hidden mb-6">
              <div className="h-2 bg-gradient-to-r from-coral-400 to-coral-500"></div>
              <CardHeader className="bg-cream-100 pb-2">
                <CardTitle className="text-coral-500">Gentlemen Dress Code</CardTitle>
              </CardHeader>

              <CardContent className="pt-4">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="relative rounded-lg overflow-hidden border-2 border-amber-100 bg-white shadow-sm">
                    <Image
                      src="/placeholder.svg?height=180&width=150"
                      alt="Formal suit example"
                      width={150}
                      height={180}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-amber-50/90 py-1 px-2 text-xs text-center text-amber-600">
                      Formal Suit
                    </div>
                  </div>

                  <div className="relative rounded-lg overflow-hidden border-2 border-amber-100 bg-white shadow-sm">
                    <Image
                      src="/placeholder.svg?height=180&width=150"
                      alt="Traditional Chinese attire example"
                      width={150}
                      height={180}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-amber-50/90 py-1 px-2 text-xs text-center text-amber-600">
                      Traditional Attire
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-amber-600 mb-2">Recommended Attire:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="text-amber-400 mt-1">•</div>
                        <p className="text-sm text-amber-600">Traditional Chinese attire</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="text-amber-400 mt-1">•</div>
                        <p className="text-sm text-amber-600">Semi-formal: Dress shirts with slacks</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="text-amber-400 mt-1">•</div>
                        <p className="text-sm text-amber-600">Suits or blazers (ties optional)</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="text-amber-400 mt-1">•</div>
                        <p className="text-sm text-amber-600">Red pocket squares or ties are welcomed</p>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-amber-100">
                    <h3 className="font-medium text-amber-600 mb-2">Please Avoid:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="text-amber-400 mt-1">•</div>
                        <p className="text-sm text-amber-600">Casual attire (t-shirts, jeans, sneakers)</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="text-amber-400 mt-1">•</div>
                        <p className="text-sm text-amber-600">All black outfits</p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-100">
                  <div className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 text-amber-400 mt-0.5" />
                    <p className="text-xs text-amber-600">
                      Comfortable dress shoes are recommended as there will be both standing during the ceremony and
                      dancing in the evening.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Default View - Both Options */}
        {!selectedGender && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <div className="text-center mb-6">
              <p className="text-sm text-pink-500">
                Please select Ladies or Gentlemen above to see detailed dress code information.
              </p>
            </div>
          </motion.div>
        )}

        {/* Color Guide */}
        <Card className="border-cream-200 border-2 rounded-xl shadow-md mb-10 overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-maroon-700 to-coral-400"></div>
          <CardHeader className="bg-cream-100 pb-2">
            <CardTitle className="text-maroon-700">Color Guide</CardTitle>
          </CardHeader>

          <CardContent className="pt-4">
            <p className="text-sm text-maroon-700 mb-3">
              In Thai wedding tradition, colors carry special meanings. Here's a guide to help you choose:
            </p>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-3 p-2 rounded-lg bg-cream-100">
                <div className="w-10 h-10 rounded-full bg-maroon-700 shadow-sm"></div>
                <div>
                  <p className="font-medium text-sm text-maroon-700">Maroon</p>
                  <p className="text-xs text-maroon-600">Elegance & tradition</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2 rounded-lg bg-cream-100">
                <div className="w-10 h-10 rounded-full bg-cream-600 shadow-sm"></div>
                <div>
                  <p className="font-medium text-sm text-maroon-700">Cream</p>
                  <p className="text-xs text-maroon-600">Purity & sophistication</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2 rounded-lg bg-cream-100">
                <div className="w-10 h-10 rounded-full bg-coral-400 shadow-sm"></div>
                <div>
                  <p className="font-medium text-sm text-maroon-700">Coral</p>
                  <p className="text-xs text-maroon-600">Joy & celebration</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2 rounded-lg bg-cream-100">
                <div className="w-10 h-10 rounded-full bg-amber-400 shadow-sm"></div>
                <div>
                  <p className="font-medium text-sm text-maroon-700">Gold</p>
                  <p className="text-xs text-maroon-600">Prosperity & fortune</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-50 opacity-70 col-span-1">
                <div className="w-10 h-10 rounded-full bg-white border shadow-sm"></div>
                <div className="relative">
                  <p className="font-medium text-sm text-pink-600">White</p>
                  <p className="text-xs text-pink-500">Please avoid</p>
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-pink-400 transform -rotate-6"></div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-50 opacity-70 col-span-1">
                <div className="w-10 h-10 rounded-full bg-gray-600 shadow-sm"></div>
                <div className="relative">
                  <p className="font-medium text-sm text-pink-600">Dark Gray</p>
                  <p className="text-xs text-pink-500">Please avoid</p>
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-pink-400 transform -rotate-6"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
