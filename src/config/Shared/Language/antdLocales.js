import enUS from 'antd/es/locale/en_US';
import esES from 'antd/es/locale/es_ES';
import { languages } from '../Constants';

const antdLocales = (language) => {
  const { en, es } = languages;
  switch (language) {
    case en:
      return enUS;
    case es:
    default:
      return esES;
  }
};

export default antdLocales;
