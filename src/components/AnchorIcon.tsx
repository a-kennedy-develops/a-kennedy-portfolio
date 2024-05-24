import { FC, ReactNode } from "react";

interface AnchorIconProps {
  svg: ReactNode;
  href: string;
}

const AnchorIcon: FC<AnchorIconProps> = ({ svg, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {svg}
  </a>
);

export default AnchorIcon;
