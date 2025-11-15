// Converts a date string (YYYY-MM-DD) to an ISO 8601 string with optional time components.
export function dateToISO(
  dateString: Date,
  hour: number = 0,
  minute: number = 0,
  second: number = 0
): string {
  if (!dateString) return "";

  const d = new Date(
    Date.UTC(
      dateString.getUTCFullYear(),
      dateString.getUTCMonth(),
      dateString.getUTCDate(),
      hour,
      minute,
      second
    )
  );

  return d.toISOString().split(".")[0] + "Z";
}

// Converts an ISO 8601 string to a human-readable 12-hour time format (e.g., "02:30 PM").
export const ISOToTime = (isoString: string): string => {
  if (!isoString) return "";
  const date = new Date(isoString);
  const time12h = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return time12h;
};
