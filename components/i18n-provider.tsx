"use client"

import { useEffect } from 'react';
import '@/lib/i18n';

interface I18nProviderProps {
  children: React.ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  useEffect(() => {
    // Import i18n to initialize it
    import('@/lib/i18n');
  }, []);

  return <>{children}</>;
} 