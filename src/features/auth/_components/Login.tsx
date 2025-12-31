import { CForm } from "@/features/form/Form";
import { Button } from "antd";

interface ILogin {
  email: string;
  password: string;
}

export default function Login() {
  const onSubmit = (values: ILogin) => {
    console.log("Form values:", values);
  };

  return (
    <CForm<ILogin> onSubmit={onSubmit}>
      <CForm.Text<ILogin>
        name="email"
        label="Email"
        placeholder="Enter your email"
        rules={[{ required: true, message: "Please input your email!" }]}
      />

      <CForm.Password<ILogin>
        name="password"
        label="Password"
        placeholder="Enter your password"
        rules={[{ required: true, message: "Please input your password!" }]}
      />

      <Button type="primary" htmlType="submit" block className="mt-4">
        Login
      </Button>
    </CForm>
  );
}
