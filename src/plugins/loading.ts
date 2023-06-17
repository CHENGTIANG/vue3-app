import { reactive, inject, App } from "vue";
export const loadingData = reactive<{
  loading: boolean;
  message?: string | null;
}>({
  loading: false,
  message: null,
});
const loadingKey = Symbol("loading");
type ShowLoading = (message?: string) => void;
type HideLoading = () => void;
export default {
  install(app: App, options?: { message?: string }) {
    const showLoading: ShowLoading = (message?: string) => {
      loadingData.loading = true;
      loadingData.message = message || options?.message;
    };
    const hideLoading: HideLoading = () => {
      loadingData.loading = false;
    };
    const $loading = {
      show: showLoading,
      hide: hideLoading,
    };
    // 配置此应用
    app.provide(loadingKey, {
      showLoading,
      hideLoading,
      $loading,
    });
    app.config.globalProperties.$showLoading = showLoading;
    app.config.globalProperties.$hideLoading = hideLoading;
    app.config.globalProperties.$loading = $loading;
  },
};

export function useLoading() {
  return inject(loadingKey) as {
    showLoading: ShowLoading;
    hideLoading: HideLoading;
    $loading: {
      show: ShowLoading;
      hide: HideLoading;
    };
  };
}
