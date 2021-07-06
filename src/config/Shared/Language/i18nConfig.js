import i18next from 'i18next';
import LngDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { languages } from '../Constants';
import esES from './translation_esES';

export default i18next
  .use(LngDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    lng: languages.default,
    resources: {
      es: { translation: esES },
    },
  });
