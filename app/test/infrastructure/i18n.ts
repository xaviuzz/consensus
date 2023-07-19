import { default as i18n } from "i18next";
import { initReactI18next } from "react-i18next";
import { vi } from "vitest";

vi.mock('react-i18next', async () => {
  const reactI18next = await vi.importActual<any>('react-i18next');
  return {
    useTranslation: () => {
      return {
        t: (str: string) => str,
        i18n: {
          changeLanguage: () => new Promise(() => {}),
        },
      };
    },
    initReactI18next: reactI18next.initReactI18next,
  };
});

i18n
  .use(initReactI18next) 
  .init();

