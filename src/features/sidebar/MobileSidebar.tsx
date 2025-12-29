import { Drawer } from "antd";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { ExpandedMenu } from "./_components/ExpandedMenu";
import { SidebarHeader } from "./_components/SidebarHeader";
import { useMenuFilter } from "./_hooks/useMenuFilter";
import type { MenuItem } from "./menu";
import { setMobileMenuOpen } from "./sidebar.slice";

interface Props {
  menuItems: MenuItem[];
}

export const MobileSidebar = ({ menuItems }: Props) => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const isOpen = useAppSelector((state) => state.sidebar.isMobileMenuOpen);

  const filteredMenuItems = useMenuFilter(menuItems);

  const handleClose = () => {
    dispatch(setMobileMenuOpen(false));
  };

  // Close drawer on route change
  useEffect(() => {
    dispatch(setMobileMenuOpen(false));
  }, [location.pathname, dispatch]);

  return (
    <Drawer
      placement="left"
      onClose={handleClose}
      open={isOpen}
      size={250}
      styles={{ body: { padding: 0 } }}
      title={<SidebarHeader isCollapsed={false} />}
      closeIcon={null} // Optional: hide default close icon if you want a custom header
      className="md:hidden" // Ensure it's only relevant for mobile if logic leaks
    >
      <ExpandedMenu menuItems={filteredMenuItems} />
    </Drawer>
  );
};
