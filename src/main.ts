import "./styles/safe_area.scss";
import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import router from "./plugins/router";
import loader from "./plugins/loader";
import error from "./plugins/error";
import i18n from "./plugins/i18n";
loadFonts();

createApp(App)
  .use(vuetify)
  .use(router)
  .use(i18n)
  .use(loader)
  .use(error)
  .mount("#app");
