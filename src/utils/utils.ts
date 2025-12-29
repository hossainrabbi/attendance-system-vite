export const filterOptionByLabel = (
  input: string,
  option?: { label: string; value: string | number | boolean }
) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
