import React from "react";
import SocialMediaBar from "./SocialMediaBar";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center px-7 md:px-10 py-5 w-full">
      <div className="mb-4 flex w-full justify-center">
        <SocialMediaBar direction="horizontal" />
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
