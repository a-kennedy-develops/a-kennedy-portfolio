export const formatNumberPlacement = (num: number) =>
  num < 10 ? `0${num}` : `${num}`;

export const formatToMMYY = (date: Date) =>
  new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    timeZone: "UTC",
  }).format(date);
