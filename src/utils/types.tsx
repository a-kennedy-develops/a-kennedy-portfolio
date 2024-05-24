import { RefObject } from "react";

export type HeaderLinkContents = {
  title: string;
  link: string;
  ref?: RefObject<HTMLElement>;
};

export type CompanyInfo = {
  title: string;
  position: string;
  startDate: string; // ISO 8601
  responsibilities: string[];
  skills: string[];
  endDate?: string; // IS0 8601, defaults to 'Present' if not provided
};
