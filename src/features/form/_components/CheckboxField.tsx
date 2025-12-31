import { Checkbox, Form } from "antd";
import type { CheckboxProps } from "antd/es/checkbox";
import React from "react";
import type { BaseFieldProps } from "../formType";

interface CheckboxFieldProps<T = Record<string, unknown>>
  extends BaseFieldProps<T>,
    Omit<CheckboxProps, "name"> {
  children?: React.ReactNode;
}

export default function CheckboxField<T = Record<string, unknown>>({
  name,
  label,
  rules,
  required,
  tooltip,
  dependencies,
  hidden,
  children,
  ...props
}: CheckboxFieldProps<T>) {
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
      validateFirst
    >
      <Checkbox {...props}>{children}</Checkbox>
    </Form.Item>
  );
}
