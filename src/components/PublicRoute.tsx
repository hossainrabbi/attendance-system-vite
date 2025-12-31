import { useAppSelector } from "@/app/store";
import { Navigate, Outlet } from "react-router";

interface PublicRouteProps {
  children?: React.ReactNode;
}

export const PublicRoute = ({ children }: PublicRouteProps) => {
  const user = useAppSelector((state) => state.auth.user);

  if (user) {
    return <Navigate to="/" replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};
