// Converts a date string (YYYY-MM-DD) to an ISO 8601 string with optional time components.
// The result is in UTC, based on the given IANA timezone.
export function dateToISO({
  date,
  hour = 0,
  minute = 0,
  second = 0,
  timeZone, // e.g. "Asia/Dhaka"
}: {
  date: Date;
  hour?: number;
  minute?: number;
  second?: number;
  timeZone?: string;
}): string {
  if (!date) return "";

  // Use Intl.DateTimeFormat to get timezone offset in minutes
  const tz = timeZone || Intl.DateTimeFormat().resolvedOptions().timeZone;
  const dtf = new Intl.DateTimeFormat("en-US", {
    timeZone: tz,
    hour12: false,
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  // Build local time in the target timezone
  const parts = dtf.formatToParts(date);
  const y = parseInt(parts.find((p) => p.type === "year")?.value || "0", 10);
  const m =
    parseInt(parts.find((p) => p.type === "month")?.value || "1", 10) - 1;
  const d = parseInt(parts.find((p) => p.type === "day")?.value || "1", 10);

  const h = hour;
  const min = minute;
  const s = second;

  // Create a Date in UTC using the "local" time in that timezone
  const utcDate = new Date(Date.UTC(y, m, d, h, min, s));

  return utcDate.toISOString().split(".")[0] + "Z";
}

// Converts an ISO 8601 string to a human-readable 12-hour time format (e.g., "02:30 PM") in a specific IANA timezone
export const ISOToTime = (isoString: string, timeZone?: string): string => {
  if (!isoString) return "";
  const date = new Date(isoString);

  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: timeZone || Intl.DateTimeFormat().resolvedOptions().timeZone,
  });
};

// Returns a date range starting from today in the specified timezone
export function getDateRangeFromTimezone(
  tzString?: string,
  days: number = 10
): { fromDate: Date; toDate: Date } {
  console.log(tzString);
  const timeZone = tzString || Intl.DateTimeFormat().resolvedOptions().timeZone;
  const now = new Date();

  // Convert current date to target timezone
  const localDateStr = now.toLocaleString("en-US", { timeZone });
  const today = new Date(localDateStr);

  const fromDate = new Date(today);
  const toDate = new Date(today);
  toDate.setDate(toDate.getDate() + days);

  return { fromDate, toDate };
}

// Formats a date string into a full date representation in the specified IANA timezone
export function formatFullDateTimeTZ(
  dateStr: Date | string | undefined,
  timeZone?: string
): string {
  if (!dateStr) return "";

  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return "";

  const tz = timeZone || Intl.DateTimeFormat().resolvedOptions().timeZone;

  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: tz,
  }).format(date);
}
