/* eslint-disable @typescript-eslint/no-unused-vars */
import { DATE_FORMATS, PLACEHOLDER_FORMATS } from "@/constants/constants";
import { DatePicker, type DatePickerProps } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";

// Extend dayjs with plugins
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

type DisabledDateType =
  | "pastDate"
  | "pastDateWithToday"
  | "today"
  | "futureDate"
  | "futureDateWithToday";

export type CustomDatePickerProps = Omit<
  DatePickerProps,
  "value" | "onChange"
> & {
  value?: string | null;
  disabledType?: DisabledDateType;
  onChange?: (value: string | null) => void;
  submittedFormat?: string;
  showNow?: boolean;
};

export default function CDatePicker({
  value,
  submittedFormat = DATE_FORMATS.DB_DATE,
  format = DATE_FORMATS.DISPLAY_DATE,
  placeholder = PLACEHOLDER_FORMATS.DATE,
  disabledType,
  onChange,
  showNow = false,
  disabledDate,
  ...rest
}: CustomDatePickerProps) {
  /**
   * Convert string value → Dayjs
   */
  const parsedValue: Dayjs | null = value
    ? submittedFormat
      ? dayjs(value, submittedFormat)
      : dayjs(value)
    : null;

  /**
   * Disable date logic
   */
  const defaultDisabledDate = (current: Dayjs) => {
    const today = dayjs().startOf("day");

    switch (disabledType) {
      case "pastDate":
        return current.isBefore(today);

      case "pastDateWithToday":
        return current.isSameOrBefore(today, "day");

      case "today":
        return current.isSame(today, "day");

      case "futureDate":
        return current.isAfter(today);

      case "futureDateWithToday":
        return current.isSameOrAfter(today, "day");

      default:
        return false;
    }
  };

  /**
   * Handle change → always return string
   * Note: DatePicker (not RangePicker) will only pass single Dayjs, never array
   */
  const handleChange = (
    date: Dayjs | Dayjs[] | null,
    _dateString: string | string[] | null
  ) => {
    if (!onChange) return;

    // For single DatePicker, date will never be an array
    // but we need to handle the type to satisfy TypeScript
    if (Array.isArray(date)) return;

    if (!date) {
      onChange(null);
      return;
    }

    if (submittedFormat) {
      onChange(date.format(submittedFormat));
    } else {
      onChange(date.toISOString());
    }
  };

  return (
    <DatePicker
      {...rest}
      value={parsedValue}
      disabledDate={disabledType ? defaultDisabledDate : disabledDate}
      onChange={handleChange}
      placeholder={placeholder}
      format={format}
      className="w-full"
      showNow={showNow}
    />
  );
}
