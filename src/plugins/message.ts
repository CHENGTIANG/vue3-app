import { reactive, ref, Ref, inject, App } from "vue";
export const messagesData = reactive<
  Ref<{
    message?: string;
    location?: any;
    type?: string;
  }>[]
>([]);

const messageKey = Symbol("message");
const getErrorMessage = (error: Error): string => {
  return error?.message;
};

type ShowErrorMessage = (error: Error) => void;
type GetErrorMessage = (error: Error) => string;

export default {
  install(app: App, options: { duration?: number; location: string }) {
    const showErrorMessage: ShowErrorMessage = (error: Error) => {
      const message = ref({
        location: options?.location,
        message: getErrorMessage(error),
        type: "error",
      });
      messagesData.push(message);
      setTimeout(() => {
        const index = messagesData.findIndex((ele) => ele === message);
        if (index !== -1) messagesData.splice(index, 1);
      }, options?.duration || 3000);
    };

    const $message = {
      error: showErrorMessage,
    };
    app.provide(messageKey, {
      $message,
      getErrorMessage,
      showErrorMessage,
    });
    app.config.globalProperties.$getErrorMessage = getErrorMessage;
    app.config.globalProperties.$showErrorMessage = showErrorMessage;
    app.config.globalProperties.$message = $message;
  },
};

export function useMessage() {
  return inject(messageKey) as {
    showErrorMessage: ShowErrorMessage;
    getErrorMessage: GetErrorMessage;
    $message: {
      error: ShowErrorMessage;
    };
  };
}
