/**
 * Calculates the percentage of a value relative to a total.
 *
 * Formula:
 *   (value / total) * 100
 *
 * Safely handles cases where the total is zero to avoid
 * returning Infinity or NaN.
 *
 * @param value - The portion value
 * @param total - The total value
 * @returns Percentage value (0–100). Returns 0 if total is 0.
 */
export const calculatePercentage = (value: number, total: number): number => {
  if (total === 0) return 0;

  return (value / total) * 100;
};
