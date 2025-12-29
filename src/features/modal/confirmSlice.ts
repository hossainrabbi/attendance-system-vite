import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ReactNode } from "react";

export type ConfirmPayload = {
  title?: ReactNode;
  message: ReactNode;
  subMessage?: ReactNode;
  confirmText?: string;
  cancelText?: string;
  danger?: boolean;

  /** Internal promise handlers */
  resolve?: () => void;
  reject?: () => void;
};

type ConfirmState = {
  open: boolean;
  data?: ConfirmPayload;
};

const initialState: ConfirmState = {
  open: false,
};

const confirmSlice = createSlice({
  name: "confirm",
  initialState,
  reducers: {
    openConfirm: (state, action: PayloadAction<ConfirmPayload>) => {
      state.open = true;
      state.data = action.payload;
    },
    closeConfirm: (state) => {
      state.open = false;
      state.data = undefined;
    },
  },
});

export const { openConfirm, closeConfirm } = confirmSlice.actions;
export default confirmSlice.reducer;
