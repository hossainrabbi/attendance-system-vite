import { menuItems } from "@/features/sidebar/menu";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../features/sidebar/Sidebar";

const { Content } = Layout;

export const AdminLayout = () => {
  return (
    <Layout className="min-h-screen">
      <Sidebar menuItems={menuItems} />
      <Layout>
        <Content className="m-6 p-6 bg-white rounded-lg shadow-sm">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
