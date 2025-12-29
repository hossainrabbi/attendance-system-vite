import { useAppSelector } from "@/store/store";
import { Navigate, Outlet } from "react-router";
import { selectIsAuthenticated } from "./authSlice";

interface PublicRouteProps {
  children?: React.ReactNode;
}

export const PublicRoute = ({ children }: PublicRouteProps) => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  if (isAuthenticated) {
    // If user is logged in, redirect to dashboard
    return <Navigate to="/" replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};
