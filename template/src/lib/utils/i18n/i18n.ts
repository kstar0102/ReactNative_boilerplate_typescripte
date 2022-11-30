import {initReactI18next} from 'react-i18next';
import {resources} from '@assets/locales';
import i18n, {LanguageDetectorAsyncModule} from 'i18next';

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true, // flags below detection to be async
  detect: (callback: any) => {
    callback('es_US');
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

/**
 * Config i18n for app
 */
i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es_US',

    resources,

    // have a common namespace used around the full app
    ns: ['common'],
    defaultNS: 'common',
    debug: false,

    // cache: {
    //   enabled: true
    // },

    interpolation: {
      escapeValue: false, // not needed for react as it does escape per default to prevent xss!
    },
  })
  .then(() => '');

export default i18n;
