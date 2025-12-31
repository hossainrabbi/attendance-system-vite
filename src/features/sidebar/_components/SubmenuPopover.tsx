import { Popover } from "antd";
import type { MenuItem } from "../menu";
import { SubmenuContent } from "./SubmenuContent";

interface SubmenuPopoverProps {
  item: MenuItem;
  children: React.ReactNode;
}

/**
 * Popover wrapper for submenu items in collapsed mode
 * Shows submenu on hover
 */
export const SubmenuPopover = ({ item, children }: SubmenuPopoverProps) => {
  if (!item.children || item.children.length === 0) {
    return <>{children}</>;
  }

  return (
    <Popover
      content={<SubmenuContent items={item.children} />}
      placement="rightTop"
      trigger="hover"
      classNames={{
        root: "custom-sidebar",
      }}
      mouseEnterDelay={0.1}
      mouseLeaveDelay={0.1}
    >
      {children}
    </Popover>
  );
};
