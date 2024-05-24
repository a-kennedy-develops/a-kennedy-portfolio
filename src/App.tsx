import Landing from "src/components/sections/Landing/Landing";
import Header from "src/components/Header/Header";
import About from "src/components/sections/About/About";
import Experience from "src/components/sections/Experience/Experience";
import Contact from "src/components/sections/Contact/Contact";
import { PRIMARY_HEADER_LINKS } from "src/utils/constants";
import { useContext } from "react";
import classNames from "classnames";
import { NavContext } from "./contexts/NavContext";

const App = () => {
  const context = useContext(NavContext);

  // useEffect(() => {
  //   if (context?.isMobileNavOpen) {
  //     document.body.classList.add("overflow-hidden");
  //   } else {
  //     document.body.classList.remove("overflow-hidden");
  //   }
  // }, [context?.isMobileNavOpen]);

  return (
    <div className="h-full flex flex-col items-center text-base bg-electric-blue relative">
      <Header links={PRIMARY_HEADER_LINKS} />
      <div
        className={classNames(
          "w-full px-6 md:px-24 lg:px-36",
          context?.isMobileNavOpen && "blur pointer-events-none"
        )}
      >
        <div className="max-w-[62.5rem] mx-auto">
          <Landing />
          <About />
          <Experience />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
