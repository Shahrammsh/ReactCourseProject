import  i18n  from "i18next";
import { initReactI18next } from "react-i18next";

import {resources} from './utils/utilities'

/*const resources = {
    en: {
      translation: translationEN,
    },
    fa: {
      translation: translationFA,
    },
  };
  */
//i18N Initialization

i18n.use(initReactI18next).init({
  resources,
  lng: "fa", //default language
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
