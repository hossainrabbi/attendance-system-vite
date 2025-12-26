import { type MenuItem } from "../menu";
import { CollapsedMenuItem } from "./CollapsedMenuItem";

/**
 * Renders all menu items in collapsed mode
 * Each item with children will show a Popover on hover
 */
type Props = {
  menuItems: MenuItem[];
};

export const CollapsedMenu = ({ menuItems }: Props) => {
  return (
    <div className="flex flex-col">
      {menuItems.map((item) => (
        <CollapsedMenuItem key={item.key} item={item} />
      ))}
    </div>
  );
};
