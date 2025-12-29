import { DATE_FORMATS } from "@/constants/constants";
import { DatePicker, Form } from "antd";
import type { DatePickerProps } from "antd/es/date-picker";
import dayjs, { Dayjs } from "dayjs";
import type { BaseFieldProps } from "../form.type";

interface DateFieldProps<T = Record<string, unknown>>
  extends BaseFieldProps<T>,
    Omit<DatePickerProps, "name"> {
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
  format = DATE_FORMATS.DISPLAY_DATE,
  ...props
}: DateFieldProps<T>) {
  const serializeDate = (date: Dayjs): string => {
    return submittedFormat ? date.format(submittedFormat) : date.toISOString();
  };

  const deserializeDate = (value: string): Dayjs => {
    return submittedFormat ? dayjs(value, submittedFormat) : dayjs(value);
  };

  return (
    <Form.Item
      name={name as string | string[]}
      label={label}
      rules={rules}
      required={required}
      tooltip={tooltip}
      dependencies={dependencies as string[]}
      hidden={hidden}
      getValueFromEvent={(date: Dayjs | null) =>
        date ? serializeDate(date) : null
      }
      getValueProps={(value) => ({
        value: value ? deserializeDate(value) : null,
      })}
    >
      <DatePicker {...props} format={format} style={{ width: "100%" }} />
    </Form.Item>
  );
}
