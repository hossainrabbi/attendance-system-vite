import { useCallback, useEffect, useMemo } from "react";
import { useLocation, useSearchParams } from "react-router";

/**
 * React hook for managing URL query parameters as filter state.
 *
 * Features:
 * - Applies default filter values
 * - Syncs filters with URL search params
 * - Supports single and batch updates
 * - Allows clearing all filters
 *
 * ⚠️ Note:
 * URL search parameters are always strings.
 * Consumers are responsible for parsing values if needed.
 *
 * @template T - Shape of the filter object
 *
 * @param defaults - Default filter values applied when query params are missing
 * @param queryChangeFn - Optional callback fired when the query string changes
 *
 * @returns An object containing filters and helper methods
 */
export function useQueryFilters<T extends Record<string, unknown>>(
  defaults: Partial<T> = {},
  queryChangeFn?: () => void
) {
  const [params, setParams] = useSearchParams();
  const location = useLocation();

  /**
   * Merged filters object:
   * 1. Defaults
   * 2. URL search params (override defaults)
   */
  const filters = useMemo(() => {
    const result: Partial<T> = { ...defaults };

    params.forEach((value, key) => {
      result[key as keyof T] = value as unknown as T[keyof T];
    });

    return result as T;
  }, [params, defaults]);

  /**
   * Set or remove a single filter value.
   *
   * @param key - Filter key
   * @param value - Filter value (removed if empty)
   */
  const setFilterValue = useCallback(
    <K extends keyof T>(key: K, value: T[K]) => {
      const newParams = new URLSearchParams(params);

      if (value === undefined || value === null || value === "") {
        newParams.delete(String(key));
      } else {
        newParams.set(String(key), String(value));
      }

      setParams(newParams, { replace: true });
    },
    [params, setParams]
  );

  /**
   * Set or remove multiple filter values at once.
   *
   * @param updates - Partial filter object
   */
  const setFilterValues = useCallback(
    (updates: Partial<T>) => {
      const newParams = new URLSearchParams(params);

      (Object.keys(updates) as (keyof T)[]).forEach((key) => {
        const value = updates[key];

        if (value === undefined || value === null || value === "") {
          newParams.delete(String(key));
        } else {
          newParams.set(String(key), String(value));
        }
      });

      setParams(newParams, { replace: true });
    },
    [params, setParams]
  );

  /**
   * Clears all filters from the URL.
   */
  const clearFilters = useCallback(() => {
    setParams({}, { replace: true });
  }, [setParams]);

  /**
   * Trigger callback when query string changes.
   */
  useEffect(() => {
    queryChangeFn?.();
  }, [location.search, queryChangeFn]);

  return {
    filters,
    setFilterValue,
    setFilterValues,
    clearFilters,
    params,
  };
}
