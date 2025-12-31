import { type ReactNode } from "react";
import type { UserRole } from "./features/auth/authSlice";
import Courses from "./pages/Courses";
import { Dashboard } from "./pages/Dashboard";
import { Employees } from "./pages/Employees";
import { GeneralSettings } from "./pages/GeneralSettings";
import { Roles } from "./pages/Roles";
import { SecuritySettings } from "./pages/SecuritySettings";
import Users from "./pages/Users";
import Login from "./pages/auth/Login";

export interface AppRoute {
  path: string;
  element: ReactNode;
  roles?: UserRole[];
  index?: boolean;
}

export const authRoutes: AppRoute[] = [
  {
    path: "login",
    element: <Login />,
  },
];

export const publicRoutes: AppRoute[] = [
  {
    path: "/",
    element: "Hello",
    index: true,
  },
];

export const sidebarRoutes: AppRoute[] = [
  // Sidebar Routes
  {
    path: "dashboard",
    element: <Dashboard />,
    roles: ["ADMIN"],
  },
  {
    path: "courses",
    element: <Courses />,
    roles: ["ADMIN"],
  },
  {
    path: "users",
    element: <Users />,
    roles: ["ADMIN"],
  },
  {
    path: "users/roles",
    element: <Roles />,
    roles: ["ADMIN"],
  },
  {
    path: "employees",
    element: <Employees />,
  },
  {
    path: "settings/general",
    element: <GeneralSettings />,
    roles: ["ADMIN"],
  },
  {
    path: "settings/security",
    element: <SecuritySettings />,
    roles: ["ADMIN"],
  },
];
