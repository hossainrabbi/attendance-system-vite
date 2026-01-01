import { logout } from "@/app/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/app/store";

/**
 * Custom hook to access authentication state and actions.
 */
export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { user, accessToken, refreshToken } = useAppSelector(
    (state) => state.auth
  );

  const handleLogout = () => {
    dispatch(logout());
  };

  return {
    user,
    accessToken,
    refreshToken,
    isAuthenticated: !!user && !!accessToken,
    logout: handleLogout,
  };
};
