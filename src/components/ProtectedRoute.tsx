import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectUserRole, type UserRole } from "../features/auth/authSlice";

interface ProtectedRouteProps {
  allowedRoles?: UserRole[];
  children?: React.ReactNode;
}

export const ProtectedRoute = ({
  allowedRoles,
  children,
}: ProtectedRouteProps) => {
  const userRole = useSelector(selectUserRole);

  if (!userRole) {
    // If no user is logged in, redirect to login (or home for now as we don't have login)
    return <Navigate to="/" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    // If user doesn't have required role, redirect to dashboard
    return <Navigate to="/" replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};
