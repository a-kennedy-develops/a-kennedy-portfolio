import classNames from "classnames";
import { RefObject, useContext } from "react";
import AnchorButton from "src/components/AnchorButton";
import SocialMediaBar from "src/components/SocialMediaBar";
import { NavContext } from "src/contexts/NavContext";
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

      <SocialMediaBar direction="horizontal"/>
    </aside>
  );
};

export default MobileNav;
