import { getLocales } from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import ta from './locales/ta.json';
import hi from './locales/hi.json';

export const resources = {
  en: { translation: en },
  ta: { translation: ta },
  hi: { translation: hi },
} as const;

export type AppLanguage = keyof typeof resources;

export const supportedLanguages = Object.keys(resources) as AppLanguage[];

export const defaultLanguage: AppLanguage = 'en';

const isSupported = (lang: string): lang is AppLanguage =>
  (supportedLanguages as string[]).includes(lang);

function detectLanguage(): AppLanguage {
  const deviceLanguage = getLocales()[0]?.languageCode ?? defaultLanguage;
  return isSupported(deviceLanguage) ? deviceLanguage : defaultLanguage;
}

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: detectLanguage(),
    fallbackLng: defaultLanguage,
    defaultNS: 'translation',
    ns: ['translation'],
    interpolation: {
      escapeValue: false,
    },
    returnNull: false,
  });
}

export function changeLanguage(language: AppLanguage) {
  return i18n.changeLanguage(language);
}

export default i18n;
