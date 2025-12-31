import CSelect from "@/components/ui/form/CustomSelect";
import { Form } from "antd";
import type { DefaultOptionType, SelectProps } from "antd/es/select";
import type { BaseFieldProps } from "../form.type";

interface SelectFieldProps<T = Record<string, unknown>, V = unknown>
  extends BaseFieldProps<T>,
    Omit<SelectProps<V>, "name" | "options"> {
  options?: Array<{
    label: React.ReactNode;
    value: V;
    disabled?: boolean;
    [key: string]: unknown;
  }>;
}

export default function SelectField<T = Record<string, unknown>, V = unknown>({
  name,
  label,
  rules,
  required,
  tooltip,
  dependencies,
  hidden,
  options,
  ...props
}: SelectFieldProps<T, V>) {
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
      <CSelect<V> {...props} options={options as DefaultOptionType[]} />
    </Form.Item>
  );
}
