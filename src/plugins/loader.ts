import { reactive, App } from "vue";
const loader = reactive<{ loading: boolean; message?: string | null }>({
  loading: false,
  message: null,
});
export default {
  install(app: App, options: { message?: string }) {
    // 配置此应用
    app.provide("loader", loader);
    app.config.globalProperties.$showLoading = (message?: string) => {
      loader.loading = true;
      loader.message = message || options?.message;
    };
    app.config.globalProperties.$hideLoading = () => {
      loader.loading = false;
    };
  },
};
