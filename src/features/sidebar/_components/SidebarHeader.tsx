interface SidebarHeaderProps {
  isCollapsed: boolean;
}

/**
 * Sidebar header component
 * Shows full title or abbreviated version based on collapse state
 */
export const SidebarHeader = ({ isCollapsed }: SidebarHeaderProps) => {
  return (
    <div className="flex h-16 items-center justify-center border-b border-gray-200">
      <h1 className="text-xl font-bold text-primary">
        {isCollapsed ? "AS" : "Attendance System"}
      </h1>
    </div>
  );
};
