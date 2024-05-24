import logoDefault from "src/assets/icons/logoDefault.png";
import logoHover from "src/assets/icons/logoHover.png";
import { HeaderLinkContents } from "src/utils/types";
import classNames from "classnames";
import { RefObject, useContext, useEffect, useState } from "react";
import HamburgerButton from "./components/HamburgerButton";
import MobileNav from "./components/MobileNav";
import { NavContext } from "src/contexts/NavContext";
import AnchorButton from "../AnchorButton";
import { scrollToRef } from "src/utils/helpers";

type HeaderProps = {
  links: HeaderLinkContents[];
  resume?: boolean;
};

const Header = ({ links, resume = true }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const context = useContext(NavContext);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767 && context?.isMobileNavOpen) {
        context.toggleMobileNav();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [context]);

  return (
    <nav
      className={classNames(
        "w-full fixed flex items-center px-7 md:px-10 py-5 leading-4 backdrop-blur-3xl z-20",
        isScrolled && !context?.isMobileNavOpen && "backdrop-blur-3xl shadow-md"
      )}
    >
      <a href="/" className="mr-auto" onClick={() => window.location.reload()}>
        <img
          src={isLogoHovered ? logoHover : logoDefault}
          className="h-11 w-11  z-30 cursor-pointer"
          alt="Logo"
          onMouseEnter={() => setIsLogoHovered(true)}
          onMouseLeave={() => setIsLogoHovered(false)}
        />
      </a>

      <div className="hidden md:flex items-center">
        <ul className="flex">
          {links.map((linkItem, index) => (
            <li
              key={index}
              className={classNames(
                index === links.length - 1 && !resume ? "" : "mr-5"
              )}
            >
              <a
                href={linkItem.link}
                className="hover:text-electric-yellow transition-colors duration-200"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToRef(linkItem.ref as RefObject<HTMLElement>);
                  window.history.pushState({}, "", linkItem.link);
                }}
              >
                <span className="text-electric-yellow">0{index + 1}. </span>
                <span>{linkItem.title}</span>
              </a>
            </li>
          ))}
        </ul>
        {resume && (
          <AnchorButton
            description={"Resume"}
            size={"sm"}
            href={"/alexKennedyResume.pdf"}
          />
        )}
      </div>
      <div className="flex md:hidden items-center">
        <HamburgerButton
          isOpen={context?.isMobileNavOpen as boolean}
          onClick={() => context?.toggleMobileNav()}
        />
      </div>
      <MobileNav isOpen={context?.isMobileNavOpen as boolean} links={links} />
    </nav>
  );
};

export default Header;
