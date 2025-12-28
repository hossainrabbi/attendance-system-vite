import { useCallback, useEffect, useState } from "react";

/**
 * useDebounce
 *
 * Returns a debounced version of a value and an updater function.
 *
 * @param initial Initial value
 * @param delay   Debounce delay in milliseconds
 *
 * @returns [debouncedValue, setValue]
 *
 * Example:
 * const [debouncedSearch, setSearch] = useDebounce("", 400);
 */
type UseDebounceReturn<T> = [T, (value: T) => void];

export function useDebounce<T>(initial: T, delay = 500): UseDebounceReturn<T> {
  const [value, setValue] = useState<T>(initial);
  const [debouncedValue, setDebouncedValue] = useState<T>(initial);

  const updateValue = useCallback((val: T) => {
    setValue(val);
  }, []);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => window.clearTimeout(timeoutId);
  }, [value, delay]);

  return [debouncedValue, updateValue];
}
