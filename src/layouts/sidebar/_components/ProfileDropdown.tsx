import DashboardIcon from "@/assets/icons/DashboardIcon";
import LogoutIcon from "@/assets/icons/LogoutIcon";
import ProfileIcon from "@/assets/icons/ProfileIcon";
import { IMAGES } from "@/config/globalConfig";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";
import { isActivePath } from "@/utils/utils";
import { Avatar, Button, Divider, Flex, Space } from "antd";
import { useNavigate } from "react-router";

const menuItems = [
  { path: "dashboard", label: "Dashboard", icon: DashboardIcon },
  { path: "profile", label: "Profile", icon: ProfileIcon },
];

export default function ProfileDropdown() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <div className="min-w-72 bg-white rounded-xl shadow-md">
      {/* User Profile Section */}
      <Flex align="center" gap={16} className="p-4">
        <Avatar src={IMAGES.avatar} size={48} className="rounded-full" />
        <div>
          <h6 className="text-theme-zinc-700 text-base font-medium">
            Hossain Rabbi
          </h6>
          <p className="text-theme-slate-500 text-base font-normal">
            +880 1736398503
          </p>
        </div>
      </Flex>

      <Divider style={{ margin: 0 }} />

      {/* Menu Items Section */}
      <div style={{ padding: "8px 0" }}>
        <Space orientation="vertical" size={0} style={{ width: "100%" }}>
          {menuItems.map((el) => {
            const isActive = isActivePath(0, el.path);

            return (
              <Button
                type="text"
                block
                key={el.path}
                onClick={() => navigate(el.path)}
                icon={
                  <span className={cn("text-text", isActive && "text-primary")}>
                    <el.icon />
                  </span>
                }
                className={cn(
                  "text-text text-base font-normal justify-start px-4 py-2 space-x-0.5",
                  isActive && "text-primary!"
                )}
              >
                {el.label}
              </Button>
            );
          })}
        </Space>
      </div>

      <Divider style={{ margin: 0 }} />

      {/* Logout Section */}
      <div style={{ padding: 16 }}>
        <Button
          type="primary"
          danger
          icon={<LogoutIcon />}
          block
          className="rounded-full text-sm font-medium"
          onClick={logout}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
