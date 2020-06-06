import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';
import bg from './translations/bg';
import ca from './translations/ca';
import de from './translations/de';
import en from './translations/en';
import es from './translations/es';
import fr from './translations/fr';
import hr from './translations/hr';
import id from './translations/id';
import is from './translations/is';
import it from './translations/it';
import ja from './translations/ja';
import ms from './translations/ms';
import nl from './translations/nl';
import pl from './translations/pl';
import pt from './translations/pt';
import ru from './translations/ru';
import tr from './translations/tr';
import zhCN from './translations/zhCN';
import zhTW from './translations/zhTW';

const resources = {
  bg: { translation: bg },
  ca: { translation: ca },
  de: { translation: de },
  en: { translation: en },
  es: { translation: es },
  fr: { translation: fr },
  hr: { translation: hr },
  id: { translation: id },
  is: { translation: is },
  it: { translation: it },
  ja: { translation: ja },
  ms: { translation: ms },
  nl: { translation: nl },
  pl: { translation: pl },
  pt: { translation: pt },
  ru: { translation: ru },
  tr: { translation: tr },
  zh: { translation: zhCN },
  'zh-CN': { translation: zhCN },
  'zh-TW': { translation: zhTW },
  'zh-HK': { translation: zhTW },
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
