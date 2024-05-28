// TODO: Update for usage in all sections

import classNames from "classnames";
import { ReactNode } from "react";

type SectionWrapperProps = {
  children: ReactNode;
  observed: boolean;
};

const SectionWrapper = ({ children, observed }: SectionWrapperProps) => {
  return (
    <div
      className={classNames(
        "flex flex-col transition-all duration-700",
        observed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
