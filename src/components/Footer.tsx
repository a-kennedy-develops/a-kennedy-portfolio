import React from "react";
import AnchorIcon from "./AnchorIcon";
import { SOCIAL_MEDIA_LINKS } from "src/utils/constants";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center px-7 md:px-10 py-5 w-full">
      <div className="flex justify-between mb-4 w-full max-w-40">
        {SOCIAL_MEDIA_LINKS.map((link) => (
          <div
            key={`Social media icon -  ${link.title}`}
            className={
              "flex transform transition-transform hover:-translate-y-1"
            }
          >
            <AnchorIcon svg={link.svg} href={link.href} />
          </div>
        ))}
      </div>
      <p className="text-center">
        Built by Alex Kennedy using{" "}
        <a
          href="https://react.dev/"
          className="text-electric-yellow hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          className="text-electric-yellow hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tailwind
        </a>
      </p>
    </footer>
  );
};

export default Footer;
