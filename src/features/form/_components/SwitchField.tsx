import { Form, Switch } from "antd";
import type { SwitchProps } from "antd/es/switch";
import type { BaseFieldProps } from "../formType";

interface SwitchFieldProps<T = Record<string, unknown>>
  extends BaseFieldProps<T>,
    Omit<SwitchProps, "name"> {}

export default function SwitchField<T = Record<string, unknown>>({
  name,
  label,
  rules,
  required,
  tooltip,
  dependencies,
  hidden,
  ...props
}: SwitchFieldProps<T>) {
  return (
    <Form.Item
      name={name as string | string[]}
      label={label}
      rules={rules}
      required={required}
      tooltip={tooltip}
      dependencies={dependencies as string[]}
      hidden={hidden}
      valuePropName="checked"
    >
      <Switch {...props} />
    </Form.Item>
  );
}
