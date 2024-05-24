import { RefObject } from "react";

export const formatNumberPlacement = (num: number) =>
  num < 10 ? `0${num}` : `${num}`;

export const formatToMMYY = (date: Date) =>
  new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    timeZone: "UTC",
  }).format(date);

  export const scrollToRef = (ref: RefObject<HTMLElement>) => {
    if (ref.current) {
      const top = ref.current.getBoundingClientRect().top + window.scrollY - 192;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };
