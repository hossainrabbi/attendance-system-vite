import type { ILogin } from "@/app/features/auth/authType";
import { CForm } from "@/features/form/Form";
import { Button } from "antd";

export default function LoginForm() {
  const onSubmit = (values: ILogin) => {
    console.log("Form values:", values);
  };

  return (
    <CForm<ILogin> onSubmit={onSubmit}>
      <CForm.Text<ILogin>
        name="email"
        label="Email"
        placeholder="Enter email"
        rules={[{ required: true, message: "Please enter email" }]}
      />

      <CForm.Password<ILogin>
        name="password"
        label="Password"
        placeholder="Enter password"
        rules={[{ required: true, message: "Please enter password" }]}
      />

      <Button type="primary" htmlType="submit" block className="mt-4">
        Login
      </Button>
    </CForm>
  );
}
