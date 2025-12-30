// Placeholder formats
export const PLACEHOLDER_FORMATS = {
  MOBILE: "+8801xxxxxxxxx",
  EMAIL: "example@gmail.com",
  DATE: "dd/mm/yyyy",
} as const;

// Date formats
export const DATE_FORMATS = {
  DB_DATE: "YYYY-MM-DD",
  DB_TIME: "HH:mm:ss",
  DISPLAY_DATE: "DD MMM, YYYY",
  DISPLAY_TIME: "h:mm A",
} as const;

// Gender options
export const GENDER_OPTIONS = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Others", value: "others" },
] as const;

// Blood group options
export const BLOOD_GROUP_OPTIONS = [
  { label: "A+", value: "A+" },
  { label: "A-", value: "A-" },
  { label: "B+", value: "B+" },
  { label: "B-", value: "B-" },
  { label: "O+", value: "O+" },
  { label: "O-", value: "O-" },
  { label: "AB+", value: "AB+" },
  { label: "AB-", value: "AB-" },
] as const;
