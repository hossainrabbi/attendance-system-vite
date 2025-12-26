import { Navigate, Route, Routes } from "react-router-dom";
import { AdminLayout } from "./layouts/AdminLayout";
import { Dashboard } from "./pages/Dashboard";
import { Employees } from "./pages/Employees";
import { GeneralSettings } from "./pages/GeneralSettings";
import { Roles } from "./pages/Roles";
import { SecuritySettings } from "./pages/SecuritySettings";
import { Users } from "./pages/Users";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="users/roles" element={<Roles />} />
        <Route path="employees" element={<Employees />} />
        <Route path="settings/general" element={<GeneralSettings />} />
        <Route path="settings/security" element={<SecuritySettings />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
