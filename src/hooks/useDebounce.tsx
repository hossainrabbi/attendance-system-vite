import { useEffect, useState } from "react";

/**
 * useDebounce
 *
 * @param initial   Initial value
 * @param delay     Debounce wait‑time (ms)
 *
 * @returns [search, onSearch]
 *
 * Example:
 * const [search, onSearch] = useDebounce("", 400);
 */

type Props<T> = [T, (val: T) => void];

export function useDebounce<T>(initial: T, delay = 500): Props<T> {
  const [value, setValue] = useState<T>(initial);
  const [search, setSearch] = useState<T>(initial);

  const onSearch = (val: T) => {
    setValue(val);
  };

  useEffect(() => {
    const id = window.setTimeout(() => setSearch(value), delay);
    return () => window.clearTimeout(id);
  }, [value, delay]);

  return [search, onSearch];
}
