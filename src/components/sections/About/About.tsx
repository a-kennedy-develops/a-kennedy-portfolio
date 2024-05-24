import contactPhoto from "src/assets/contact-photos/me.png";
import SectionHeading from "src/components/SectionHeading/SectionHeading";
import { RECENT_TECHNOLOGIES } from "src/utils/constants";
import { bulletPointStyle } from "src/styles/styles";

const About = () => {
  return (
    <section id="about" className="h-full flex flex-col justify-center mb-48 md:mx-auto">
      <SectionHeading placement={1} title="About Me" />
      <div className="flex flex-col-reverse md:grid md:grid-cols-[3fr_2fr] gap-14">
        <div>
          <p className="mb-4">
            Hi! I'm Alex and I love creating things that people interact with
            digitally. I began my journey with development on simple web pages
            and Java projects in college, and since then I've had the pleasure
            of working for an{" "}
            <a
              href="https://www.duke-energy.com/home"
              className="text-electric-yellow"
            >
              energy company
            </a>
            , a{" "}
            <a
              href="https://www.ml.com/working-with-merrill-lynch-financial-advisor/why-merrill.html"
              className="text-electric-yellow"
            >
              massive wealth-management firm
            </a>
            , and a{" "}
            <a href="https://thebankoflondon.com/" className="text-electric-yellow">
              unicorn startup
            </a>
            .
          </p>
          <p className="mb-4">
            Today I am dedicated to expanding my knowledge and refining my
            skills in creating accessible and engaging user experiences for all.
            With a strong background in full-stack development and a particular
            emphasis on front-end technologies, I am eagerly seeking the next
            opportunity to collaborate on innovative, user-centric projects.
          </p>
          <p className="mb-4">
            Here are a few technologies I've been working with recently:
          </p>
          <ul className="grid gap-3 grid-cols-[minmax(140px,_200px)_minmax(140px,_200px)]">
            {RECENT_TECHNOLOGIES.map((title) => (
              <li className={`relative pl-5 ${bulletPointStyle} after:leading-6`}>
                {title}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-electric-yellow h-fit rounded self-center md:self-auto w-fit">
          <img
            src={contactPhoto}
            alt="Headshot of Alex Kennedy"
            className="mix-blend-darken rounded w-full max-w-80 md:min-w-52 lg:min-w-80"
          />
        </div>
      </div>
    </section>
  );
};

export default About;