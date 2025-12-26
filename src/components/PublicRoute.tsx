import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectIsAuthenticated } from "../features/auth/authSlice";

interface PublicRouteProps {
  children?: React.ReactNode;
}

export const PublicRoute = ({ children }: PublicRouteProps) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (isAuthenticated) {
    // If user is logged in, redirect to dashboard
    return <Navigate to="/" replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};
