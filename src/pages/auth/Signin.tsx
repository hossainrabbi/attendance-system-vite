import { ENV, IMAGES } from "@/config/global.config";
import Login from "@/features/auth/_components/Login";
import { Flex } from "antd";

export default function Signin() {
  return (
    <>
      <Flex justify="center" align="center" className="flex-col mb-4">
        <img src={IMAGES.LOGO} alt={ENV.APP_NAME} className="h-12 mb-1.5" />
        <h2 className="text-lg text-text font-bold">Welcome Back!</h2>
        <p className="text-sm text-text">Please login to your account</p>
      </Flex>

      <Login />
    </>
  );
}
