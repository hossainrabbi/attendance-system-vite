import { type ReactNode } from "react";
import Courses from "./pages/Courses";
import { Dashboard } from "./pages/Dashboard";
import { Employees } from "./pages/Employees";
import { GeneralSettings } from "./pages/GeneralSettings";
import { Roles } from "./pages/Roles";
import { SecuritySettings } from "./pages/SecuritySettings";
import Users from "./pages/Users";
import Login from "./pages/auth/Login";
import type { UserRole } from "./types";

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
  // {
  //   path: "/",
  //   element: "Hello",
  //   index: true,
  // },
];

export const sidebarRoutes: AppRoute[] = [
  // Sidebar Routes
  {
    path: "dashboard",
    element: <Dashboard />,
    roles: ["super_admin"],
  },
  {
    path: "dashboard",
    element: <h2>Admin Dashboard</h2>,
    roles: ["super_admin"],
  },
  {
    path: "courses",
    element: <Courses />,
    roles: ["super_admin"],
  },
  {
    path: "users",
    element: <Users />,
    roles: ["super_admin"],
  },
  {
    path: "users/roles",
    element: <Roles />,
    roles: ["super_admin"],
  },
  {
    path: "employees",
    element: <Employees />,
  },
  {
    path: "settings/general",
    element: <GeneralSettings />,
    roles: ["super_admin"],
  },
  {
    path: "settings/security",
    element: <SecuritySettings />,
    roles: ["super_admin"],
  },
];
