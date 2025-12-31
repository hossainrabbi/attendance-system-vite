import { useAppDispatch, useAppSelector } from "@/app/store";
import { Drawer } from "antd";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { ExpandedMenu } from "./_components/ExpandedMenu";
import { SidebarHeader } from "./_components/SidebarHeader";
import { useMenuFilter } from "./_hooks/useMenuFilter";
import type { MenuItem } from "./menu";
import { setMobileMenuOpen } from "./sidebarSlice";

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
      title={<SidebarHeader isCollapsed={false} isMobile={true} />}
      closeIcon={null}
      className="md:hidden custom-sidebar"
      classNames={{
        header: "p-0 border-none",
      }}
    >
      <ExpandedMenu menuItems={filteredMenuItems} />
    </Drawer>
  );
};
