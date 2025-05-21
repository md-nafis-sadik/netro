export const timestampDisplay = (timestamp: number) => {
  const date = new Date(timestamp * 1000);

  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  const formattedDate = `${day} ${month}, ${year}`;

  return formattedDate;
};
