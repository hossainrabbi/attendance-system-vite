import dayjs, { type Dayjs } from "dayjs";

/**
 * Disables all past dates relative to today.
 *
 * Commonly used in date picker components to prevent
 * selecting dates before the current day.
 *
 * @param current - The date currently being evaluated
 * @returns true if the date is in the past, otherwise false
 */
export const disablePastDates = (current: Dayjs): boolean => {
  return current.isBefore(dayjs().startOf("day"));
};

/**
 * Converts a 24-hour time string (HH:mm or HH:mm:ss)
 * into a 12-hour formatted time with AM/PM.
 *
 * @param time24 - Time in 24-hour format (e.g., "18:30")
 * @returns Time formatted in 12-hour format (e.g., "6:30 PM")
 */
export const formatTo12HourTime = (time24: string): string => {
  return dayjs(`2000-01-01 ${time24}`).format("h:mm A");
};

/**
 * Converts a duration in seconds into a `mm:ss` time format.
 *
 * @param seconds - Total time in seconds
 * @returns Formatted time string in minutes and seconds (e.g., "5:07")
 */
export const formatSecondsToMinutes = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};
