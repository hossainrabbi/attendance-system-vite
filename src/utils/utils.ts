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
