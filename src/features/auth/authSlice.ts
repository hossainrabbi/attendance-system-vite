import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UserRole = "ADMIN" | "USER";

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

interface AuthState {
  user: User | null;
}

// Mock initial user for development
const initialState: AuthState = {
  user: null,
  // user: {
  //   id: "1",
  //   name: "Admin User",
  //   email: "admin@example.com",
  //   role: "ADMIN",
  // },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
