import { InputNumber, type InputNumberProps } from "antd";

export default function CNumberInput({ ...props }: InputNumberProps) {
  return <InputNumber {...props} className="w-full" />;
}
