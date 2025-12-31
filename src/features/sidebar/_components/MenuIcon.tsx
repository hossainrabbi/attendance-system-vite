import { cn } from "@/lib/utils";
import { Flex } from "antd";
import { forwardRef } from "react";
import { useLocation } from "react-router";
import type { MenuItem } from "../menu";

interface MenuIconProps extends React.HTMLAttributes<HTMLDivElement> {
  item: MenuItem;
  onClick?: () => void;
  hasActiveChild?: boolean;
}

/**
 * Reusable menu icon component
 * Handles active state styling
 */
export const MenuIcon = forwardRef<HTMLDivElement, MenuIconProps>(
  ({ item, onClick, hasActiveChild, className, ...props }, ref) => {
    const location = useLocation();
    const isActive = item.path === location.pathname;

    return (
      <Flex
        justify="center"
        align="center"
        ref={ref}
        onClick={onClick}
        {...props}
        className={cn(
          "h-11 w-12 rounded-md cursor-pointer transition-colors duration-200",
          isActive || hasActiveChild
            ? "bg-primary text-white"
            : "hover:bg-light text-header",
          className
        )}
      >
        <span className="text-lg">{item.icon}</span>
      </Flex>
    );
  }
);

MenuIcon.displayName = "MenuIcon";
