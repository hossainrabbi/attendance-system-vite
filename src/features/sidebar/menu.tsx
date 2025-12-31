import React from "react";
import type { UserRole } from "../auth/authSlice";
import CourseIcon from "./_icons/CourseIcon";
import DashboardIcon from "./_icons/DashboardIcon";
import SettingIcon from "./_icons/SettingIcon";
import UserIcon from "./_icons/UserIcon";

export interface MenuItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
  path?: string;
  children?: MenuItem[];
  roles?: UserRole[]; // Optional: if undefined, accessible by all
}

export const menuItems: MenuItem[] = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: <DashboardIcon />,
    path: "/dashboard",
    roles: ["ADMIN"],
  },
  {
    key: "courses",
    label: "Courses",
    icon: <CourseIcon />,
    path: "/courses",
    roles: ["ADMIN"],
  },
  {
    key: "users",
    label: "User Management",
    icon: <UserIcon />,
    children: [
      {
        key: "users-list",
        label: "All Users",
        path: "/users",
        roles: ["ADMIN"],
      },
      {
        key: "users-roles",
        label: "Roles & Permissions",
        path: "/users/roles",
        roles: ["ADMIN"],
      },
    ],
  },
  {
    key: "settings",
    label: "Settings",
    icon: <SettingIcon />,
    children: [
      {
        key: "settings-general",
        label: "General",
        path: "/settings/general",
        roles: ["ADMIN"],
      },
      {
        key: "settings-security",
        label: "Security",
        path: "/settings/security",
        roles: ["ADMIN"],
      },
    ],
  },
];
