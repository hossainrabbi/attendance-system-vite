import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

interface SidebarToggleProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

/**
 * Sidebar collapse/expand toggle button
 */
export const SidebarToggle = ({
  isCollapsed,
  onToggle,
}: SidebarToggleProps) => {
  return (
    <div
      className="absolute bottom-4 left-0 right-0 flex justify-center cursor-pointer hover:bg-gray-100 py-2 mx-2 rounded transition-colors"
      onClick={onToggle}
    >
      {isCollapsed ? (
        <MenuUnfoldOutlined className="text-lg" />
      ) : (
        <MenuFoldOutlined className="text-lg" />
      )}
    </div>
  );
};
