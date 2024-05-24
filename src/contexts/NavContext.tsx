import { createContext, useState } from "react";

type NavContextType = {
  isMobileNavOpen: boolean;
  toggleMobileNav: () => void;
};

export const NavContext = createContext<NavContextType | undefined>(undefined);

import React from "react";

export const NavProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <NavContext.Provider value={{ isMobileNavOpen, toggleMobileNav }}>
      {children}
    </NavContext.Provider>
  );
};
