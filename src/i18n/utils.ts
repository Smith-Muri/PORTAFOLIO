import translations from './translations.json';

export type Language = 'es' | 'en';

export const DEFAULT_LANGUAGE: Language = 'es';

export function getLanguageFromStorage(): Language {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE;
  const stored = localStorage.getItem('language');
  return (stored as Language) || DEFAULT_LANGUAGE;
}

export function setLanguageInStorage(lang: Language): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('language', lang);
}

export function t(key: string, lang: Language = DEFAULT_LANGUAGE): string {
  const keys = key.split('.');
  let value: any = translations[lang];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key;
    }
  }
  
  return typeof value === 'string' ? value : key;
}

export const languages = {
  es: { name: 'Español', flag: '🇪🇸' },
  en: { name: 'English', flag: '🇺🇸' }
};
