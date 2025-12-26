import { menuItems } from "@/features/sidebar/menu";
import { MobileSidebar } from "@/features/sidebar/MobileSidebar";
import { toggleMobileMenu } from "@/features/sidebar/uiSlice";
import { MenuOutlined } from "@ant-design/icons";
import { Button, Layout } from "antd";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../features/sidebar/Sidebar";

const { Content, Header } = Layout;

export const AdminLayout = () => {
  const dispatch = useDispatch();

  return (
    <Layout className="min-h-screen">
      {/* Desktop Sidebar */}
      <Sidebar menuItems={menuItems} />

      {/* Mobile Sidebar */}
      <MobileSidebar menuItems={menuItems} />

      <Layout>
        {/* Mobile Header Trigger - Visible only on mobile */}
        <Header className="md:hidden bg-white px-4 flex items-center shadow-sm">
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={() => dispatch(toggleMobileMenu())}
            className="text-lg w-10 h-10"
          />
          <span className="ml-4 font-semibold text-lg">Attendance System</span>
        </Header>

        <Content className="m-4 md:m-6 p-4 md:p-6 bg-white rounded-lg shadow-sm">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
