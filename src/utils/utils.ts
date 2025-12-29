/**
 * Filters a Select option by checking whether its label
 * includes the search input (case-insensitive).
 *
 * Commonly used as `filterOption` in searchable Select components
 * (e.g., Ant Design Select).
 *
 * @param input - The search text entered by the user
 * @param option - The select option containing label and value
 * @returns true if the option label matches the input, otherwise false
 */
export const filterOptionByLabel = (
  input: string,
  option?: { label: string; value: string | number | boolean }
): boolean => {
  return (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
};

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
