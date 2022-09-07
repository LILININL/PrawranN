import AsyncStorage from '@react-native-async-storage/async-storage';
import dayjs from 'dayjs';
import 'dayjs/locale/th';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en';
import th from './th';

export const AVAILABLE_LANGUAGES = {
  en,
  th,
};

// fallback for default language
const FALL_BACK_LANGUAGE = 'th';

const languageDetector: any = {
  type: 'languageDetector',
  async: true,
  init: () => {
    /* use services and options */
  },
  detect: async function (callback: any) {
    try {
      // get current language from AsyncStorage
      const currentLang = await AsyncStorage.getItem('APP_LANG');

      // if current language, set it to i18n, else set fallback language
      if (currentLang) {
        // set i18n language to dayjs locale
        dayjs.locale(currentLang);
        return callback(currentLang);
      } else {
        // set i18n language to dayjs locale
        dayjs.locale(FALL_BACK_LANGUAGE);
        return callback(FALL_BACK_LANGUAGE);
      }
    } catch (error) {
      // set i18n language using fallback language

      // set i18n language to dayjs locale
      dayjs.locale(FALL_BACK_LANGUAGE);
      callback(FALL_BACK_LANGUAGE);
    }
  },
  cacheUserLanguage: (lng: string) => AsyncStorage.setItem('APP_LANG', lng),
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources: AVAILABLE_LANGUAGES,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
    defaultNS: 'common',
    fallbackLng: FALL_BACK_LANGUAGE,
  });

i18n.on('languageChanged', (lng) => dayjs.locale(lng));

export default i18n;
