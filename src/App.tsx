import { Navigate, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { PublicRoute } from "./components/PublicRoute";
import { AdminLayout } from "./layouts/AdminLayout";
import { AuthLayout } from "./layouts/AuthLayout";
import { routes } from "./routes";

export default function App() {
  const adminRoutes = routes.filter((r) => r.layout === "admin");
  const authRoutes = routes.filter((r) => r.layout === "auth");

  return (
    <Routes>
      {/* Public/Auth Routes */}
      <Route
        element={
          <PublicRoute>
            <AuthLayout />
          </PublicRoute>
        }
      >
        {authRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>

      {/* Protected/Admin Routes */}
      <Route
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        {adminRoutes.map((route) => {
          // If route has specific roles, wrap in another ProtectedRoute layer
          const element = route.roles ? (
            <ProtectedRoute allowedRoles={route.roles}>
              {route.element}
            </ProtectedRoute>
          ) : (
            route.element
          );

          return (
            <Route
              key={route.path}
              index={route.index}
              path={route.index ? undefined : route.path}
              element={element}
            />
          );
        })}
      </Route>

      {/* Catch-all redirect */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
