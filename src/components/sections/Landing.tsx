import classNames from "classnames";
import { forwardRef, useEffect, useState } from "react";
import { SectionProps } from "src/utils/types";

const Landing = forwardRef<HTMLElement, SectionProps>((props, ref) => {
  const [observed, setObserved] = useState(false);

  useEffect(() => {
    props.isObserved && setObserved(true);
  }, [props.isObserved]);

  return (
    <section
      id="landing"
      ref={ref}
      className={classNames(
        "h-screen min-h-screen flex flex-col justify-center mb-12"
      )}
    >
      <div
        className={classNames(
          "flex flex-col transition-all duration-700",
          observed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}
      >
        <div className="mb-4">
          <h1 className="text-2xl text-electric-yellow">Hello, my name is</h1>
        </div>
        <div className="mb-1">
          <h2 className="text-landingClamp leading-none">Alex Kennedy.</h2>
        </div>
        <div className="mb-4">
          <h3 className="text-landingClamp leading-none text-slate-400">
            I build web applications.
          </h3>
        </div>
      </div>
    </section>
  );
});

export default Landing;
