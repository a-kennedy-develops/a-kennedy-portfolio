import Landing from "src/components/sections/Landing/Landing";
import Header from "src/components/Header/Header";
import About from "src/components/sections/About/About";
import Experience from "src/components/sections/Experience/Experience";
import Contact from "src/components/sections/Contact/Contact";
import { PRIMARY_HEADER_LINKS, SOCIAL_MEDIA_LINKS } from "src/utils/constants";
import { useContext, useRef } from "react";
import classNames from "classnames";
import { NavContext } from "./contexts/NavContext";
import { HeaderLinkContents } from "./utils/types";
import AnchorIcon from "./components/AnchorIcon";

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

        <div className="w-10 fixed bottom-0 hidden md:block md:left-5 lg:left-10 right-auto z-10 text-slate-400">
          <ul className="flex flex-col items-center m-0 p-0 list-none after-line">
            {SOCIAL_MEDIA_LINKS.map((link) => (
              <li
                key={`Social media icon -  ${link.title}`}
                className="mb-6 transform transition-transform hover:-translate-y-1"
              >
                <AnchorIcon svg={link.svg} href={link.href} />
              </li>
            ))}
          </ul>
        </div>

        <div className="w-10 fixed bottom-0 hidden md:block md:right-5 lg:right-10 left-auto z-10 text-slate-400">
          <div className="flex flex-col items-center relative after-line">
            <a
              href="mailto:alexbkennedy96@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm m-y-5 m-x-auto text-slate-400 hover:text-electric-yellow tracking-widest mb-6 transform transition-transform hover:-translate-y-1"
              style={{ writingMode: "vertical-rl" }}
            >
              alexbkennedy96@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
