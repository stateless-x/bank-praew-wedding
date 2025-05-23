"use client"

import Link from "next/link";
import {
  Calendar,
  Clock,
  Heart,
  Map,
  MapPin,
  HelpCircle,
  Sparkles,
  Shirt,
} from "lucide-react";
import Image from "next/image";
import { PromotionalBanner } from "@/components/promotional-banner";
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

export default function WeddingInvitation() {
  const { t } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);

  // Ensure hydration safety by only rendering translated content after mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Fallback content for server-side rendering and initial client render
  const fallbackContent = {
    weddingInvitation: "เราสองคนอยากชวนคุณมาร่วมแบ่งปันความสุขในวันสำคัญของเรา ❤️",
    blessingWall: "มุมคำอวยพร",
    blessingWallDescription: "เขียนข้อความซึ้งๆ หรือเรื่องน่ารักที่อยากบอกแพรว & แบงค์ ให้เป็นความทรงจำดีๆ ในวันแต่งงานนี้ 💌",
    sendYourBlessing: "ส่งคำอวยพร",
    weddingSchedule: "กำหนดการงานแต่ง",
    weddingDate: "วันอาทิตย์ที่ 25 พฤษภาคม 2568",
    khanMakParade: "7:00 น. — ขบวนขันหมาก",
    engagementCeremony: "ต่อด้วยพิธีหมั้นและพิธีชงชา",
    weddingCocktail: "11:30 น. — งานเลี้ยงค็อกเทล",
    afterParty: "ต่อด้วย After Party 🎉",
    hotelName: "โรงแรมโมเทียน ริเวอร์ไซด์",
    ballroom: "แกรนด์ บอลรูม ชั้น 4",
    location: "ถนนพระราม 3 กรุงเทพฯ",
    getDirections: "เปิดแผนที่",
    dressCode: "Dress Code:",
    questions: "มีคำถามไหม?",
    questionsDescription: "ถ้ามีคำถามหรืออยากสอบถามเพิ่มเติม ติดต่อเราได้เลยนะ:",
    callPraew: "โทรหาแพรว: 062-654-1493",
    callBank: "โทรหาแบงค์: 097-963-9929"
  };

  // Use fallback for SSR and initial render, then switch to translations
  const getText = (key: string) => {
    return isMounted ? t(key) : fallbackContent[key as keyof typeof fallbackContent];
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-[#761213] via-[#761213] to-[#8a2223]"
      data-theme="wedding"
    >
      {/* Floating decorations */}
      <div
        className="fixed top-10 left-5 text-2xl animate-float"
        style={{ animationDelay: "0.5s" }}
      >
        🌸
      </div>
      <div
        className="fixed top-20 right-10 text-2xl animate-float"
        style={{ animationDelay: "1.2s" }}
      >
        💕
      </div>
      <div
        className="fixed bottom-20 left-8 text-2xl animate-float"
        style={{ animationDelay: "0.8s" }}
      >
        🌺
      </div>
      <div
        className="fixed bottom-40 right-5 text-2xl animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        💖
      </div>

      {/* Header with cute elements */}
      <header className="pt-12 pb-6 px-4 text-center relative">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <div className="text-6xl text-white animate-heartbeat">囍</div>
            <Heart className="absolute -top-2 -right-4 h-5 w-5 text-white fill-coral-light animate-pulse" />
            <Heart className="absolute -top-2 -left-4 h-5 w-5 text-white fill-coral-light animate-pulse" />
            <Sparkles className="absolute top-0 right-0 h-4 w-4 text-white" />
          </div>
        </div>

        <div className="relative inline-block mb-2">
          <h1 className="text-4xl font-bold text-white mb-1 relative z-10">
            Praew & Bank
          </h1>
          <div className="absolute -bottom-2 left-0 right-0 h-3 bg-white opacity-30 rounded-full -z-0"></div>
        </div>

        <p className="text-white mt-2 font-medium text-lg">25 May 2025</p>

        <div className="mt-6 max-w-[26.5rem] mx-auto bg-white/90 p-4 rounded-xl border-2 border-dashed border-white/30">
          <div className="pb-4">
            <Image
              src="pb-home-v2.png"
              alt="Praew & Bank Wedding"
              width={1000}
              height={1000}
              className="rounded-2xl"
            />
          </div>
          <p className="text-sm text-maroon leading-relaxed pb-2">
            {getText('weddingInvitation')}
            <br />
          </p>
          <Link 
              href="https://www.instagram.com/explore/search/keyword/?q=%23praewbankforevermore" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block mx-1 font-bold text-[18px] text-maroon leading-relaxed"
            >
              <span className=" bg-gradient-to-r from-coral via-maroon to-coral-dark bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x hover:from-maroon hover:via-coral hover:to-maroon transition-all duration-5000">#PraewBankForeverMore</span>
            </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="px-4 pb-4 max-w-md mx-auto">
        {/* Blessing Wall Card */}
        <div className="card bg-white shadow-md mb-6 overflow-hidden border-2 border-white/20 rounded-2xl animate-wiggle-pause">
          <div className="h-2 bg-gradient-to-r from-coral via-maroon to-coral"></div>
          <div className="card-body p-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="card-title text-maroon flex items-center gap-2 text-lg">
                <Heart className="h-4 w-4" /> {getText('blessingWall')}
              </h2>
              <div className="badge bg-[#f5f3ee] border-[#f5f3ee] p-3">
                <Sparkles className="h-3 w-3 text-maroon" />
              </div>
            </div>
            <p className="text-sm text-maroon mb-4">
              {getText('blessingWallDescription')}
            </p>
            <Link
              href="/hongbao?tab=blessings"
              className="btn btn-md bg-maroon hover:bg-maroon-light border-none text-white normal-case rounded-full w-full"
            >
              {getText('sendYourBlessing')}
            </Link>
          </div>
        </div>
        {/* Wedding Details Card */}
        <div className="card bg-white shadow-md mb-6 overflow-hidden border-2 border-white/20 rounded-2xl">
          <div className="h-2 bg-gradient-to-r from-maroon via-coral to-maroon"></div>
          <div className="card-body p-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="card-title text-maroon flex items-center gap-2 text-lg">
                <Clock className="h-4 w-4" /> {getText('weddingSchedule')}
              </h2>
              <div className="badge bg-[#f5f3ee] border-[#f5f3ee] p-3">
                <Heart className="h-3 w-3 fill-maroon" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-[#f5f3ee] p-2 rounded-full">
                  <Calendar className="h-4 w-4 text-maroon" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-maroon pb-2">
                    {getText('weddingDate')}
                  </p>
                  <p className="text-sm pb-1 text-maroon">
                    {getText('khanMakParade')}
                  </p>
                  <p className="text-sm pb-1 text-maroon">
                    {getText('engagementCeremony')}
                  </p>
                  <p className="text-sm pb-1 text-maroon">
                    {getText('weddingCocktail')}
                  </p>
                  <p className="text-sm text-maroon">
                    {getText('afterParty')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#f5f3ee] p-2 rounded-full">
                  <MapPin className="h-4 w-4 text-maroon" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-maroon pb-1">
                    {getText('hotelName')}
                  </p>
                  <p className="text-sm pb-1 text-maroon">
                    {getText('ballroom')}
                  </p>
                  <p className="text-sm pb-2 text-maroon">
                    {getText('location')}
                  </p>
                  <Link
                    href="https://maps.app.goo.gl/5zB2rmjcLRwPEYfj6"
                    className="btn btn-sm bg-maroon hover:bg-maroon-light border-none text-white mt-2 gap-1 normal-case rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Map className="h-4 w-4" /> {getText('getDirections')}
                  </Link>
                </div>
              </div>

              <div className="alert bg-[#f5f3ee] border-[#f5f3ee] rounded-xl">
                {/* <Shirt className="h-4 w-4 text-maroon" /> */}
                <div>
                  <h3 className="font-medium text-maroon text-sm">
                    {getText('dressCode')}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <div
                      className="w-6 h-6 rounded-full bg-[#761213]"
                      title="Maroon"
                    ></div>
                    <div
                      className="w-6 h-6 rounded-full bg-[#beb09b]"
                      title="Taupe"
                    ></div>
                    <div
                      className="w-6 h-6 rounded-full bg-[#b0b1b0]"
                      title="Gray"
                    ></div>
                    <div
                      className="w-6 h-6 rounded-full bg-[#ec8b8a]"
                      title="Coral"
                    ></div>
                    <div
                      className="w-6 h-6 rounded-full bg-[#d68471]"
                      title="Dark Coral"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="card bg-white shadow-md mb-10 overflow-hidden border-2 border-white/20 rounded-2xl">
          <div className="h-2 bg-gradient-to-r from-maroon to-coral-dark"></div>
          <div className="card-body p-4">
            <h2 className="card-title text-maroon text-lg mb-2">{getText('questions')}</h2>
            <p className="text-sm text-maroon mb-3">
              {getText('questionsDescription')}
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="tel:0626541493"
                className="btn btn-md bg-maroon hover:bg-maroon-light border-none text-white normal-case rounded-full"
              >
                {getText('callPraew')}
              </a>
              <a
                href="tel:0979639929"
                className="btn btn-md bg-coral-dark hover:bg-coral border-none text-white normal-case rounded-full"
              >
                {getText('callBank')}
              </a>
            </div>
          </div>
        </div>
        <div className="pb-6 md:pb-0">
          <PromotionalBanner />
        </div>
      </main>
    </div>
  );
}
