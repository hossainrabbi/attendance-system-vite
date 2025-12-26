import type { MenuProps } from "antd";
import type { MenuItem } from "../menu";

/**
 * Converts MenuItem[] to Ant Design MenuProps items format
 */
export const convertToAntdMenuItems = (
  items: MenuItem[]
): MenuProps["items"] => {
  return items.map((item) => ({
    key: item.key,
    icon: item.icon,
    label: item.label,
    children: item.children ? convertToAntdMenuItems(item.children) : undefined,
  }));
};
