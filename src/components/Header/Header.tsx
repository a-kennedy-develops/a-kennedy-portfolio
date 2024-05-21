import icon from "src/assets/icons/kennedyIcon.png";
import { HeaderLinkContents } from "src/utils/types";
import classNames from "classnames";
import Button from "../Button/Button";
import { useEffect, useState } from "react";

type HeaderProps = {
  links: HeaderLinkContents[];
  resume?: boolean;
};

const Header = ({ links, resume = true }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={classNames(
        "w-full fixed flex items-center px-12 py-5 leading-4 backdrop-blur-3xl z-10",
        isScrolled && 'backdrop-blur-3xl shadow-md'
      )}
    >
      <img src={icon} className="h-11 w-11 mr-auto" />
      <ul className="flex">
        {links.map((linkItem, index) => (
          <li
            key={index}
            className={classNames(
              index === links.length - 1 && !resume ? "" : "mr-5"
            )}
          >
            <a href={linkItem.link} className="group">
              <span className="text-electric-yellow">0{index + 1}. </span>
              <span className="group-hover:text-electric-yellow">
                {linkItem.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
      {resume && (
        <Button
          description="Resume"
          size="sm"
          type="primary"
          onClick={() => {}}
        />
      )}
    </nav>
  );
};

export default Header;
