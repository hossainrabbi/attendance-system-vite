import {
  DashboardOutlined,
  SafetyCertificateOutlined,
  SettingOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React from "react";
import type { UserRole } from "../auth/authSlice";

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
    icon: <DashboardOutlined />,
    path: "/",
    roles: ["ADMIN"],
  },
  {
    key: "users",
    label: "User Management",
    icon: <UserOutlined />,
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
    key: "employees",
    label: "Employees",
    icon: <TeamOutlined />,
    path: "/employees",
  },
  {
    key: "settings",
    label: "Settings",
    icon: <SettingOutlined />,
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
        icon: <SafetyCertificateOutlined />,
        path: "/settings/security",
        roles: ["ADMIN"],
      },
    ],
  },
];
