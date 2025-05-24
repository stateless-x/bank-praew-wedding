import { useParams, usePathname } from 'next/navigation';

export function useLocale() {
  const params = useParams();
  const pathname = usePathname();

  // Consistent locale detection logic
  const getLocale = (): 'th' | 'en' => {
    // First, check the URL pathname for explicit locale
    if (pathname.startsWith('/en')) {
      return 'en';
    }
    if (pathname.startsWith('/th')) {
      return 'th';
    }
    
    // Then check params
    const paramLocale = params?.locale as string;
    if (paramLocale === 'en' || paramLocale === 'th') {
      return paramLocale;
    }
    
    // Default fallback
    return 'th';
  };

  return getLocale();
} 