import Seo, { type SeoProps } from "@/components/Seo";
import { Outlet } from "react-router";

export default function AppLayout(props: SeoProps) {
  return (
    <>
      <Seo {...props} />
      <main>
        <Outlet />
      </main>
    </>
  );
}
