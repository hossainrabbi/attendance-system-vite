import { configureStore } from "@reduxjs/toolkit";
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import confirmReducer from "../features/modal/confirmSlice";
import sidebarReducer from "../features/sidebar/sidebarSlice";
import authReducer from "./features/auth/authSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    confirm: confirmReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
/**
 * Typed versions of Redux hooks
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
