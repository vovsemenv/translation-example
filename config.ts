import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enResource from "./translation-tokens-en.json";
import ruResource from "./translation-tokens-ru.json";

const lng = localStorage.getItem("lang") || "en";

i18n.use(initReactI18next).init({
  lng,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources: {
    en: {enResource},
    ru: {ruResource},
  },
});

// eslint-disable-next-line import/no-default-export
export default i18n;
