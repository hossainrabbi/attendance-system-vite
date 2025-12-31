import { Form, Radio } from "antd";
import type { RadioGroupProps } from "antd/es/radio";
import type { BaseFieldProps } from "../form.type";

interface RadioFieldProps<T = Record<string, unknown>, V = unknown>
  extends BaseFieldProps<T>,
    Omit<RadioGroupProps, "name"> {
  options?: Array<{ label: string; value: V }>;
}

export default function RadioField<T = Record<string, unknown>, V = unknown>({
  name,
  label,
  rules,
  required,
  tooltip,
  dependencies,
  hidden,
  options,
  ...props
}: RadioFieldProps<T, V>) {
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
      <Radio.Group {...props} options={options} />
    </Form.Item>
  );
}
