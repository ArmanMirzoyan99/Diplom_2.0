import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['am', 'ru', 'en'],
    fallbackLng: 'am',
    debug: false,
    // Options for language detector
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    // react: { useSuspense: false },
    loadPath: () => {
      // check the domain
      const host = window.location.host;
      return (host === 'production.ltd' ? '/static/app':'') + '/static/app/static/locales/{{lng}}/{{ns}}.json';
    },
  })
  
export default i18n;