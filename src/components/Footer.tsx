import React from "react";
import AnchorIcon from "./AnchorIcon";
import { SOCIAL_MEDIA_LINKS } from "src/utils/constants";

const Footer: React.FC = () => {
  return (
    <footer className="px-7 md:px-10 py-5 w-full">
      <div className="flex justify-center mb-4">
        {SOCIAL_MEDIA_LINKS.map((link) => (
          <div key={`Social media icon -  ${link.title}`} className="mr-6">
            <AnchorIcon svg={link.svg} href={link.href} />
          </div>
        ))}
      </div>
      <p className="text-center">
        Built by Alex Kennedy using <span className="text-electric-yellow">React</span> and <span className="text-electric-yellow">Tailwind</span>
      </p>
    </footer>
  );
};

export default Footer;
