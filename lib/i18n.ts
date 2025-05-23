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
      "blessings": "คำอวยพร",
      "qa": "ถาม-ตอบ",
      
      // Common
      "home": "หน้าแรก",
      "back": "ย้อนกลับ",
      "next": "ถัดไป",
      "previous": "ก่อนหน้า",
      "loading": "กำลังโหลด...",
      "error": "เกิดข้อผิดพลาด",
      "success": "สำเร็จ",
      "save": "บันทึก",
      "cancel": "ยกเลิก",
      "close": "ปิด",
      "getDirections": "ดูเส้นทาง",
      
      // Wedding specific
      "wedding": "งานแต่ง",
      "bride": "เจ้าสาว",
      "groom": "เจ้าบาว",
      "weddingDateLabel": "วันจัดงาน",
      "weddingTime": "เวลางาน",
      "ceremony": "พิธีการ",
      "reception": "งานเลี้ยงฉลอง",
      "address": "ที่อยู่สถานที่จัดงาน",
      "map": "ดูแผนที่",
      "rsvp": "ตอบรับคำเชิญ",
      "dress-code": "ธีมการแต่งกาย",
      "gifts": "ของขวัญแทนใจ",
      
      // Main page content
      "weddingInvitation": "เราสองคนอยากชวนคุณมาร่วมแบ่งปันความสุขในวันสำคัญของเรา ❤️",
      "blessingWall": "มุมบอกรัก",
      "blessingWallDescription": "เขียนข้อความซึ้งๆ หรือเรื่องน่ารักที่อยากบอกแพรวกับแบงค์ ให้เป็นความทรงจำดีๆ ในวันแต่งงานนี้ 💌",
      "sendYourBlessing": "ส่งคำอวยพร",
      "weddingSchedule": "กำหนดการงานแต่ง",
      "weddingDate": "วันอาทิตย์ที่ 25 พฤษภาคม 2568",
      "khanMakParade": "7:00 น. — ขบวนขันหมาก",
      "engagementCeremony": "ต่อด้วยพิธีหมั้นและพิธีชงชา",
      "weddingCocktail": "11:30 น. — งานเลี้ยงค็อกเทล",
      "afterParty": "ตามด้วย After Party 🎉",
      "hotelName": "โรงแรมโมเทียน ริเวอร์ไซด์",
      "ballroom": "แกรนด์ บอลรูม ชั้น 4",
      "location": "ถนนพระราม 3 กรุงเทพฯ",
      "dressCode": "Dress Code:",
      "questions": "มีคำถามไหม?",
      "questionsDescription": "ถ้ามีคำถามหรืออยากสอบถามเพิ่มเติม ติดต่อเราได้เลยนะ:",
      "callPraew": "โทรหาแพรว: 062-654-1493",
      "callBank": "โทรหาแบงค์: 097-963-9929",

      // Venue page
      "weddingVenue": "สถานที่จัดงาน",
      "findYourWay": "ค้นหาเส้นทางสู่วันพิเศษของเรา",
      "venueInformation": "ข้อมูลสถานที่จัดงาน",
      "parkingInformation": "ข้อมูลการจอดรถ:",
      "parkingDescription": "มีที่จอดรถฟรีที่โรงแรม กรุณาตามป้าย \"Wedding Guest Parking\"",
      "mapDirections": "แผนที่และเส้นทาง",
      "openGoogleMaps": "เปิดใน Google Maps",
      "openAppleMaps": "เปิดใน Apple Maps",
      "gettingThere": "การเดินทาง",
      "byCar": "โดยรถยนต์",
      "byCarDescription": "จากใจกลางกรุงเทพฯ มุ่งหน้าไปตามถนนพระราม 3 สู่ริมแม่น้ำ โรงแรมโมเทียน ริเวอร์ไซด์จะอยู่ทางขวามือ งานจัดที่แกรนด์ บอลรูม ชั้น 4",
      "byPublicTransport": "โดยขนส่งสาธารณะ",
      "byTransportDescription": "นั่ง BTS ลงสถานีช่องนนทรี แล้วต่อแท็กซี่ไปโรงแรมโมเทียน ริเวอร์ไซด์ ถนนพระราม 3",

      // Q&A page
      "questionsAnswers": "ถาม-ตอบ",
      "everythingToKnow": "ทุกสิ่งที่คุณต้องรู้เกี่ยวกับวันพิเศษของเรา",
      "frequentlyAskedQuestions": "คำถามที่ถามบ่อย",
      "whatShouldIWear": "ควรแต่งตัวอย่างไร?",
      "dressingGuidance": "กรุณาแต่งตัวตามธีมสีของงานแต่ง:",
      "maroon": "เลือดหมู",
      "taupe": "น้ำตาลอ่อน", 
      "gray": "เทา",
      "coral": "ส้มอ่อน",
      "darkCoral": "ส้มเข้ม",
      "formalAttire": "เสื้อผ้าแบบเป็นทางการหรือกึ่งทางการ สูทหรือชุดที่คุณสบายใจ ยินดีรับทุกแบบ หลีกเลี่ยงสีขาว (เหลือไว้ให้เจ้าสาว) และชุดสีดำทั้งตัว",
      "giftRegistry": "มีรายการของขวัญไหม?",
      "presenceIsPresent": "การมาร่วมงานของคุณคือของขวัญที่ดีที่สุดแล้ว! แต่หากคุณต้องการให้ของขวัญ เรามีตัวเลือกซองแดงดิจิทัลด้วย",
      "sendDigitalEnvelope": "ส่งซองแดงดิจิทัล",
      "parkingAtVenue": "มีที่จอดรถที่งานไหม?",
      "yesParking": "มีค่ะ มีที่จอดรถฟรีที่โรงแรม",
      "venueDetails": "รายละเอียดสถานที่",
      "canBringPlusOne": "พาแฟนมาได้ไหม?",
      "plusOneWelcome": "ได้เลยค่ะ! เรายินดีให้คุณพาคนพิเศษมาด้วย 🤝",
      "eventStyle": "งานนี้จัดแบบไหน?",
      "cocktailStyle": "เราจัดงานแบบค็อกเทลปาร์ตี้ 🥂",
      "stillHaveQuestions": "ยังมีคำถามอีกไหม?",
      "needAssistance": "หากคุณมีคำถามอื่นๆ หรือต้องการความช่วยเหลือ กรุณาติดต่อเราได้:",

      // Hongbao page
      "anySupport": "ขอบคุณทุกความช่วยเหลือ 💖",
      "blessingsAndSupport": "คุณสามารถส่งคำอวยพรและซองแดงดิจิทัลเพื่อให้กำลังใจเราได้!",
      "sendBlessing": "ส่งคำอวยพร",
      "digitalEnvelope": "ซองแดงดิจิทัล",
      "yourName": "ชื่อของคุณ",
      "yourMessage": "ข้อความของคุณ",
      "writeMessage": "เขียนข้อความอวยพรหรือคำคล้องจองที่อยากฝากถึงแพรวกับแบงค์...",
      "preview": "ดูตัวอย่าง",
      "missingInformation": "ข้อมูลไม่ครบ",
      "fillNameMessage": "กรุณากรอกชื่อและข้อความของคุณ",
      "blessingSent": "ส่งคำอวยพรแล้ว!",
      "messageDelivered": "ข้อความของคุณได้ส่งถึงแพรวและแบงค์แล้ว",
      "confirmBlessing": "ยืนยันการส่งคำอวยพร",
      "messageSendAs": "ข้อความจะถูกส่งในชื่อ:",
      "confirmSend": "ยืนยันการส่ง",
      "failedToSend": "ส่งข้อความไม่สำเร็จ",
      
      // Language
      "language": "ภาษา",
      "thai": "ไทย",
      "english": "English",
      "selectLanguage": "เลือกภาษา"
    }
  },
  en: {
    translation: {
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
      "callBank": "Call Bank: 097-963-9929",

      // Venue page
      "weddingVenue": "Wedding Venue",
      "findYourWay": "Find your way to our special day",
      "venueInformation": "Venue Information",
      "parkingInformation": "Parking Information:",
      "parkingDescription": "Free parking is available at the hotel. Please follow signs for \"Wedding Guest Parking\".",
      "mapDirections": "Map & Directions",
      "openGoogleMaps": "Open in Google Maps",
      "openAppleMaps": "Open in Apple Maps",
      "gettingThere": "Getting There",
      "byCar": "By Car",
      "byCarDescription": "From downtown Bangkok, head along Rama 3 Road towards the riverside. The MOTIEN Riverside Hotel will be on your right. The venue is located in the Grand Ballroom on the 4th Floor.",
      "byPublicTransport": "By Public Transport",
      "byTransportDescription": "Take the BTS to Chong Nonsi Station, then continue by taxi to the MOTIEN Riverside Hotel on Rama 3 Road.",

      // Q&A page
      "questionsAnswers": "Questions & Answers",
      "everythingToKnow": "Everything you need to know about our special day",
      "frequentlyAskedQuestions": "Frequently Asked Questions",
      "whatShouldIWear": "What should I wear?",
      "dressingGuidance": "Please dress in the wedding colors:",
      "maroon": "Maroon",
      "taupe": "Taupe",
      "gray": "Gray",
      "coral": "Coral",
      "darkCoral": "Dark Coral",
      "formalAttire": "Formal or semi-formal clothing is perfect. Suits or any outfit you're comfortable in are welcome. Avoid white (reserved for the bride) and all-black outfits.",
      "giftRegistry": "Do you have a gift registry?",
      "presenceIsPresent": "Your presence is our present! However, if you wish to give a gift, we also have a digital hongbao (red envelope) option too.",
      "sendDigitalEnvelope": "Send Digital Envelope",
      "parkingAtVenue": "Is there parking at the venue?",
      "yesParking": "Yes, free parking is available at the hotel.",
      "venueDetails": "Venue Details",
      "canBringPlusOne": "Can I bring a plus one?",
      "plusOneWelcome": "Of course! We'd love to have you bring a plus one. 🤝",
      "eventStyle": "What's the style of the event you are hosting?",
      "cocktailStyle": "We are hosting a cocktail-style celebration 🥂",
      "stillHaveQuestions": "Still Have Questions?",
      "needAssistance": "If you have any other questions or need assistance, please don't hesitate to contact us:",

      // Hongbao page
      "anySupport": "Any kind of support is appreciated 💖",
      "blessingsAndSupport": "You can send your blessings and a digital envelope to support us!",
      "sendBlessing": "Send Blessing",
      "digitalEnvelope": "Digital Envelope",
      "yourName": "Your Name",
      "yourMessage": "Your Message",
      "writeMessage": "Write a blessing message or inside joke for Praew & Bank...",
      "preview": "Preview",
      "missingInformation": "Missing information",
      "fillNameMessage": "Please fill in your name and message",
      "blessingSent": "Blessing sent!",
      "messageDelivered": "Your message has been delivered to Praew & Bank",
      "confirmBlessing": "Confirm Your Blessing",
      "messageSendAs": "Your message will be sent as:",
      "confirmSend": "Confirm Send",
      "failedToSend": "Failed to send your message",
      
      // Language
      "language": "Language",
      "thai": "Thai",
      "english": "English",
      "selectLanguage": "Select Language"
    }
  }
};

// Simple function to get language from URL
function getLanguageFromURL(): string {
  if (typeof window === 'undefined') return 'th';
  
  const path = window.location.pathname;
  const segments = path.split('/');
  const locale = segments[1];
  
  return ['th', 'en'].includes(locale) ? locale : 'th';
}

// Initialize i18n
i18n.use(initReactI18next).init({
  resources,
  lng: getLanguageFromURL(),
  fallbackLng: 'th',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n; 