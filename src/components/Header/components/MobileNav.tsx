import classNames from "classnames";
import { RefObject, useContext } from "react";
import AnchorButton from "src/components/AnchorButton";
import { NavContext } from "src/contexts/NavContext";
import { scrollToRef } from "src/utils/helpers";
import { HeaderLinkContents } from "src/utils/types";

type MobileNavProps = {
  isOpen: boolean;
  links: HeaderLinkContents[];
};

const MobileNav = ({ isOpen, links }: MobileNavProps) => {
  const context = useContext(NavContext);
  if (!isOpen) return null;

  return (
    <aside
      className={classNames(
        "fixed flex items-center flex-col inset-x-0 top-full px-7 py-5 bg-electric-blue border-t border-electric-yellow shadow-md",
        context?.isMobileNavOpen ? "animate-slideDown" : ""
      )}
    >
      <ul className="flex flex-col">
        {links.map((linkItem, index) => (
          <li key={index} className={"mb-8"}>
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
        customClass="text-center"
      />
    </aside>
  );
};

export default MobileNav;
