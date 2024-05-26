import { PRIMARY_HEADER_LINKS, SOCIAL_MEDIA_LINKS } from "src/utils/constants";
import { useContext, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { NavContext } from "./contexts/NavContext";
import { HeaderLinkContents } from "./utils/types";
import AnchorIcon from "./components/AnchorIcon";
import Landing from "./components/sections/Landing";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";
import HorizontalNav from "./components/HorizontalNav/HorizontalNav";

const App = () => {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

  const context = useContext(NavContext);

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const refs = [aboutRef, experienceRef, contactRef];

  const handleScroll = () => {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    const clientHeight =
      document.documentElement.clientHeight || window.innerHeight;
    const scrolledToBottom =
      Math.ceil(scrollTop + clientHeight) >= scrollHeight;

    setIsScrolledToBottom(scrolledToBottom);
  };

  const LINKS_WITH_REFS: HeaderLinkContents[] = PRIMARY_HEADER_LINKS.map(
    (link, index) => ({
      ...link,
      ref: refs[index],
    })
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-full flex flex-col items-center text-base bg-electric-blue relative">
      <HorizontalNav links={LINKS_WITH_REFS} />
      <div
        className={classNames(
          "w-full px-6 md:px-24 lg:px-36 transition-all duration-300",
          context?.isMobileNavOpen && "blur pointer-events-none"
        )}
      >
        <div className="max-w-[62.5rem] mx-auto">
          <Landing />
          <About ref={aboutRef} />
          <Experience ref={experienceRef} />
          <Contact ref={contactRef} />
        </div>

        {!isScrolledToBottom && (
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
        )}

        {!isScrolledToBottom && (
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
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
