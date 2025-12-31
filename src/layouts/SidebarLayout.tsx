import { menuItems } from "@/features/sidebar/menu";
import { MobileSidebar } from "@/features/sidebar/MobileSidebar";
import { toggleMobileMenu } from "@/features/sidebar/sidebar.slice";
import { useAppDispatch } from "@/store/store";
import { MenuOutlined } from "@ant-design/icons";
import { Button, Layout } from "antd";
import { Outlet } from "react-router";
import { Sidebar } from "../features/sidebar/Sidebar";

const { Content, Header } = Layout;

export const SidebarLayout = () => {
  const dispatch = useAppDispatch();

  return (
    <Layout className="min-h-screen">
      {/* Desktop Sidebar */}
      <Sidebar menuItems={menuItems} />

      {/* Mobile Sidebar */}
      <MobileSidebar menuItems={menuItems} />

      <Layout>
        <Header className="bg-white px-4 flex items-center shadow-sm">
          {/* Mobile Header Trigger - Visible only on mobile */}
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={() => dispatch(toggleMobileMenu())}
            className="text-lg w-10 h-10 md:hidden"
          />
        </Header>

        <Content className="m-4 md:m-6 p-4 md:p-6 bg-white rounded">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
