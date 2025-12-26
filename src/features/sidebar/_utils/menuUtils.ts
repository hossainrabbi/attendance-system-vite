import type { MenuItem } from "../menu";

/**
 * Recursively finds the path for a given menu key
 */
export const findPathByKey = (
  items: MenuItem[],
  key: string
): string | undefined => {
  for (const item of items) {
    if (item.key === key) {
      return item.path;
    }
    if (item.children) {
      const childPath = findPathByKey(item.children, key);
      if (childPath) return childPath;
    }
  }
  return undefined;
};

/**
 * Finds all parent keys for a given path (for highlighting active menu)
 */
export const findMenuKeysByPath = (
  items: MenuItem[],
  pathname: string,
  parentKeys: string[] = []
): { selectedKey: string | null; openKeys: string[] } => {
  for (const item of items) {
    const currentKeys = [...parentKeys];

    if (item.path === pathname) {
      return { selectedKey: item.key, openKeys: currentKeys };
    }

    if (item.children) {
      currentKeys.push(item.key);
      const result = findMenuKeysByPath(item.children, pathname, currentKeys);
      if (result.selectedKey) {
        return result;
      }
    }
  }

  return { selectedKey: null, openKeys: [] };
};
