import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  th: {
    translation: {
      // Navigation
      "schedule": "กำหนดการ",
      "venue": "สถานที่จัดงาน",
      "gallery": "แกลเลอรี",
      "hongbao": "ซองแดง",
      "blessings": "คำอวยพรจากใจ",
      "qa": "ถาม-ตอบ",

      // Common
      "home": "หน้าแรก",
      "back": "ย้อนกลับ",
      "next": "ถัดไป",
      "previous": "ก่อนหน้า",
      "loading": "กำลังโหลด...",
      "error": "เกิดข้อผิดพลาด",
      "success": "เรียบร้อยแล้ว",
      "save": "บันทึก",
      "cancel": "ยกเลิก",
      "close": "ปิดหน้าต่าง",
      "getDirections": "เปิดแผนที่",

      // Wedding specific
      "wedding": "งานแต่ง",
      "bride": "เจ้าสาว",
      "groom": "เจ้าบ่าว",
      "weddingDateLabel": "วันจัดงาน",
      "weddingTime": "เวลาจัดงาน",
      "ceremony": "พิธีการ",
      "reception": "งานเลี้ยงฉลอง",
      "address": "ที่อยู่สถานที่จัดงาน",
      "map": "ดูแผนที่",
      "rsvp": "ตอบรับคำเชิญ",
      "dress-code": "ธีมการแต่งกาย",
      "gifts": "ของขวัญแทนใจ",

      // Main page content
      "weddingInvitation": "เราสองคนอยากชวนคุณมาร่วมแบ่งปันความสุขในวันสำคัญของเรา ❤️",
      "blessingWall": "มุมคำอวยพร",
      "blessingWallDescription": "เขียนข้อความซึ้งๆ หรือเรื่องน่ารักที่อยากบอกแพรว & แบงค์ ให้เป็นความทรงจำดีๆ ในวันแต่งงานนี้ 💌",
      "sendYourBlessing": "ส่งคำอวยพร",
      "weddingSchedule": "กำหนดการงานแต่ง",
      "weddingDate": "วันอาทิตย์ที่ 25 พฤษภาคม 2568",
      "khanMakParade": "7:00 น. — ขบวนขันหมาก",
      "engagementCeremony": "ต่อด้วยพิธีหมั้นและพิธีชงชา",
      "weddingCocktail": "11:30 น. — งานเลี้ยงค็อกเทล",
      "afterParty": "ต่อด้วย After Party 🎉",
      "hotelName": "โรงแรมโมเทียน ริเวอร์ไซด์",
      "ballroom": "แกรนด์ บอลรูม ชั้น 4",
      "location": "ถนนพระราม 3 กรุงเทพฯ",
      "dressCode": "Dress Code:",
      "questions": "มีคำถามไหม?",
      "questionsDescription": "ถ้ามีคำถามหรืออยากสอบถามเพิ่มเติม ติดต่อเราได้เลยนะ:",
      "callPraew": "โทรหาแพรว: 062-654-1493",
      "callBank": "โทรหาแบงค์: 097-963-9929"
    }
  },
  en: {
    translation: {
      // Full English content restored
      // Navigation
      "schedule": "Schedule",
      "venue": "Venue",
      "gallery": "Gallery",
      "hongbao": "Digital Envelope",
      "blessings": "Blessings",
      "qa": "Q&A",

      // Common
      "home": "Home",
      "back": "Back",
      "next": "Next",
      "previous": "Previous",
      "loading": "Loading...",
      "error": "Error",
      "success": "Success",
      "save": "Save",
      "cancel": "Cancel",
      "close": "Close",
      "getDirections": "Get directions",

      // Wedding specific
      "wedding": "Wedding",
      "bride": "Bride",
      "groom": "Groom",
      "weddingDateLabel": "Wedding Date",
      "weddingTime": "Wedding Time",
      "ceremony": "Ceremony",
      "reception": "Reception",
      "address": "Address",
      "map": "Map",
      "rsvp": "RSVP",
      "dress-code": "Dress Code",
      "gifts": "Gifts",

      // Main page content
      "weddingInvitation": "With joyful hearts and lots of love we invite you to celebrate our special day with us! ❤️",
      "blessingWall": "Blessing Wall",
      "blessingWallDescription": "Got a sweet message or inside joke? Share it with Praew & Bank on their special day 💌",
      "sendYourBlessing": "Send Your Blessing",
      "weddingSchedule": "Wedding Schedule",
      "weddingDate": "May 25, 2025 (Sunday)",
      "khanMakParade": "7:00 AM — Khan Mak Parade",
      "engagementCeremony": "Followed by Engagement & Tea Ceremony",
      "weddingCocktail": "11:30 AM — Wedding Cocktail",
      "afterParty": "Followed by After Party 🎉",
      "hotelName": "MOTIEN Riverside Hotel",
      "ballroom": "4th Floor, Grand Ballroom",
      "location": "Rama 3 Road, Bangkok",
      "dressCode": "Dress Code:",
      "questions": "Questions?",
      "questionsDescription": "If you have any questions or need assistance, please contact us:",
      "callPraew": "Call Praew: 062-654-1493",
      "callBank": "Call Bank: 097-963-9929"
    }
  }
};

// Initialize i18n with consistent server/client settings
i18n.use(initReactI18next).init({
  resources,
  lng: 'th', // Always start with Thai to ensure server/client consistency
  fallbackLng: 'th',
  interpolation: {
    escapeValue: false,
  },
  // Additional SSR-friendly options
  react: {
    useSuspense: false, // Disable Suspense to avoid hydration issues
  },
  initImmediate: false, // Allow for proper initialization in SSR
});

export default i18n;
