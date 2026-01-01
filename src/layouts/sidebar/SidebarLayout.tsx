import { menuItems } from "@/features/sidebar/menu";
import { MobileSidebar } from "@/features/sidebar/MobileSidebar";
import { Sidebar } from "@/features/sidebar/Sidebar";
import { Layout } from "antd";
import { Outlet } from "react-router";
import SidebarHeader from "./_components/SidebarHeader";

const { Content } = Layout;

export const SidebarLayout = () => {
  return (
    <Layout className="min-h-screen">
      {/* Desktop Sidebar */}
      <Sidebar menuItems={menuItems} />

      {/* Mobile Sidebar */}
      <MobileSidebar menuItems={menuItems} />

      <Layout>
        <SidebarHeader />

        <Content className="m-4 md:m-6 p-4 md:p-6 bg-white rounded">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
