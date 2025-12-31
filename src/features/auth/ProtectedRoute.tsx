import { useAppSelector } from "@/store/store";
import { Navigate, Outlet } from "react-router";
import { type UserRole } from "./authSlice";

interface ProtectedRouteProps {
  allowedRoles?: UserRole[];
  children?: React.ReactNode;
}

export const ProtectedRoute = ({
  allowedRoles,
  children,
}: ProtectedRouteProps) => {
  const userRole = useAppSelector((state) => state.auth.user?.role);

  if (!userRole) {
    // If no user is logged in, redirect to login
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    // If user doesn't have required role, redirect to dashboard
    return <Navigate to="/" replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};
