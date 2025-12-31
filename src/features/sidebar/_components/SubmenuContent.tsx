import { cn } from "@/lib/utils";
import { Flex } from "antd";
import { useLocation, useNavigate } from "react-router";
import type { MenuItem } from "../menu";

interface SubmenuContentProps {
  items: MenuItem[];
}

/**
 * Renders submenu items inside a popover
 */
export const SubmenuContent = ({ items }: SubmenuContentProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-w-[160px] space-y-1">
      {items.map((child) => {
        const isActive = child.path === location.pathname;
        return (
          <Flex
            align="center"
            gap={12}
            key={child.key}
            onClick={() => child.path && handleClick(child.path)}
            className={cn(
              "px-4 py-2 h-10 cursor-pointer transition-colors duration-200 rounded-md",
              isActive ? "bg-primary text-white" : "hover:bg-light text-header"
            )}
          >
            {child.icon && <span className="text-base">{child.icon}</span>}
            <span className="text-sm">{child.label}</span>
          </Flex>
        );
      })}
    </div>
  );
};
