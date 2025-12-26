import type { MenuItem } from "@/features/sidebar/menu";
import { useLocation, useNavigate } from "react-router-dom";
import { MenuIcon } from "./MenuIcon";
import { SubmenuPopover } from "./SubmenuPopover";

interface CollapsedMenuItemProps {
  item: MenuItem;
}

/**
 * Renders a single menu item in collapsed mode
 * Shows submenu in a Popover on hover if item has children
 */
export const CollapsedMenuItem = ({ item }: CollapsedMenuItemProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const hasActiveChild = item.children?.some(
    (child) => child.path === location.pathname
  );

  const handleClick = () => {
    if (item.path) {
      navigate(item.path);
    }
  };

  return (
    <SubmenuPopover item={item}>
      <MenuIcon
        item={item}
        onClick={handleClick}
        hasActiveChild={hasActiveChild}
      />
    </SubmenuPopover>
  );
};
