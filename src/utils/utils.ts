/**
 * Normalizes a phone number to ensure it starts with the country code `+88`.
 *
 * Rules:
 * - If the number already starts with `+88`, return as-is
 * - If it starts with `88`, prepend `+`
 * - Otherwise, prepend `+88`
 *
 * @param phone - Raw phone number string
 * @returns Normalized phone number with `+88` country code
 */
export const normalizePhoneNumber = (phone: string): string => {
  // Return early if phone is empty or undefined
  if (!phone) return phone;

  const trimmedPhone = phone.trim();

  if (trimmedPhone.startsWith("+88")) return trimmedPhone;

  if (trimmedPhone.startsWith("88")) return `+${trimmedPhone}`;

  return `+88${trimmedPhone}`;
};

/**
 * Checks whether a specific segment of the current URL path
 * matches the given key.
 *
 * @param {number} position - The index of the path segment to check
 *                            (0-based after splitting by "/").
 * @param {string} key - The path value to compare against.
 *
 * @returns {boolean} Returns true if the path segment at the given
 * position matches the key, otherwise false.
 *
 * @example
 * // URL: /dashboard/users
 * isActivePath(0, "dashboard"); // true
 * isActivePath(1, "users"); // true
 * isActivePath(1, "settings"); // false
 */
export const isActivePath = (position: number, key: string) => {
  const pathArr = window.location.pathname.split("/").filter((str) => str);
  return pathArr[position] === key;
};
