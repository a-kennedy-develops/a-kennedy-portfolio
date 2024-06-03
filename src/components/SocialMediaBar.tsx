import { SOCIAL_MEDIA_LINKS } from "src/utils/constants";
import classNames from "classnames";
import AnchorIcon from "./AnchorIcon";
import { FC } from "react";
import { linePedestal } from "src/styles/tailwind-styles";

type SocialMediaLink = {
  direction: "vertical" | "horizontal";
};

const SocialMediaLinks: FC<SocialMediaLink> = ({ direction }) => {
  return (
    <ul
      className={classNames(
        "flex m-0 p-0 list-none w-full max-w-40",
        direction === "vertical"
          ? `flex-col items-center ${linePedestal}`
          : "justify-between"
      )}
    >
      {SOCIAL_MEDIA_LINKS.map((link) => (
        <li
          key={`Social media icon -  ${link.title}`}
          className={classNames(
            "flex transform transition-transform hover:-translate-y-1",
            direction === "vertical" && "mb-6"
          )}
        >
          <AnchorIcon svg={link.svg} href={link.href} />
        </li>
      ))}
    </ul>
  );
};

export default SocialMediaLinks;
