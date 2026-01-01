import { ENV } from "@/config/globalConfig";
import { configureStore } from "@reduxjs/toolkit";
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import confirmReducer from "../features/modal/confirmSlice";
import sidebarReducer from "../features/sidebar/sidebarSlice";
import { apiService } from "./apis/api";
import authReducer from "./features/auth/authSlice";
import { invalidateAllTags } from "./features/middlewares/invalidate";

export const store = configureStore({
  reducer: {
    [apiService.reducerPath]: apiService.reducer,
    sidebar: sidebarReducer,
    confirm: confirmReducer,
    auth: authReducer,
  },
  devTools: ENV.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(apiService.middleware)
      .concat(invalidateAllTags([apiService])),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
/**
 * Typed versions of Redux hooks
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
