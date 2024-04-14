// i18n.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import RNLanguageDetector from '@os-team/i18next-react-native-language-detector';
import en from '../../assets/locales/en.json';
import ar from '../../assets/locales/ar.json';

const LOCALE_PERSISTENCE_KEY = 'language';

// const languageDetector = new RNLanguageDetector(null, {
//   order: ['asyncStorage'],
//   caches: ['asyncStorage'],
// });

i18n
  .use(RNLanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {translation: en},
      ar: {translation: ar},
    },
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

AsyncStorage.getItem(LOCALE_PERSISTENCE_KEY).then(language => {
  if (language) i18n.changeLanguage(language);
});

i18n.on('languageChanged', lng => {
  AsyncStorage.setItem(LOCALE_PERSISTENCE_KEY, lng);
});

export default i18n;
