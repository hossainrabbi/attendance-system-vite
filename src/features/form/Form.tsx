import { Form } from "antd";
import type { FormInstance, FormProps } from "antd/es/form";
import React from "react";
import CheckboxField from "./_components/CheckboxField";
import CustomField from "./_components/CustomField";
import DateField from "./_components/DateField";
import NumberField from "./_components/NumberField";
import PasswordField from "./_components/PasswordField";
import RadioField from "./_components/RadioField";
import SelectField from "./_components/SelectField";
import SwitchField from "./_components/SwitchField";
import TextField from "./_components/TextField";

interface FProps<T extends object> extends FormProps<T> {
  form?: FormInstance<T>;
  initialValues?: Partial<T>;
  onSubmit?: (values: T) => void | Promise<void>;
  onValuesChange?: (changed: Partial<T>, all: T) => void;
  children: React.ReactNode;
  layout?: "horizontal" | "vertical" | "inline";
  size?: "small" | "middle" | "large";
}

function TypedForm<T extends object>({
  form,
  initialValues,
  onSubmit,
  onValuesChange,
  children,
  layout = "vertical",
  size = "large",
  ...rest
}: FProps<T>) {
  return (
    <Form<T>
      form={form}
      initialValues={initialValues}
      onFinish={onSubmit}
      onValuesChange={onValuesChange}
      layout={layout}
      size={size}
      {...rest}
    >
      {children}
    </Form>
  );
}

export const CForm = Object.assign(TypedForm, {
  Text: TextField,
  Password: PasswordField,
  Number: NumberField,
  Select: SelectField,
  Date: DateField,
  Switch: SwitchField,
  Checkbox: CheckboxField,
  Radio: RadioField,
  Custom: CustomField,
  Item: Form.Item,
  List: Form.List,
  useForm: Form.useForm,
});
