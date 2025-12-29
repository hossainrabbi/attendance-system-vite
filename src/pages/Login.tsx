import { useAppDispatch } from "@/store/store";
import { Button, Form, Input, Typography } from "antd";
import { setUser } from "../features/auth/authSlice";

const { Title, Text } = Typography;

export const Login = () => {
  const dispatch = useAppDispatch();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLogin = (values: any) => {
    // Mock login logic
    console.log("Login values:", values);
    dispatch(
      setUser({
        id: "1",
        name: "Admin User",
        email: values.email,
        role: "ADMIN",
      })
    );
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <Title level={2} className="m-0">
          Welcome Back
        </Title>
        <Text type="secondary">Please sign in to your account</Text>
      </div>

      <Form layout="vertical" onFinish={handleLogin} autoComplete="off">
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input placeholder="admin@example.com" size="large" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="******" size="large" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block size="large">
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
