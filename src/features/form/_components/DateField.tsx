import { DatePicker, Form } from "antd";
import type { DatePickerProps } from "antd/es/date-picker";
import type { BaseFieldProps } from "../formType";

interface DateFieldProps<T = Record<string, unknown>>
  extends BaseFieldProps<T>,
    Omit<DatePickerProps, "name"> {}

export default function DateField<T = Record<string, unknown>>({
  name,
  label,
  rules,
  required,
  tooltip,
  dependencies,
  hidden,
  ...props
}: DateFieldProps<T>) {
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
      <DatePicker {...props} style={{ width: "100%" }} />
    </Form.Item>
  );
}
