import CDatePicker, {
  type CustomDatePickerProps,
} from "@/components/ui/form/CustomDatePicker";
import { DATE_FORMATS } from "@/constants/constants";
import { Form } from "antd";
import type { BaseFieldProps } from "../form.type";

interface DateFieldProps<T = Record<string, unknown>>
  extends BaseFieldProps<T>,
    Omit<CustomDatePickerProps, "name"> {
  submittedFormat?: string;
}

export default function DateField<T = Record<string, unknown>>({
  name,
  label,
  rules,
  required,
  tooltip,
  dependencies,
  hidden,
  submittedFormat = DATE_FORMATS.DB_DATE,
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
      validateFirst
    >
      <CDatePicker {...props} submittedFormat={submittedFormat} />
    </Form.Item>
  );
}
