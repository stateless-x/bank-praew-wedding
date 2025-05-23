# i18next Setup Documentation

## Overview
The wedding website now supports Thai and English languages using i18next. Thai is set as the primary language with automatic language detection and local storage persistence.

## Features
- 🇹🇭 Thai as primary language
- 🇺🇸 English as fallback language
- 🔄 Automatic language detection
- 💾 Language preference stored in localStorage
- 🎛️ Language switcher in navigation bar (top-right corner)
- 📱 Mobile-friendly language switching

## Files Structure

### Core i18n Files
- `lib/i18n.ts` - Main i18next configuration and translations
- `components/i18n-provider.tsx` - React provider wrapper
- `components/language-switcher.tsx` - Language switching component

### Updated Components
- `app/layout.tsx` - Wrapped with I18nProvider
- `components/navigation-bar.tsx` - Uses translations + language switcher
- `app/page.tsx` - Main page with full translation support

## How to Use Translations

### In React Components
```tsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
```

### Adding New Translation Keys
Edit `lib/i18n.ts` and add new keys to both `th` and `en` translation objects:

```typescript
const resources = {
  th: {
    translation: {
      "newKey": "ข้อความใหม่ในภาษาไทย",
      // ... other keys
    }
  },
  en: {
    translation: {
      "newKey": "New text in English",
      // ... other keys
    }
  }
};
```

## Current Translation Coverage

### Fully Translated Pages
- ✅ **Main Page** (`app/page.tsx`) - Complete translation
- ✅ **Navigation Bar** - All menu items translated

### Pages Needing Translation (Future)
- ⏳ **Venue Page** (`app/venue/page.tsx`)
- ⏳ **Q&A Page** (`app/qa/page.tsx`)
- ⏳ **Hongbao Page** (`app/hongbao/page.tsx`)
- ⏳ **Dress Code Page** (`app/dress-code/page.tsx`)

## Available Translation Keys

### Navigation
- `schedule` - ตารางงาน / Schedule
- `venue` - สถานที่ / Venue
- `gallery` - แกลเลอรี่ / Gallery
- `blessUs` - อวยพร / Bless Us
- `qa` - ถาม-ตอบ / Q&A

### Common UI
- `home`, `back`, `next`, `previous`
- `loading`, `error`, `success`
- `save`, `cancel`, `close`
- `getDirections` - ดูเส้นทาง / Get directions

### Wedding Content
- `weddingInvitation` - Main invitation text
- `blessingWall` - กำแพงคำอวยพร / Blessing Wall
- `weddingSchedule` - ตารางงานแต่งงาน / Wedding Schedule
- `hotelName` - โรงแรมโมเทียน ริเวอร์ไซด์ / MOTIEN Riverside Hotel
- And many more...

### Language Selection
- `language` - ภาษา / Language
- `thai` - ไทย / Thai
- `english` - อังกฤษ / English
- `selectLanguage` - เลือกภาษา / Select Language

## Language Switcher

The language switcher is located in the top-right corner of all pages and includes:
- 🌐 Globe icon
- 🇹🇭/🇺🇸 Flag indicators
- Dropdown menu for language selection
- Automatic preference saving

## Language Detection Priority

1. **localStorage** - Previously selected language
2. **navigator** - Browser language settings
3. **htmlTag** - HTML lang attribute
4. **Default** - Thai (th)

## Development Tips

### Testing Translations
1. Open the website
2. Click the language switcher (🌐) in top-right corner
3. Select between Thai (🇹🇭) and English (🇺🇸)
4. Verify all translated text changes properly

### Debugging
Set `debug: true` in `lib/i18n.ts` for development logging:
```typescript
i18n.init({
  // ... other config
  debug: process.env.NODE_ENV === 'development',
});
```

### Adding Translation to New Pages
1. Convert page to client component: `"use client"`
2. Import useTranslation: `import { useTranslation } from 'react-i18next';`
3. Use hook: `const { t } = useTranslation();`
4. Replace static text: `{t('translationKey')}`
5. Add translation keys to `lib/i18n.ts`

## Future Enhancements

### Potential Improvements
- [ ] Translation management interface
- [ ] Missing translation detection
- [ ] Professional translation review
- [ ] Additional languages support
- [ ] Translation loading indicators
- [ ] Pluralization support
- [ ] Date/time localization

### Contributing Translations
To add or improve translations:
1. Edit `lib/i18n.ts`
2. Update both Thai and English versions
3. Test in browser
4. Ensure consistency across the site

---

**Note**: This setup provides a solid foundation for internationalization. The current implementation focuses on Thai as the primary language with English fallback, making the wedding website accessible to both Thai and international guests. 