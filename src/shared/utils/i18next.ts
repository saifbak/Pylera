import i18next, {LanguageDetectorAsyncModule} from 'i18next';
import {initReactI18next, useTranslation} from 'react-i18next';
import en from '../../assets/locales/en.json';
import ar from '../../assets/locales/ar.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LOCALE_PERSISTENCE_KEY = 'language';

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  detect: async (language: any) => {
    console.log('Language', language);
    // const persistedLocale = await AsyncStorage.getItem(LOCALE_PERSISTENCE_KEY);
    // if (persistedLocale) {
    //   return language('en');
    // }
    return language('ar');
  },
  init: () => {},
  cacheUserLanguage: (locale: any) => {
    AsyncStorage.setItem(LOCALE_PERSISTENCE_KEY, locale);
  },
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: {
        translation: en,
      },
      ar: {
        translation: ar,
      },
    },
  });

export default i18next;
