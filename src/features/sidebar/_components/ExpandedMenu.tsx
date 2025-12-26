import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { convertToAntdMenuItems } from "../_utils/menuConverter";
import { findMenuKeysByPath, findPathByKey } from "../_utils/menuUtils";
import type { MenuItem } from "../menu";

interface ExpandedMenuProps {
  menuItems: MenuItem[];
}

/**
 * Renders the menu in expanded mode with inline submenus
 */
export const ExpandedMenu = ({ menuItems }: ExpandedMenuProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Local state for controlling which submenu is open (user interactions only)
  const [userOpenKeys, setUserOpenKeys] = useState<string[]>([]);

  // Convert menu items to Ant Design format
  const antdMenuItems = useMemo(
    () => convertToAntdMenuItems(menuItems),
    [menuItems]
  );

  // Get currently selected menu key and open keys based on route
  const { selectedKey, openKeys: routeOpenKeys } = useMemo(
    () => findMenuKeysByPath(menuItems, location.pathname),
    [location.pathname, menuItems]
  );

  // Determine which openKeys to use: route-based or user-controlled
  const effectiveOpenKeys =
    userOpenKeys.length > 0 ? userOpenKeys : routeOpenKeys;

  // Handle menu item click
  const handleMenuClick: MenuProps["onClick"] = ({ key }) => {
    const path = findPathByKey(menuItems, key);
    if (path) {
      navigate(path);
    }
  };

  // Handle submenu open/close - only one submenu open at a time
  const handleOpenChange = (keys: string[]) => {
    // Get the latest opened key
    const latestOpenKey = keys.find((key) => !effectiveOpenKeys.includes(key));

    if (latestOpenKey) {
      // Only keep the latest opened submenu
      setUserOpenKeys([latestOpenKey]);
    } else {
      // All submenus closed
      setUserOpenKeys([]);
    }
  };

  return (
    <Menu
      mode="inline"
      selectedKeys={selectedKey ? [selectedKey] : []}
      openKeys={effectiveOpenKeys}
      onOpenChange={handleOpenChange}
      onClick={handleMenuClick}
      items={antdMenuItems}
      className="border-r-0"
    />
  );
};
