import { forwardRef } from "react";
import { useLocation } from "react-router-dom";
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
  ({ item, onClick, hasActiveChild, ...props }, ref) => {
    const location = useLocation();
    const isActive = item.path === location.pathname;

    return (
      <div
        ref={ref}
        onClick={onClick}
        {...props}
        className={`
          flex items-center justify-center h-12 cursor-pointer
          transition-colors duration-200
          ${
            isActive || hasActiveChild
              ? "bg-primary/10 text-primary"
              : "hover:bg-gray-100"
          }
          ${props.className || ""}
        `}
      >
        <span className="text-lg">{item.icon}</span>
      </div>
    );
  }
);

MenuIcon.displayName = "MenuIcon";
