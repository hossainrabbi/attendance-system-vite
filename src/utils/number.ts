/**
 * Calculates the serial number of an item in a paginated list.
 *
 * Formula:
 *   serial = (page - 1) * limit + index + 1
 *
 * @param page - Current page number (1-based)
 * @param limit - Number of items per page
 * @param index - Zero-based index of the item on the current page
 * @returns Serial number of the item across all pages
 */
export const calculatePaginatedSerialNumber = (
  page: number,
  limit: number,
  index: number
): number => {
  return (page - 1) * limit + index + 1;
};

/**
 * Pads a number with a leading zero if it is a single digit.
 * Preserves the sign for negative numbers.
 *
 * Examples:
 * - 5   → "05"
 * - -3  → "-03"
 * - 12  → "12"
 *
 * @param value - Number to be padded
 * @returns Zero-padded number as a string
 */
export const padNumberWithZero = (value: number = 0): string => {
  const sign = value < 0 ? "-" : "";
  const absoluteValue = Math.abs(value);

  return `${sign}${absoluteValue.toString().padStart(2, "0")}`;
};

/**
 * Converts English (0–9) digits into Bengali numerals.
 *
 * Accepts both numbers and numeric strings.
 * Non-numeric characters are left unchanged.
 *
 * @param value - Number or numeric string to convert
 * @returns String with Bengali numerals
 */
export const convertEnglishToBengaliNumber = (
  value: number | string
): string => {
  const digitMap: Record<string, string> = {
    "0": "০",
    "1": "১",
    "2": "২",
    "3": "৩",
    "4": "৪",
    "5": "৫",
    "6": "৬",
    "7": "৭",
    "8": "৮",
    "9": "৯",
  };

  return value.toString().replace(/\d/g, (digit) => digitMap[digit]);
};
