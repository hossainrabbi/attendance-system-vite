import { Form, Input } from "antd";
import type { InputProps } from "antd/es/input";
import type { BaseFieldProps } from "../formType";

interface TextFieldProps<T = Record<string, unknown>>
  extends BaseFieldProps<T>,
    Omit<InputProps, "name"> {}

export default function TextField<T = Record<string, unknown>>({
  name,
  label,
  rules,
  required,
  tooltip,
  dependencies,
  hidden,
  ...props
}: TextFieldProps<T>) {
  return (
    <Form.Item
      name={name as string | string[]}
      label={label}
      rules={rules}
      required={required}
      tooltip={tooltip}
      dependencies={dependencies as string[]}
      hidden={hidden}
    >
      <Input {...props} />
    </Form.Item>
  );
}
