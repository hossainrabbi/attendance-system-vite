import { useState, type Key } from "react";

export function useRowSelection<T>(
  selectable: boolean,
  loading: boolean,
  onSelectionChange?: (keys: Key[], rows: T[]) => void
) {
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);

  if (!selectable || loading) {
    return undefined;
  }

  return {
    selectedRowKeys,
    onChange: (keys: Key[], rows: T[]) => {
      setSelectedRowKeys(keys);
      onSelectionChange?.(keys, rows);
    },
  };
}
