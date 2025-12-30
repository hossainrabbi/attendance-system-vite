import { Select as AntSelect, type SelectProps } from "antd";
import type { DefaultOptionType } from "antd/es/select";
import type { ReactNode } from "react";
import SelectIconLG from "./_icons/SelectIconLG";
import SelectIconSM from "./_icons/SelectIconSM";

const filterOptionByLabel = (
  input: string,
  option?: DefaultOptionType
): boolean => {
  if (!option?.label) return false;

  // Handle label as string or extract text from ReactNode
  const labelText =
    typeof option.label === "string" ? option.label : String(option.label);

  return labelText.toLowerCase().includes(input.toLowerCase());
};

/**
 * Custom Select props
 */
type CustomSelectProps<T = unknown> = Omit<SelectProps<T>, "suffixIcon"> & {
  suffixIcon?: ReactNode;
};

export default function CSelect<T = unknown>({
  size,
  suffixIcon,
  placeholder = "Select",
  allowClear = true,
  showSearch = true,
  ...rest
}: CustomSelectProps<T>) {
  const resolvedIcon =
    suffixIcon ??
    (size === "small" || size === "middle" ? (
      <SelectIconSM />
    ) : (
      <SelectIconLG />
    ));

  return (
    <AntSelect<T>
      {...rest}
      size={size}
      placeholder={placeholder}
      allowClear={allowClear}
      showSearch={
        showSearch
          ? {
              filterOption: filterOptionByLabel,
            }
          : false
      }
      suffixIcon={resolvedIcon}
    />
  );
}
