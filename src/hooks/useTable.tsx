import { useCallback, useState } from "react";

type UseTableReturn = {
  page: number;
  limit: number;
  setPagination: (page: number, limit: number) => void;
  setLimit: (limit: number) => void;
  resetPagination: () => void;
};

/**
 * useTable
 *
 * Manages table pagination state (page & page size).
 *
 * @param defaultPage  Initial page number (default: 1)
 * @param defaultLimit Initial page size (default: 10)
 *
 * @returns Pagination state and helper methods
 *
 * @example
 * ```ts
 * const {
 *   page,
 *   limit,
 *   setPagination,
 *   setLimit,
 *   resetPagination,
 * } = useTable();
 *
 * // Change page and limit together
 * setPagination(2, 20);
 *
 * // Change page size and reset to first page
 * setLimit(50);
 *
 * // Reset pagination (useful after filtering)
 * resetPagination();
 * ```
 */
export default function useTable(
  defaultPage = 1,
  defaultLimit = 10
): UseTableReturn {
  const [page, setPage] = useState(defaultPage);
  const [limit, setLimitState] = useState(defaultLimit);

  const setPagination = useCallback((page: number, limit: number) => {
    setPage(page);
    setLimitState(limit);
  }, []);

  const setLimit = useCallback(
    (limit: number) => {
      setPagination(defaultPage, limit);
    },
    [defaultPage, setPagination]
  );

  const resetPagination = useCallback(() => {
    setPagination(defaultPage, defaultLimit);
  }, [defaultPage, defaultLimit, setPagination]);

  return {
    page,
    limit,
    setPagination,
    setLimit,
    resetPagination,
  };
}
