import { useLocation, useNavigate } from "react-router-dom";
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
    <div className="py-2 min-w-[160px]">
      {items.map((child) => {
        const isActive = child.path === location.pathname;
        return (
          <div
            key={child.key}
            onClick={() => child.path && handleClick(child.path)}
            className={`
              px-4 py-2 cursor-pointer transition-colors duration-200
              flex items-center gap-3
              ${isActive ? "bg-primary/10 text-primary" : "hover:bg-gray-100"}
            `}
          >
            {child.icon && <span className="text-base">{child.icon}</span>}
            <span className="text-sm">{child.label}</span>
          </div>
        );
      })}
    </div>
  );
};
