import { default as i18n } from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      ca: {
        translation: {
          'app.description':'Un forum per trovar consens',
        }
      },

      es: {
        translation: {
          'app.description':'Un foro para encontrar consenso',
        }
      }
    },
    lng: "ca",
    fallbackLng: "es",

    interpolation: {
      escapeValue: false 
    }
  });

