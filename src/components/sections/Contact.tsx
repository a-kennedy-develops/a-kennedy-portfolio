import { forwardRef } from "react";
import AnchorButton from "src/components/AnchorButton";
import SectionHeading from "src/components/SectionHeading";
import { SOCIAL_MEDIA_LINKS } from "src/utils/constants";

const Contact = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section
      id="contact"
      className="h-full max-w-[37.5rem] flex flex-col justify-center items-center mb-16 md:mx-auto"
      ref={ref}
    >
      <SectionHeading
        placement={3}
        title="Contact Me"
        includeSeperator={false}
      />
      <div className="w-full flex flex-col text-center">
        <h2 className="font-semibold text-4xl mb-2.5">Let's connect!</h2>
        <p className="mb-7">
          If you see potential for a fit within your project or organization, I
          welcome the chance to explore opportunities and discuss how we can
          achieve remarkable results together.
        </p>
        <div className="flex flex-row justify-center">
          <AnchorButton
            description={"Email"}
            size={"lg"}
            isFluid
            href={"mailto:alexbkennedy96@gmail.com"}
            customClass="text-center mr-3"
          />

          <AnchorButton
            description={"LinkedIn (preferred)"}
            size={"lg"}
            isFluid
            href={SOCIAL_MEDIA_LINKS[1].href}
            customClass="text-center"
          />
        </div>
      </div>
    </section>
  );
});

export default Contact;
