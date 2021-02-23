import Vilang from './entries/vi-VN';
import Enlang from './entries/en-US';

export type LocaleType = 'en-US' | 'vi-VN';

export type LangType = {
  messages: Record<any, any>;
  locale: LocaleType;
};

export type AppLocalesType = {
  'en-US': LangType;
  'vi-VN': LangType;
};

const appLocales = {
  'en-US': Enlang,
  'vi-VN': Vilang,
};

export default appLocales;
