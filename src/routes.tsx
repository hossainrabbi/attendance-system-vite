import React from "react";
import type { UserRole } from "./features/auth/authSlice";
import { Dashboard } from "./pages/Dashboard";
import { Employees } from "./pages/Employees";
import { GeneralSettings } from "./pages/GeneralSettings";
import { Login } from "./pages/Login";
import { Roles } from "./pages/Roles";
import { SecuritySettings } from "./pages/SecuritySettings";
import { Users } from "./pages/Users";

export type RouteLayout = "admin" | "auth";

export interface AppRoute {
  path: string;
  element: React.ReactNode;
  roles?: UserRole[]; // Optional: if undefined, accessible by all (authenticated)
  index?: boolean;
  layout: RouteLayout;
}

export const routes: AppRoute[] = [
  // Auth Routes
  {
    path: "login",
    element: <Login />,
    layout: "auth",
  },
  // Admin Routes
  {
    path: "/",
    element: <Dashboard />,
    index: true,
    layout: "admin",
  },
  {
    path: "users",
    element: <Users />,
    roles: ["ADMIN"],
    layout: "admin",
  },
  {
    path: "users/roles",
    element: <Roles />,
    roles: ["ADMIN"],
    layout: "admin",
  },
  {
    path: "employees",
    element: <Employees />,
    layout: "admin",
  },
  {
    path: "settings/general",
    element: <GeneralSettings />,
    roles: ["ADMIN"],
    layout: "admin",
  },
  {
    path: "settings/security",
    element: <SecuritySettings />,
    roles: ["ADMIN"],
    layout: "admin",
  },
];
