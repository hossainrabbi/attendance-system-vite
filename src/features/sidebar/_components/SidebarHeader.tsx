import LeftDoubleArrowIcon from "@/assets/icons/LeftDoubleArrowIcon";
import RightDoubleArrowIcon from "@/assets/icons/RightDoubleArrowIcon";
import { IMAGES } from "@/config/globalConfig";
import { cn } from "@/lib/utils";
import { Button, Flex } from "antd";

interface SidebarHeaderProps {
  isCollapsed: boolean;
  onToggle?: () => void;
  isMobile?: boolean;
}

/**
 * Sidebar header component
 * Shows full title or abbreviated version based on collapse state
 */
export const SidebarHeader = ({
  isCollapsed,
  isMobile,
  onToggle,
}: SidebarHeaderProps) => {
  return (
    <Flex
      align="center"
      justify={isCollapsed ? "center" : "start"}
      className={cn("h-16 px-4", isCollapsed && "px-3")}
    >
      <img
        src={isCollapsed ? IMAGES.LOGO_SM : IMAGES.LOGO}
        alt="Logo"
        className={cn("object-contain", isCollapsed ? "h-16" : "h-12")}
      />
      <Button
        size="small"
        type="default"
        shape="circle"
        icon={
          isCollapsed ? (
            <RightDoubleArrowIcon className="mt-1" />
          ) : (
            <LeftDoubleArrowIcon className="mt-1" />
          )
        }
        className={cn(
          "ml-auto absolute -right-3 top-19 border-transparent shadow-sm",
          isMobile && "hidden"
        )}
        onClick={onToggle}
      />
    </Flex>
  );
};
