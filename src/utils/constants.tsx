import { CompanyInfo, HeaderLinkContents } from "./types";

export const PRIMARY_HEADER_LINKS: HeaderLinkContents[] = [
  { title: "About", link: "#about" },
  { title: "Experience", link: "#experience" },
  { title: "Contact", link: "#contact" },
];

export const RECENT_TECHNOLOGIES: string[] = [
  "TypeScript",
  "JavaScript (ES6+)",
  "React",
  "Redux",
  "Node.js",
  "Express.js",
];

export const WORKED_COMPANIES: CompanyInfo[] = [
  {
    title: "The Bank of London",
    position: "Full-stack Developer",
    startDate: "2022-01-01",
    endDate: "2024-05-31",
    skills: [
      "TypeScript",
      "React",
      "Redux",
      "Tailwind",
      "Node.js",
      "Express.js",
      "Cypress",
      "Jest",
      "Storybook",
    ],
    responsibilities: [
      "Developed responsive web interfaces that efficiently retrieve and display data from varied APIs using React, Redux, and Tailwind. Key accomplishments include creating a highly customizable account dashboard that streamlined essential client operations, building vital functionalities of the Onboarding process, and constructing user settings/notifications features",
      "Engineered and documented multiple reusable, accessible components for a shared library utilized by over 40 developers spanning 5 teams",
      "Created OpenAPI-compliant RESTful APIs using Express.js. Some highlights include APIs for generating documents in PDF, CSV, or TXT formats and for executing advanced multi-factor authentication",
      "Wrote comprehensive unit, integration, and end-to-end tests utilizing Jest and Cypress frameworks, ensuring the reliability and maintainability of the codebase",
    ],
  },
  {
    title: "Merrill Lynch",
    position: "Front-end Engineer",
    startDate: "2020-01-01",
    endDate: "2021-12-31",
    skills: ["JavaScript", "HTML & Sass", "jQuery", "HandleBars"],
    responsibilities: [
      "Designed, developed, and documented reusable, responsive UI components for a styling guide utilized by the whole company",
      "Built the markup, styling, and data-presentation logic for several responsive web pages from start to finish with HTML, SCSS, and JavaScript",
      "Ensured cross-platform accessibility compliance on web pages and UI components",
      "Partnered directly with UX designers to re-design old pages to be aesthetically modern and compliant with WCAG 2.1 guidelines",
    ],
  },
  {
    title: "Duke Energy",
    position: "Full-stack Developer",
    startDate: "2019-08-01",
    endDate: "2020-12-31",
    skills: [
      "TypeScript",
      "Angular",
      "HTML & Sass",
      "Java",
      "SpringBoot",
      "SQL Server Management Studio",
    ],
    responsibilities: [
      "Collaborated on a team of full-stack developers within an Agile environment to provide features and improvements upon an existing web-application",
      "Designed and implemented responsive solutions for multiple web pages with Angular and SCSS",
      "Greatly improved load-time-performance on several webpages using Spring Boot and SSMS",
      "Provided in-depth, detailed demos of new features to business owners and existing users",
    ],
  },
];
