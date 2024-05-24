import Landing from "src/components/sections/Landing/Landing";
import Header from "src/components/Header/Header";
import About from "src/components/sections/About/About";
import Experience from "src/components/sections/Experience/Experience";
import Contact from "src/components/sections/Contact/Contact";
import { PRIMARY_HEADER_LINKS } from "src/utils/constants";
import { useContext, useRef } from "react";
import classNames from "classnames";
import { NavContext } from "./contexts/NavContext";
import { HeaderLinkContents } from "./utils/types";

const App = () => {
  const context = useContext(NavContext);

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const refs = [aboutRef, experienceRef, contactRef];

  const LINKS_WITH_REFS: HeaderLinkContents[] = PRIMARY_HEADER_LINKS.map(
    (link, index) => ({
      ...link,
      ref: refs[index],
    })
  );

  return (
    <div className="h-full flex flex-col items-center text-base bg-electric-blue relative">
      <Header links={LINKS_WITH_REFS} />
      <div
        className={classNames(
          "w-full px-6 md:px-24 lg:px-36",
          context?.isMobileNavOpen && "blur pointer-events-none"
        )}
      >
        <div className="max-w-[62.5rem] mx-auto">
          <Landing />
          <About ref={aboutRef} />
          <Experience ref={experienceRef} />
          <Contact ref={contactRef} />
        </div>
      </div>
    </div>
  );
};

export default App;
