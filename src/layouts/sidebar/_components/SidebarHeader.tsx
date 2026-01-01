import { useAppDispatch } from "@/app/store";
import { IMAGES } from "@/config/globalConfig";
import { toggleMobileMenu } from "@/features/sidebar/sidebarSlice";
import { MenuOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Flex } from "antd";
import { Header } from "antd/es/layout/layout";
import ProfileDropdown from "./ProfileDropdown";

export default function SidebarHeader() {
  const dispatch = useAppDispatch();

  return (
    <Header className="bg-white px-4 flex items-center justify-between shadow-sm">
      {/* Mobile Header Trigger - Visible only on mobile */}
      <div>
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={() => dispatch(toggleMobileMenu())}
          className="text-lg w-10 h-10 md:hidden"
        />
      </div>

      <Flex align="center" gap={16}>
        <Dropdown
          trigger={["click"]}
          popupRender={() => <ProfileDropdown />}
          getPopupContainer={(trigger) => trigger.parentElement!}
        >
          <Avatar
            src={IMAGES.avatar}
            size={48}
            className="rounded-full cursor-pointer"
          />
        </Dropdown>
      </Flex>
    </Header>
  );
}
