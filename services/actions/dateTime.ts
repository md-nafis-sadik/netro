export const timestampDisplay = (timestamp: number) => {
  const date = new Date(timestamp * 1000);

  // Use fixed, manual month mapping (not locale-based)
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month}, ${year}`;
};

export const getReadableDate = (input: string) => {
  const date = new Date(input);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };
  const parts = date.toLocaleDateString("en-GB", options).split(" ");
  return `${parts[0]} ${parts[1]}, ${parts[2]}`;
};
