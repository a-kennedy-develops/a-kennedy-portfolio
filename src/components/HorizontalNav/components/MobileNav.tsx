import classNames from "classnames";
import { RefObject, useContext } from "react";
import AnchorButton from "src/components/AnchorButton";
import AnchorIcon from "src/components/AnchorIcon";
import { NavContext } from "src/contexts/NavContext";
import { SOCIAL_MEDIA_LINKS } from "src/utils/constants";
import { scrollToRef } from "src/utils/helpers";
import { HeaderLinkContents } from "src/utils/types";

type MobileNavProps = {
  isOpen: boolean;
  links: HeaderLinkContents[];
};

const MobileNav = ({ isOpen, links }: MobileNavProps) => {
  const context = useContext(NavContext);

  return (
    <aside
      className={classNames(
        "flex items-center flex-col bg-electric-blue w-full transition-all duration-300 ease-in-out transform overflow-hidden",
        isOpen ? "max-h-[100vh]" : "max-h-0"
      )}
    >
      <ul className="flex flex-col">
        {links.map((linkItem, index) => (
          <li key={index} className={classNames("mb-8", index === 0 && "mt-5")}>
            <a
              href={linkItem.link}
              className="group flex flex-col items-center"
              onClick={(event) => {
                event.preventDefault();
                scrollToRef(linkItem.ref as RefObject<HTMLElement>);
                window.history.pushState({}, "", linkItem.link);
                context?.toggleMobileNav();
              }}
            >
              <span className="text-electric-yellow mb-1">0{index + 1}.</span>
              <span className="group-hover:text-electric-yellow">
                {linkItem.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
      <AnchorButton
        description={"Resume"}
        size={"sm"}
        isFluid
        href={"/alexKennedyResume.pdf"}
        customClass="text-center mb-8"
      />

      <div className="flex justify-between mb-4 w-full max-w-40">
        {SOCIAL_MEDIA_LINKS.map((link) => (
          <div
            key={`Social media icon -  ${link.title}`}
            className={"flex transform transition-transform hover:-translate-y-1"}
          >
            <AnchorIcon svg={link.svg} href={link.href} />
          </div>
        ))}
      </div>
    </aside>
  );
};

export default MobileNav;
