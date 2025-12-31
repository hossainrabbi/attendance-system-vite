import { useAppSelector } from "@/store/store";
import { useMemo } from "react";
import type { MenuItem } from "../menu";

/**
 * Custom hook to filter menu items based on the current user's role.
 * Implements strict RBAC with role inheritance and bubble-up visibility.
 */
export const useMenuFilter = (menuItems: MenuItem[]) => {
  const userRole = useAppSelector((state) => state.auth.user?.role);

  return useMemo(() => {
    if (!userRole) return [];

    const filterRecursive = (items: MenuItem[]): MenuItem[] => {
      return items
        .map((item): MenuItem | null => {
          // 1. Determine effective roles for this item
          // STRICT MODE: No inheritance. Only explicit roles on the item matter.
          const itemRoles = item.roles;

          // 2. Check if this item matches the user's role directly
          // If itemRoles is undefined/empty, it defaults to HIDDEN (false) unless we want public?
          // User request: "if role are not added, it showing, but no need to show" -> So Undefined = Hidden.
          const hasRoleMatch =
            itemRoles && userRole ? itemRoles.includes(userRole) : false;

          // 3. Process children
          let visibleChildren: MenuItem[] = [];
          if (item.children) {
            visibleChildren = filterRecursive(item.children);
          }

          // 4. Determine final visibility:
          // Show if:
          // a) The item functions as a folder/parent and has visible children (Bubble Up)
          // b) The item matches the role AND is a direct link (Leaf) or an empty folder (though we filters empty folders later)
          const isVisible = hasRoleMatch || visibleChildren.length > 0;

          if (!isVisible) return null;

          return {
            ...item,
            children: visibleChildren.length > 0 ? visibleChildren : undefined,
          };
        })
        .filter((item): item is MenuItem => item !== null);
    };

    return filterRecursive(menuItems);
  }, [menuItems, userRole]);
};
