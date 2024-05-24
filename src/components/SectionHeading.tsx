import classNames from "classnames";
import { formatNumberPlacement } from "src/utils/helpers";

type SectionHeadingProps = {
  placement: number;
  title: string;
  includeSeperator?: boolean;
};

const seperatorStyling =
  'after:content-[""] after:block after:relative after:w-full lg:after:w-72 after:h-px after:ml-4 after:bg-electric-yellow after:top-0.5';

const SectionHeading = ({
  placement,
  title,
  includeSeperator = true,
}: SectionHeadingProps) => {
  return (
    <h2
      className={classNames(
        "text-xl font-medium flex items-center mb-6 whitespace-nowrap",
        includeSeperator && seperatorStyling
      )}
    >
      <span className="text-electric-yellow mr-2.5">
        {formatNumberPlacement(placement)}.
      </span>{" "}
      {title}
    </h2>
  );
};

export default SectionHeading;
