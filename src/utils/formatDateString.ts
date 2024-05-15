
export const formatDateString = (dateString: string): string => {
  const date = new Date(dateString);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const formattedDay =
    date.getUTCDate() <= 9 ? "0" + date.getUTCDate() : date.getUTCDate();

  return (
    months[date.getUTCMonth()] +
    " " +
    formattedDay +
    ", " +
    date.getUTCFullYear()
  );
};
