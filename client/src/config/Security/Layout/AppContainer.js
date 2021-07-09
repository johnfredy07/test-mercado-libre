import React from 'react';
import { useTranslation } from 'react-i18next';
import * as moment from 'moment';
import localization from 'moment/locale/es';
import App from './App';
import { antdLocales } from '../../Shared/Language';
import '../../Shared/Language/i18nConfig';

const AppContainer = () => {
  const { i18n } = useTranslation();
  moment.updateLocale(i18n.language, localization);

  // antdLocales: Manejo de multi idioma
  return <App language={antdLocales(i18n.language)} />;
};

export default AppContainer;
