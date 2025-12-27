export const selectSearchOption = (
  input: string,
  option?: { label: string; value: string | number | boolean }
) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
