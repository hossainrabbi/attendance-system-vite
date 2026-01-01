import { useLoginMutation } from "@/app/features/auth/authApi";
import type { ILogin } from "@/app/features/auth/authType";
import { CForm } from "@/features/form/Form";
import { Toast } from "@/lib/toast";
import { handleSubmit } from "@/utils/handleSubmit";
import { Button } from "antd";
import { useNavigate } from "react-router";

export default function LoginForm() {
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  const onSubmit = async (values: ILogin) => {
    handleSubmit(login, values, () => {
      Toast.success("Login successful");
      navigate("/dashboard");
    });
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

      <Button
        block
        type="primary"
        htmlType="submit"
        className="mt-4"
        loading={isLoading}
      >
        Login
      </Button>
    </CForm>
  );
}
