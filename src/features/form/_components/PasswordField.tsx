import { Form, Input } from "antd";
import type { PasswordProps } from "antd/es/input";
import type { BaseFieldProps } from "../form.type";

interface PasswordFieldProps<T = Record<string, unknown>>
  extends BaseFieldProps<T>,
    Omit<PasswordProps, "name"> {}

export default function PasswordField<T = Record<string, unknown>>({
  name,
  label,
  rules,
  required,
  tooltip,
  dependencies,
  hidden,
  ...props
}: PasswordFieldProps<T>) {
  return (
    <Form.Item
      name={name as string | string[]}
      label={label}
      rules={rules}
      required={required}
      tooltip={tooltip}
      dependencies={dependencies as string[]}
      hidden={hidden}
      validateFirst
    >
      <Input.Password {...props} />
    </Form.Item>
  );
}
