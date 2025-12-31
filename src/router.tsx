import { Navigate, createBrowserRouter } from "react-router";
import App from "./App";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { PublicRoute } from "./components/PublicRoute";
import { AuthLayout } from "./layouts/AuthLayout";
import { SidebarLayout } from "./layouts/SidebarLayout";
import {
  authRoutes,
  publicRoutes,
  sidebarRoutes,
  type AppRoute,
} from "./routes";

const mapRoutes = (routes: AppRoute[]) =>
  routes.map(({ path, element, index, roles }) => ({
    path,
    index,
    element:
      roles && roles.length > 0 ? (
        <ProtectedRoute allowedRoles={roles}>{element}</ProtectedRoute>
      ) : (
        element
      ),
  }));

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
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);
