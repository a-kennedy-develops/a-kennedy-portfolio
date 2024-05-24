import classNames from "classnames";

type AnchorButtonProps = {
  description: string;
  size: "sm" | "md" | "lg";
  isFluid?: boolean;
  customClass?: string;
  href: string;
};

const AnchorButton = ({
  description,
  size,
  isFluid = false,
  customClass,
  href,
}: AnchorButtonProps) => {
  const baseStyles = classNames(
    "border-solid bg-transparent whitespace-nowrap max-w-64 rounded border border-electric-yellow hover:bg-electric-yellow hover:text-electric-blue",
    customClass && customClass,
    isFluid && "w-full"
  );

  const sizeStyles = {
    sm: "text-sm py-3 px-4",
    md: "text-sm py-3 px-5",
    lg: "text-base py-5 px-7",
  };

  const anchorStyles = classNames(baseStyles, sizeStyles[size]);

  return (
    <a
      href={href}
      className={anchorStyles}
      target="_blank"
      rel="noopener noreferrer"
    >
      {description}
    </a>
  );
};

export default AnchorButton;
