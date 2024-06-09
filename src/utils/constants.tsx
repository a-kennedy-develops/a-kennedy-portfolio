import { CompanyInfo, HeaderLinkContents, MediaLink } from "./types";

export const PRIMARY_HEADER_LINKS: HeaderLinkContents[] = [
  { title: "About", link: "#about" },
  { title: "Experience", link: "#experience" },
  { title: "Contact", link: "#contact" },
];

export const RECENT_TECHNOLOGIES: string[] = [
  "TypeScript",
  "React",
  "Redux",
  "Next.js",
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
      "Next.js",
      "Node.js",
      "Express.js",
      "Cypress",
      "Jest",
      "AWS",
      "Storybook",
    ],
    responsibilities: [
      "Developed responsive web interfaces for the core application that efficiently retrieved and displayed data from varied APIs using React, Redux, NextJS, and Tailwind under a monorepo repo hosted with AWS. Key accomplishments include creating a highly customizable account dashboard that streamlined essential client operations, building vital functionalities of the Onboarding process, and constructing user settings/notifications pages and features",
      "Engineered and documented multiple reusable, accessible components for a shared library utilized by over 40 developers spanning 5 teams",
      "Built diverse OpenAPI-compliant RESTful APIs with Express.js, ensuring seamless and efficient integration with our MongoDB database and third-party providers such as Okta and SAP",
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
      "Led the design, development, and documentation of reusable, responsive UI components within a styling library utilized by the primary customer-facing application",
      "Created multiple responsive web pages, encompassing markup, styling, and data presentation using HTML, Sass, and JavaScript",
      "Ensured comprehensive accessibility compliance across platforms for both web pages and UI components",
      "Collaborated closely with UX designers to revamp outdated pages, facilitating a modern user experience in compliance with WCAG 2.1 standards",
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
      "Collaborated with a small Agile team to develop new pages, features, and improvements for an internal application",
      "Designed and constructed responsive interfaces using Angular and Sass",
      "Optimized existing APIs with Spring Boot and SSMS, reducing load times by over 50%",
      "Provided in-depth, detailed demos of new features to business owners and existing users",
    ],
  },
];

// SVGs from Feather Icons (https://feathericons.com/)
export const SOCIAL_MEDIA_LINKS: MediaLink[] = [
  {
    title: "GitHub",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="fill-slate-400 hover:fill-electric-yellow"
      >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    ),
    href: "https://github.com/a-kennedy-develops",
  },
  {
    title: "LinkedIn",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="fill-slate-400 hover:fill-electric-yellow"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
    href: "https://www.linkedin.com/in/alexkennedy96/",
  },
  {
    title: "CodePen",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-slate-400 hover:stroke-electric-yellow"
      >
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
        <line x1="12" y1="22" x2="12" y2="15.5"></line>
        <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
        <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
        <line x1="12" y1="2" x2="12" y2="8.5"></line>
      </svg>
    ),
    href: "https://codepen.io/alexbkennedy96",
  },
  // {
  //   title: "Instagram",
  //   svg: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       strokeWidth="2"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       className="stroke-slate-400 hover:stroke-electric-yellow"
  //     >
  //       <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
  //       <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
  //       <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  //     </svg>
  //   ),
  //   href: "https://www.instagram.com/a_kennedy96/",
  // },
];

export const LANDING_TITLES: string[] = [
  "Software Engineer",
  "Frontend Specialist",
  "Full-stack Developer",
  "UX Enthusiast",
  "Code Slinger",
  "Cat Lover",
];
