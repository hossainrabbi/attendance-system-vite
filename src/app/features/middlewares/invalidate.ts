import {
  isAction,
  type Middleware,
  type UnknownAction,
} from "@reduxjs/toolkit";

type ApiSlice = {
  util: {
    resetApiState: () => UnknownAction;
  };
};

export const invalidateAllTags = (apis: readonly ApiSlice[]): Middleware => {
  return (store) => (next) => (action) => {
    if (!isAction(action)) {
      return next(action);
    }

    const isAuthReset =
      action.type === "auth/verifyUser" ||
      action.type === "auth/userLoggedOut" ||
      action.type === "auth/otpVerify";

    if (isAuthReset) {
      apis.forEach((api) => {
        store.dispatch(api.util.resetApiState());
      });
    }

    return next(action);
  };
};
