import {
  DashboardOutlined,
  SafetyCertificateOutlined,
  SettingOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React from "react";

export interface MenuItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
  path?: string;
  children?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: <DashboardOutlined />,
    path: "/",
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
      },
      {
        key: "users-roles",
        label: "Roles & Permissions",
        path: "/users/roles",
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
      },
      {
        key: "settings-security",
        label: "Security",
        icon: <SafetyCertificateOutlined />,
        path: "/settings/security",
      },
    ],
  },
];
