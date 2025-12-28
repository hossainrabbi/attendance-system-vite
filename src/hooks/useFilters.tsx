import { useState } from "react";

/**
 * useFilters
 *
 * Generic hook for managing filter state with optional pagination reset.
 *
 * @template T - Shape of the filter object
 *
 * @param defaultFilters Initial filter state
 * @param resetPagination Optional callback to reset pagination when filters change
 *
 * @returns A tuple containing:
 * - `filters`: current filter state
 * - `setFiltersValue`: function to update a specific filter field
 *
 * @example
 * ```ts
 * type UserFilters = {
 *   name?: string;
 *   role?: string;
 * };
 *
 * const [filters, setFiltersValue] = useFilters<UserFilters>(
 *   { role: "admin" },
 *   resetPagination
 * );
 *
 * setFiltersValue("name", "John");
 * ```
 */
export default function useFilters<T extends object>(
  defaultFilters: T = {} as T,
  resetPagination?: () => void
) {
  const [filters, setFilters] = useState<T>(defaultFilters);

  const setFiltersValue = <K extends keyof T>(key: K, value: T[K]) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));

    resetPagination?.();
  };

  return [filters, setFiltersValue] as const;
}
