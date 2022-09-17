import { createI18n } from "vue-i18n";
const messages = {
  en: {
    message: {
      hello: "hello world",
    },
  },
  zh: {
    message: {
      hello: "你好世界",
    },
  },
};

export default createI18n({
  locale: "zh",
  fallbackLocale: "zh",
  messages,
});
