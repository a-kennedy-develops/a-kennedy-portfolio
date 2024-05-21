import Landing from "src/components/sections/Landing/Landing";
import Header from "src/components/Header/Header";
import About from "src/components/sections/About/About";
import Experience from "src/components/sections/Experience/Experience";
import Contact from "src/components/sections/Contact/Contact";
import { PRIMARY_HEADER_LINKS } from "src/utils/constants";

const App = () => {
  return (
    <div className="h-full flex flex-col items-center text-base bg-electric-blue">
      <Header links={PRIMARY_HEADER_LINKS} />
      <div className="w-full px-12 md:px-24 lg:px-36">
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
