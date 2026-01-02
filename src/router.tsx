import { Navigate, createBrowserRouter } from "react-router";
import App from "./App";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { PublicRoute } from "./components/PublicRoute";
import { RoleRouteSwitcher } from "./components/RoleRouteSwitcher";
import { AuthLayout } from "./layouts/AuthLayout";
import { SidebarLayout } from "./layouts/sidebar/SidebarLayout";
import NotFound from "./pages/notFound";
import {
  authRoutes,
  publicRoutes,
  sidebarRoutes,
  type AppRoute,
} from "./routes";

const mapRoutes = (routes: AppRoute[]) => {
  // Group routes by path and index to handle multiple roles for same path
  const grouped = routes.reduce((acc, route) => {
    const key = `${route.path}-${route.index ?? false}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(route);
    return acc;
  }, {} as Record<string, AppRoute[]>);

  return Object.values(grouped).map((configs) => {
    // If only one config, use the standard ProtectedRoute logic
    if (configs.length === 1) {
      const { path, element, index, roles } = configs[0];
      return {
        path,
        index,
        element:
          roles && roles.length > 0 ? (
            <ProtectedRoute allowedRoles={roles}>{element}</ProtectedRoute>
          ) : (
            element
          ),
      };
    }

    // If multiple configs for same path, use the RoleRouteSwitcher
    const { path, index } = configs[0];
    return {
      path,
      index,
      element: (
        <ProtectedRoute>
          <RoleRouteSwitcher configs={configs} />
        </ProtectedRoute>
      ),
    };
  });
};

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      ...publicRoutes,
      {
        path: "auth",
        element: (
          <PublicRoute>
            <AuthLayout />
          </PublicRoute>
        ),
        children: authRoutes,
      },
      {
        element: (
          <ProtectedRoute>
            <SidebarLayout />
          </ProtectedRoute>
        ),
        children: mapRoutes(sidebarRoutes),
      },
      { path: "/", element: <Navigate to="/dashboard" replace /> },
      { path: "/404", element: <NotFound /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
