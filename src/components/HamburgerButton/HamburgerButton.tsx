import classNames from "classnames";

type HamburgerButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

const barStyles =
  "block w-6 h-0.5 bg-electric-yellow transition transform opacity duration-300 ease-in-out transform origin-center";

const HamburgerButton = ({ isOpen, onClick }: HamburgerButtonProps) => {
  return (
    <button
      className={classNames(
        "flex flex-col justify-around h-6 z-30",
        isOpen && "open"
      )}
      onClick={onClick}
    >
      <span
        className={classNames(barStyles, isOpen && "translate-y-2 rotate-45")}
      />
      <span
        className={classNames(barStyles, isOpen && "rotate-45 opacity-0")}
      />
      <span
        className={classNames(
          barStyles,
          isOpen && "translate-y-[-8px] rotate-[-45deg]"
        )}
      />
    </button>
  );
};

export default HamburgerButton;
