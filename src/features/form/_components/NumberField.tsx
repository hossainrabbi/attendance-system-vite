import CNumberInput from "@/components/ui/form/CustomNumberInput";
import { Form } from "antd";
import type { InputNumberProps } from "antd/es/input-number";
import type { BaseFieldProps } from "../form.type";

interface NumberFieldProps<T = Record<string, unknown>>
  extends BaseFieldProps<T>,
    Omit<InputNumberProps, "name"> {}

export default function NumberField<T = Record<string, unknown>>({
  name,
  label,
  rules,
  required,
  tooltip,
  dependencies,
  hidden,
  ...props
}: NumberFieldProps<T>) {
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
      <CNumberInput {...props} />
    </Form.Item>
  );
}
