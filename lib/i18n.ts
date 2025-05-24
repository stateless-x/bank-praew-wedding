import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  th: {
    translation: {
      // Navigation
      "schedule": "กำหนดการ",
      "venue": "สถานที่",
      "gallery": "แกลเลอรี",
      "hongbao": "ใส่ซองดิจิทัล",
      "blessings": "เขียนคำอวยพร",
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
      "blessingWall": "กำแพงบอกรัก",
      "blessingWallDescription": "เขียนข้อความซึ้งๆ หรือเรื่องน่ารักที่อยากบอกแพรวกับแบงค์ ให้เป็นความทรงจำดีๆในวันพิเศษนี้ 💌",
      "sendYourBlessing": "เขียนคำอวยพร",
      "weddingSchedule": "กำหนดการ",
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
      "whatShouldIWear": "ต้องแต่งตัวแบบไหน?",
      "pleaseDressInWeddingColors": "กรุณาแต่งกายด้วยสีของงานแต่งงาน:",
      "maroon": "สีแดงเข้ม",
      "taupe": "สีน้ำตาลอ่อน",
      "gray": "สีเทา",
      "coral": "สีปะการัง",
      "darkCoral": "สีปะการังเข้ม",
      "formalOrSemiFormal": "ชุดทางการหรือกึ่งทางการจะเหมาะมาก ใส่ชุดที่สบายใจได้เลย หลีกเลี่ยงสีขาวและชุดดำล้วน",
      "doYouHaveAGiftRegistry": "ต้องเอาของขวัญมาให้พวกเราไหม?",
      "yourPresenceIsOurPresent": "คุณมางานเราก็ถือว่าเป็นของขวัญแล้ว! แต่ถ้าอยากให้อะไร สามารถใส่ซองดิจิทัลก็ได้เลยน้า~",
      "isThereParkingAtTheVenue": "มีที่จอดรถไหม?",
      "yesFreeParking": "มีจ้า ที่จอดรถฟรีที่โรงแรมเลย",
      "canIBringAPlusOne": "พาแฟนมาด้วยได้ไหม?",
      "ofCoursePlusOne": "ได้เลย! ด้วยความยินดีเลยจ้า 💃🕺",
      "whatsTheStyleOfTheEvent": "สไตล์งานเป็นยังไงอะ?",
      "cocktailStyleCelebration": "งานเราเป็นแบบค็อกเทล ชิลๆ ฟีลสนุกๆ",
      "stillHaveQuestions": "ยังสงสัยอะไรอีกป่าว?",
      "ifYouHaveAnyOtherQuestions": "มีคำถามเพิ่มเติมหรืออยากปรึกษาอะไรก็ทักมาได้เลยน้า:",
      "sendDigitalEnvelope": "ใส่ซองแบบดิจิทัล",
      "venueDetails": "รายละเอียดสถานที่",

      // Blessings Page
      "shareYourLoveAndWishes": "ส่งความรักและคำอวยพรให้แพรว & แบงค์กันนน",
      "yourName": "ชื่อของคุณ",
      "enterYourName": "ใส่ชื่อของคุณตรงนี้",
      "yourMessage": "ข้อความของคุณ",
      "leaveBlessingsHere": "เขียนคำอวยพรน่ารักๆ ตรงนี้...",
      "previewAndSend": "ดูตัวอย่างแล้วส่ง",
      "noMessagesFound": "ยังไม่มีใครเขียนเลย มาเปิดก่อนเลย~",
      "confirmYourBlessing": "ยืนยันคำอวยพรของคุณ",
      "previewMessageAppearance": "ลองดูว่าข้อความจะโชว์ยังไงบนเว็บ",
      "editMessage": "แก้ข้อความ",
      "sending": "กำลังส่ง...",
      "confirmAndSend": "ยืนยันแล้วส่งเลย",
      "missingInformation": "ยังกรอกไม่ครบเลยน้า",
      "pleaseFillNameAndMessage": "กรอกชื่อกับข้อความให้ครบก่อนน้า",
      "blessingSent": "ส่งคำอวยพรเรียบร้อยแล้ว! 🎉",
      "messageDeliveredToPraewBank": "ข้อความของคุณถึงแพรว & แบงค์เรียบร้อยแล้วนะ",
      "failedToLoadMessages": "โหลดข้อความไม่ขึ้นเลย แป๊บนะ",
      "failedToSendMessage": "ส่งไม่สำเร็จ ลองใหม่อีกทีน้า",

      // Venue Page
      "weddingVenue": "สถานที่จัดงานแต่ง",
      "findYourWayToOurSpecialDay": "มาให้ถูกวันนะ อย่าหลงล่ะ 😉",
      "venueInformation": "รายละเอียดสถานที่",
      "venueName": "โรงแรมโมเทียน ริเวอร์ไซด์, แกรนด์ บอลรูม (ชั้น 4)",
      "venueAddress": "ถนนพระราม 3 กรุงเทพฯ",
      "parkingInformation": "เรื่องที่จอดรถ:",
      "freeParkingAvailable": "มีที่จอดรถฟรีที่โรงแรม",
      "mapAndDirections": "แผนที่และเส้นทาง",
      "openInGoogleMaps": "เปิดใน Google Maps",
      "openInAppleMaps": "เปิดใน Apple Maps",
      "gettingThere": "การเดินทางมาที่นี่",
      "byCar": "ขับรถมา",
      "byCarDirections": "ขับตามถนนพระราม 3 มาทางริมน้ำ โรงแรมจะอยู่ฝั่งขวา งานจัดที่บอลรูมชั้น 4 จ้า",
      "byPublicTransport": "มาด้วยขนส่งสาธารณะ",
      "byPublicTransportDirections": "BTS ลงช่องนนทรี ต่อแท็กซี่มาตรงโรงแรมโมเทียนได้เลย",
      "contactHotelForAssistance": "หาไม่เจอโทรถามโรงแรมได้เลยน้า",

      // Hongbao/Digital Envelope Page
      "digitalEnvelope": "ใส่ซองดิจิทัล",
      "digitalEnvelopeDescription": "สแกน QR Code ด้านล่างแล้วใส่ซองดิจิทัลให้แพรว & แบงค์ได้เลยน้าา",
      "scanQRCodeToSend": "สแกน QR นี้เพื่อใส่ซองดิจิทัลให้เรา 💖",
      "promptPay": "พร้อมเพย์",
      "thankYouForSupport": "ขอบคุณมากที่ซัพพอร์ตพวกเรา 🫶",
      "paymentQRCode": "QR Code สำหรับการใส่ซอง"
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
      "contactHotelForAssistance": "If you have any trouble finding the venue, feel free to contact the hotel staff for assistance.",

      // Hongbao/Digital Envelope Page
      "digitalEnvelope": "Digital Envelope",
      "digitalEnvelopeDescription": "Scan the QR code below to send us a digital envelope!",
      "scanQRCodeToSend": "Scan the QR code below to send us a digital envelope!",
      "promptPay": "PromptPay",
      "thankYouForSupport": "Thank you for your support!\nWe really appreciate it!",
      "paymentQRCode": "QR Code for Payment"
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
  defaultNS: 'translation',
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
