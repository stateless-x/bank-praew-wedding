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

      // Language Selection
      "thai": "ไทย",
      "english": "อังกฤษ",
      "selectLanguage": "เลือกภาษา",

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
      "callBank": "โทรหาแบงค์: 097-963-9929",

      // Q&A Page
      "everythingYouNeedToKnow": "ทุกสิ่งที่คุณต้องรู้เกี่ยวกับวันพิเศษของเรา",
      "frequentlyAskedQuestions": "คำถามที่พบบ่อย",
      "whatShouldIWear": "ควรแต่งกายอย่างไร?",
      "pleaseDressInWeddingColors": "กรุณาแต่งกายด้วยสีของงานแต่งงาน:",
      "maroon": "สีแดงเข้ม",
      "taupe": "สีน้ำตาลอ่อน",
      "gray": "สีเทา",
      "coral": "สีปะการัง",
      "darkCoral": "สีปะการังเข้ม",
      "formalOrSemiFormal": "ชุดทางการหรือกึ่งทางการจะเหมาะสมมาก สูทหรือชุดใดๆ ที่คุณสบายใจก็ยินดีต้อนรับ หลีกเลี่ยงสีขาว (สงวนไว้สำหรับเจ้าสาว) และชุดสีดำทั้งหมด",
      "doYouHaveAGiftRegistry": "มีรายการของขวัญหรือไม่?",
      "yourPresenceIsOurPresent": "การมาร่วมงานของคุณคือของขวัญของเรา! อย่างไรก็ตาม หากคุณต้องการมอบของขวัญ เรายังมีตัวเลือกซองแดงดิจิทัลด้วย",
      "isThereParkingAtTheVenue": "มีที่จอดรถที่สถานที่จัดงานหรือไม่?",
      "yesFreeParking": "มีค่ะ ที่จอดรถฟรีที่โรงแรม",
      "canIBringAPlusOne": "สามารถพาเพื่อนมาด้วยได้ไหม?",
      "ofCoursePlusOne": "แน่นอน! เรายินดีต้อนรับให้คุณพาเพื่อนมาด้วย",
      "whatsTheStyleOfTheEvent": "รูปแบบของงานที่จัดคืออะไร?",
      "cocktailStyleCelebration": "เราจัดงานในรูปแบบค็อกเทล",
      "stillHaveQuestions": "ยังมีคำถามอีกไหม?",
      "ifYouHaveAnyOtherQuestions": "หากคุณมีคำถามอื่นๆ หรือต้องการความช่วยเหลือ กรุณาติดต่อเรา:",
      "sendDigitalEnvelope": "ส่งซองแดงดิจิทัล",
      "venueDetails": "รายละเอียดสถานที่",

      // Blessings Page
      "shareYourLoveAndWishes": "ส่งความรักและคำอวยพรดีๆ ให้แพรว & แบงค์",
      "yourName": "ชื่อของคุณ",
      "enterYourName": "ใส่ชื่อของคุณ",
      "yourMessage": "ข้อความของคุณ",
      "leaveBlessingsHere": "เขียนคำอวยพรที่นี่...",
      "previewAndSend": "ดูตัวอย่างและส่ง",
      "noMessagesFound": "ยังไม่มีข้อความ",
      "confirmYourBlessing": "ยืนยันคำอวยพรของคุณ",
      "previewMessageAppearance": "ดูตัวอย่างว่าข้อความของคุณจะปรากฏอย่างไร",
      "editMessage": "แก้ไขข้อความ",
      "sending": "กำลังส่ง...",
      "confirmAndSend": "ยืนยันและส่ง",
      "missingInformation": "ข้อมูลไม่ครบ",
      "pleaseFillNameAndMessage": "กรุณากรอกชื่อและข้อความ",
      "blessingSent": "ส่งคำอวยพรแล้ว!",
      "messageDeliveredToPraewBank": "ข้อความของคุณได้ส่งไปถึงแพรว & แบงค์แล้ว",
      "failedToLoadMessages": "ไม่สามารถโหลดข้อความได้",
      "failedToSendMessage": "ไม่สามารถส่งข้อความได้",

      // Venue Page
      "weddingVenue": "สถานที่จัดงานแต่งงาน",
      "findYourWayToOurSpecialDay": "ค้นหาเส้นทางไปยังวันพิเศษของเรา",
      "venueInformation": "ข้อมูลสถานที่",
      "venueName": "โรงแรมโมเทียน ริเวอร์ไซด์, แกรนด์ บอลรูม (ชั้น 4)",
      "venueAddress": "ถนนพระราม 3 กรุงเทพฯ",
      "parkingInformation": "ข้อมูลที่จอดรถ:",
      "freeParkingAvailable": "มีที่จอดรถฟรีที่โรงแรม กรุณาตามป้าย \"ที่จอดรถสำหรับแขกงานแต่งงาน\".",
      "mapAndDirections": "แผนที่และเส้นทาง",
      "openInGoogleMaps": "เปิดใน Google Maps",
      "openInAppleMaps": "เปิดใน Apple Maps",
      "gettingThere": "การเดินทาง",
      "byCar": "โดยรถยนต์",
      "byCarDirections": "จากใจกลางกรุงเทพฯ มุ่งหน้าไปตามถนนพระราม 3 ไปยังริมแม่น้ำ โรงแรมโมเทียน ริเวอร์ไซด์จะอยู่ทางขวาของคุณ สถานที่จัดงานอยู่ที่แกรนด์ บอลรูม ชั้น 4.",
      "byPublicTransport": "โดยระบบขนส่งสาธารณะ",
      "byPublicTransportDirections": "ขึ้น BTS ไปยังสถานีช่องนนทรี จากนั้นต่อแท็กซี่ไปยังโรงแรมโมเทียน ริเวอร์ไซด์บนถนนพระราม 3.",
      "contactHotelForAssistance": "หากคุณมีปัญหาในการหาสถานที่ กรุณาติดต่อพนักงานโรงแรมเพื่อขอความช่วยเหลือ."
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

      // Language Selection
      "thai": "Thai",
      "english": "English",
      "selectLanguage": "Select Language",

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

      // Q&A Page
      "everythingYouNeedToKnow": "Everything you need to know about our special day",
      "frequentlyAskedQuestions": "Frequently Asked Questions",
      "whatShouldIWear": "What should I wear?",
      "pleaseDressInWeddingColors": "Please dress in the wedding colors:",
      "maroon": "Maroon",
      "taupe": "Taupe",
      "gray": "Gray",
      "coral": "Coral",
      "darkCoral": "Dark Coral",
      "formalOrSemiFormal": "Formal or semi-formal clothing is perfect. Suits or any outfit you're comfortable in are welcome. Avoid white (reserved for the bride) and all-black outfits.",
      "doYouHaveAGiftRegistry": "Do you have a gift registry?",
      "yourPresenceIsOurPresent": "Your presence is our present! However, if you wish to give a gift, we also have a digital hongbao (red envelope) option too.",
      "isThereParkingAtTheVenue": "Is there parking at the venue?",
      "yesFreeParking": "Yes, free parking is available at the hotel.",
      "canIBringAPlusOne": "Can I bring a plus one?",
      "ofCoursePlusOne": "Of course! We'd love to have you bring a plus one.",
      "whatsTheStyleOfTheEvent": "What's the style of the event you are hosting?",
      "cocktailStyleCelebration": "We are hosting a cocktail-style celebration",
      "stillHaveQuestions": "Still Have Questions?",
      "ifYouHaveAnyOtherQuestions": "If you have any other questions or need assistance, please don't hesitate to contact us:",
      "sendDigitalEnvelope": "Send Digital Envelope",
      "venueDetails": "Venue Details",

      // Blessings Page
      "shareYourLoveAndWishes": "Share your love and good wishes with Praew & Bank",
      "yourName": "Your Name",
      "enterYourName": "Enter your name",
      "yourMessage": "Your Message",
      "leaveBlessingsHere": "Leave your blessings here..",
      "previewAndSend": "Preview & Send",
      "noMessagesFound": "No messages found",
      "confirmYourBlessing": "Confirm Your Blessing",
      "previewMessageAppearance": "Preview how your message will appear on the blessing wall",
      "editMessage": "Edit Message",
      "sending": "Sending...",
      "confirmAndSend": "Confirm & Send",
      "missingInformation": "Missing information",
      "pleaseFillNameAndMessage": "Please fill in your name and message",
      "blessingSent": "Blessing sent!",
      "messageDeliveredToPraewBank": "Your message has been delivered to Praew & Bank",
      "failedToLoadMessages": "Failed to load messages",
      "failedToSendMessage": "Failed to send your message",

      // Venue Page
      "weddingVenue": "Wedding Venue",
      "findYourWayToOurSpecialDay": "Find your way to our special day",
      "venueInformation": "Venue Information",
      "venueName": "MOTIEN Riverside Hotel, Grand Ballroom (4th Floor)",
      "venueAddress": "Rama 3 Road, Bangkok",
      "parkingInformation": "Parking Information:",
      "freeParkingAvailable": "Free parking is available at the hotel. Please follow signs for \"Wedding Guest Parking\".",
      "mapAndDirections": "Map & Directions",
      "openInGoogleMaps": "Open in Google Maps",
      "openInAppleMaps": "Open in Apple Maps",
      "gettingThere": "Getting There",
      "byCar": "By Car",
      "byCarDirections": "From downtown Bangkok, head along Rama 3 Road towards the riverside. The MOTIEN Riverside Hotel will be on your right. The venue is located in the Grand Ballroom on the 4th Floor.",
      "byPublicTransport": "By Public Transport",
      "byPublicTransportDirections": "Take the BTS to Chong Nonsi Station, then continue by taxi to the MOTIEN Riverside Hotel on Rama 3 Road.",
      "contactHotelForAssistance": "If you have any trouble finding the venue, feel free to contact the hotel staff for assistance."
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
  debug: false, // Set to true for development debugging
  
  // Additional hydration safety
  compatibilityJSON: 'v4',
  
  // Ensure consistent behavior between server and client
  load: 'languageOnly',
});

export default i18n;
