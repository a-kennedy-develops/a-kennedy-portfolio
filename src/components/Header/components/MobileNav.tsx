import classNames from "classnames";
import { useContext } from "react";
import Button from "src/components/Button/Button";
import { NavContext } from "src/contexts/NavContext";
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
              onClick={() => {
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
      <Button
        description="Resume"
        size="sm"
        type="primary"
        isFluid
        onClick={() => {}}
      />
    </aside>
  );
};

export default MobileNav;
