import { Form } from "antd";
import React from "react";
import type { BaseFieldProps } from "../formType";

interface FCustomFieldProps<T = Record<string, unknown>>
  extends BaseFieldProps<T> {
  children: React.ReactElement;
  valuePropName?: string;
  trigger?: string;
  getValueFromEvent?: (...args: unknown[]) => unknown;
}

export default function CustomField<T = Record<string, unknown>>({
  name,
  label,
  rules,
  required,
  tooltip,
  dependencies,
  hidden,
  children,
  valuePropName,
  trigger,
  getValueFromEvent,
}: FCustomFieldProps<T>) {
  return (
    <Form.Item
      name={name as string | string[]}
      label={label}
      rules={rules}
      required={required}
      tooltip={tooltip}
      dependencies={dependencies as string[]}
      hidden={hidden}
      valuePropName={valuePropName}
      trigger={trigger}
      getValueFromEvent={getValueFromEvent}
      validateFirst
    >
      {children}
    </Form.Item>
  );
}
