import { useAuth } from "@/hooks/useAuth";
import type { AppRoute } from "@/routes";
import { Navigate } from "react-router";

interface RoleRouteSwitcherProps {
  configs: AppRoute[];
}

export const RoleRouteSwitcher = ({ configs }: RoleRouteSwitcherProps) => {
  const { user } = useAuth();

  // Find the first config that matches the user's role, or has no role restriction
  const matched = configs.find(
    (c) => !c.roles || (user && c.roles.includes(user.role))
  );

  if (!matched) {
    // If no match is found, fallback to login (or you could show an error page)
    return <Navigate to="/auth/login" replace />;
  }

  return <>{matched.element}</>;
};
