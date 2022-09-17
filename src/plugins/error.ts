import { reactive, App } from "vue";

const errorData = reactive<{ snackbar: boolean; message?: string | null }>({
  snackbar: false,
  message: null,
});

export default {
  install(app: App) {
    app.provide("error", errorData);
    const errorMessage = (error: Error): string => {
      return error?.message;
    };
    app.config.globalProperties.$errorMessage = errorMessage;
    app.config.globalProperties.$error = (error: Error) => {
      errorData.snackbar = true;
      errorData.message = errorMessage(error);
    };
  },
};
