import {
  toast as toastify,
  type ToastOptions,
  type TypeOptions,
} from "react-toastify";

/**
 * Toast types supported by the app
 */
export type ToastType = TypeOptions;

/**
 * Common toast options
 */
const defaultOptions: ToastOptions = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

/**
 * Show toast message
 */
function show(message: string, type: ToastType, options?: ToastOptions) {
  toastify(message, {
    ...defaultOptions,
    type,
    ...options,
  });
}

/**
 * Reusable toast API
 */
export const Toast = {
  success: (message: string, options?: ToastOptions) =>
    show(message, "success", options),

  error: (message: string, options?: ToastOptions) =>
    show(message, "error", options),

  info: (message: string, options?: ToastOptions) =>
    show(message, "info", options),

  warning: (message: string, options?: ToastOptions) =>
    show(message, "warning", options),

  loading: (message: string, options?: ToastOptions) =>
    toastify.loading(message, {
      ...defaultOptions,
      ...options,
    }),

  update: (
    toastId: string | number,
    options: ToastOptions & { message?: string }
  ) =>
    toastify.update(toastId, {
      render: options.message,
      ...options,
    }),

  dismiss: (toastId?: string | number) => toastify.dismiss(toastId),
};
