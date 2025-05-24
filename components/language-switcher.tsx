"use client"

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isChanging, setIsChanging] = useState(false);

  const languages = [
    { code: 'th', name: t('thai') || 'ไทย', flag: '🇹🇭' },
    { code: 'en', name: t('english') || 'English', flag: '🇺🇸' },
  ];

  // Use i18n.language directly for consistency with NavigationBar
  const currentLocale = i18n.language || 'th';
  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];

  console.log('🌐 LanguageSwitcher render - currentLocale:', currentLocale, 'i18n.language:', i18n.language);

  const handleLanguageChange = async (langCode: string) => {
    console.log('🔄 Language change:', currentLocale, '->', langCode);
    
    
    setIsChanging(true);
    setIsOpen(false);
    
    try {
      // Build new path
      let pathWithoutLocale = pathname;
      
      // Remove any existing locale from pathname
      if (pathname.startsWith('/th')) {
        pathWithoutLocale = pathname.substring(3) || '/';
      } else if (pathname.startsWith('/en')) {
        pathWithoutLocale = pathname.substring(3) || '/';
      }
      
      // Ensure path starts with /
      if (!pathWithoutLocale.startsWith('/')) {
        pathWithoutLocale = '/' + pathWithoutLocale;
      }
      
      // Build new path with new locale
      const newPath = `/${langCode}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
      console.log('🗂️ Navigating to:', newPath);
      
      // Change i18n language first and wait for completion
      console.log('🌍 Changing i18n language to:', langCode);
      await i18n.changeLanguage(langCode);
      console.log('✅ i18n language changed successfully');
      
      // Small delay to ensure all components have time to re-render
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Then navigate using Next.js router
      console.log('📱 Using router.push for navigation');
      router.push(newPath);
      
      // Reset changing state after navigation
      setTimeout(() => {
        setIsChanging(false);
      }, 200);
      
    } catch (error) {
      console.error('❌ Error during language change:', error);
      setIsChanging(false);
    }
  };

  const handleToggle = () => {
    if (isChanging) return;
    setIsOpen(!isOpen);
  };

  const handleLanguageClick = (langCode: string) => {
    handleLanguageChange(langCode);
  };

  return (
    <div className="relative z-50">
      <button
        onClick={handleToggle}
        disabled={isChanging}
        className={`flex items-center space-x-2 p-2 rounded-lg hover:bg-white/10 transition-colors bg-white/20 backdrop-blur-sm ${
          isChanging ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        aria-label={t('selectLanguage') || 'Select Language'}
        type="button"
      >
        <Globe className={`w-4 h-4 text-white ${isChanging ? 'animate-spin' : ''}`} />
        <span className="text-sm font-medium text-white">{currentLanguage.flag}</span>
      </button>

      {isOpen && !isChanging && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-[100]" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-[200] min-w-[120px]">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageClick(language.code)}
                disabled={isChanging}
                className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                  language.code === currentLocale ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                } cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
                type="button"
              >
                <span className="text-lg">{language.flag}</span>
                <span className="text-sm font-medium">{language.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
} 