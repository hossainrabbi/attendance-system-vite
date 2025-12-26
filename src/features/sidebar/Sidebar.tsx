import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { CollapsedMenu } from "./_components/CollapsedMenu";
import { ExpandedMenu } from "./_components/ExpandedMenu";
import { SidebarHeader } from "./_components/SidebarHeader";
import { SidebarToggle } from "./_components/SidebarToggle";
import { type MenuItem } from "./menu";
import { toggleSidebar } from "./uiSlice";

const { Sider } = Layout;

/**
 * Main Sidebar component
 * Renders either ExpandedMenu or CollapsedMenu based on collapse state
 */
type Props = {
  menuItems: MenuItem[];
};
export const Sidebar = ({ menuItems }: Props) => {
  const dispatch = useDispatch();
  const isCollapsed = useSelector(
    (state: RootState) => state.ui.isSidebarCollapsed
  );

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
      className="min-h-screen shadow-lg"
      theme="light"
    >
      <SidebarHeader isCollapsed={isCollapsed} />

      {/* Menu - Conditional rendering based on collapse state */}
      {isCollapsed ? (
        <CollapsedMenu menuItems={menuItems} />
      ) : (
        <ExpandedMenu menuItems={menuItems} />
      )}

      <SidebarToggle isCollapsed={isCollapsed} onToggle={handleToggle} />
    </Sider>
  );
};
