import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectUserRole, type UserRole } from "../../auth/authSlice";
import type { MenuItem } from "../menu";

/**
 * Custom hook to filter menu items based on the current user's role.
 * Implements strict RBAC with role inheritance and bubble-up visibility.
 */
export const useMenuFilter = (menuItems: MenuItem[]) => {
  const userRole = useSelector(selectUserRole);

  return useMemo(() => {
    if (!userRole) return [];

    const filterRecursive = (
      items: MenuItem[],
      inheritedRoles?: UserRole[]
    ): MenuItem[] => {
      return items
        .map((item): MenuItem | null => {
          // 1. Determine effective roles for this item
          // If item has roles, use them. Otherwise, inherit from parent.
          // For top-level items with no parent roles, this remains undefined (effectively hidden/no-access).
          const itemRoles = item.roles || inheritedRoles;

          // 2. Check if this item matches the user's role directly
          const hasRoleMatch =
            itemRoles && userRole ? itemRoles.includes(userRole) : false;

          // 3. Process children with the current item's roles as inherited context
          let visibleChildren: MenuItem[] = [];
          if (item.children) {
            visibleChildren = filterRecursive(item.children, itemRoles);
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
