import Seo, { type SeoProps } from "@/components/Seo";
import { Layout } from "antd";
import { Outlet } from "react-router";

const { Content } = Layout;

export const AuthLayout = (props: SeoProps) => {
  return (
    <>
      <Seo {...props} />
      <Layout className="min-h-screen bg-gray-50">
        <Content className="flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </>
  );
};
