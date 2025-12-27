import { Drawer } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import type { RootState } from "../../store/store";
import { ExpandedMenu } from "./_components/ExpandedMenu";
import { SidebarHeader } from "./_components/SidebarHeader";
import { useMenuFilter } from "./_hooks/useMenuFilter";
import type { MenuItem } from "./menu";
import { setMobileMenuOpen } from "./uiSlice";

interface Props {
  menuItems: MenuItem[];
}

export const MobileSidebar = ({ menuItems }: Props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isOpen = useSelector((state: RootState) => state.ui.isMobileMenuOpen);

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
