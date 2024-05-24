import classNames from "classnames";

type ButtonProps = {
  description: string;
  size: "sm" | "md" | "lg";
  // TODO: Split into seperate components, utilize a ButtonBase component
  type: "primary" | "secondary";
  onClick: () => void;
  isFluid?: boolean;
  customClass?: string;
  active?: boolean; // only applicable for secondary buttons
};

const Button = ({
  description,
  size,
  type,
  onClick,
  isFluid = false,
  customClass,
  active,
}: ButtonProps) => {
  const baseStyles = classNames(
    "border-solid bg-transparent whitespace-nowrap max-w-64",
    customClass && customClass,
    isFluid && 'w-full'
  );

  const primaryStyles =
    "rounded border border-electric-yellow hover:bg-electric-yellow hover:text-electric-blue";

  const secondaryStyles = classNames(
    "border-b-2 md:border-b-0 md:border-l-2 hover:bg-faded-blue-light hover:text-electric-yellow md:text-left",
    active ? "text-electric-yellow border-electric-yellow" : "border-zinc-600"
  );

  const sizeStyles = {
    sm: "text-sm py-3 px-4",
    md: "text-sm py-3 px-5",
    lg: "text-base py-5 px-7",
  };

  const btnStyles = classNames(
    baseStyles,
    sizeStyles[size],
    type === "primary" ? primaryStyles : secondaryStyles
  );
  return (
    <button className={btnStyles} onClick={onClick}>
      {description}
    </button>
  );
};

export default Button;
