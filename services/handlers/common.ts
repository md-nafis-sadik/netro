// Converts a date string (YYYY-MM-DD) to an ISO 8601 string with optional time components.
export function dateToISO({
  date,
  hour = 0,
  minute = 0,
  second = 0,
}: {
  date: Date;
  hour?: number;
  minute?: number;
  second?: number;
}): string {
  if (!date) return "";

  const d = new Date(
    Date.UTC(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      hour,
      minute,
      second
    )
  );

  return d.toISOString().split(".")[0] + "Z";
}

// Converts an ISO 8601 string to a human-readable 12-hour time format (e.g., "02:30 PM").
export const ISOToTime = (
  isoString: string,
  timezoneLabel?: string
): string => {
  if (!isoString) return "";

  const date = new Date(isoString);
  let options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  if (timezoneLabel) {
    // If timezone label like "(-06:00) CST - Chicago"
    const offsetMatch = timezoneLabel.match(/\((-?\d{2}):(\d{2})\)/);
    if (offsetMatch) {
      const hoursOffset = parseInt(offsetMatch[1], 10);
      const minsOffset = parseInt(offsetMatch[2], 10);
      const totalOffsetMinutes =
        hoursOffset * 60 + (hoursOffset >= 0 ? minsOffset : -minsOffset);

      // Create a new Date adjusted by offset
      const localTime = new Date(
        date.getTime() + totalOffsetMinutes * 60 * 1000
      );
      return localTime.toLocaleTimeString([], options);
    }
  }
  // Default: use browser local time
  return date.toLocaleTimeString([], options);
};

export function getDateRangeFromTimezone(
  tzString?: string,
  days: number = 10
): { fromDate: Date; toDate: Date } {
  let offsetHours = 0;
  let offsetMinutes = 0;

  // 1. If no timezone sent → fallback to system timezone
  if (!tzString) {
    tzString = Intl.DateTimeFormat().resolvedOptions().timeZone;
  }

  // 2. If the string contains "(", try to parse the offset format
  if (tzString.includes("(")) {
    const match = tzString.match(/\((-?\d{1,2}):(\d{2})\)/);

    if (match) {
      offsetHours = parseInt(match[1], 10);
      offsetMinutes = parseInt(match[2], 10);
    } else {
      // BAD FORMAT → fallback to system timezone
      tzString = Intl.DateTimeFormat().resolvedOptions().timeZone;
    }
  }

  // 3. If tzString is IANA ("Asia/Dhaka", "Pacific/Fiji")
  if (!tzString.includes("(")) {
    const now = new Date();
    const local = new Date(now.toLocaleString("en-US", { timeZone: tzString }));

    const diff = (local.getTime() - now.getTime()) / 60000;
    offsetHours = Math.floor(diff / 60);
    offsetMinutes = Math.abs(diff % 60);
  }

  // Convert UTC to target timezone
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const target = utc + (offsetHours * 60 + offsetMinutes) * 60000;

  const today = new Date(target);

  const fromDate = new Date(today);
  const toDate = new Date(today);
  toDate.setDate(toDate.getDate() + days);

  return { fromDate, toDate };
}
