import { Layout } from "antd";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { CollapsedMenu } from "./_components/CollapsedMenu";
import { ExpandedMenu } from "./_components/ExpandedMenu";
import { SidebarHeader } from "./_components/SidebarHeader";
import { useMenuFilter } from "./_hooks/useMenuFilter";
import type { MenuItem } from "./menu";
import "./sidebar.css";
import { toggleSidebar } from "./sidebar.slice";

const { Sider } = Layout;

/**
 * Main Sidebar component
 * Renders either ExpandedMenu or CollapsedMenu based on collapse state
 */
type Props = {
  menuItems: MenuItem[];
};
export const Sidebar = ({ menuItems }: Props) => {
  const dispatch = useAppDispatch();
  const isCollapsed = useAppSelector(
    (state) => state.sidebar.isSidebarCollapsed
  );

  const filteredMenuItems = useMenuFilter(menuItems);

  const handleToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Sider
      collapsible
      collapsed={isCollapsed}
      onCollapse={handleToggle}
      trigger={null}
      width={250}
      className="hidden md:block min-h-screen custom-sidebar"
      theme="light"
    >
      <SidebarHeader isCollapsed={isCollapsed} onToggle={handleToggle} />

      {/* Menu - Conditional rendering based on collapse state */}
      {isCollapsed ? (
        <CollapsedMenu menuItems={filteredMenuItems} />
      ) : (
        <ExpandedMenu menuItems={filteredMenuItems} />
      )}
    </Sider>
  );
};
