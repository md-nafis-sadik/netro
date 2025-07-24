export const timestampDisplay = (timestamp: number) => {
  const date = new Date(timestamp * 1000);

  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  const formattedDate = `${day} ${month}, ${year}`;

  return formattedDate;
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
