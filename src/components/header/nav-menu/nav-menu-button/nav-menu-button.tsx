import { FC, ReactNode } from "react";

import "./nav-menu-button.scss"

const NavMenuButton: FC<{ children: ReactNode, active?:boolean }> = ({ children, active }) => {
  return <button className={`nav-menu-btn ${active?'active-btn':''}`}>{children}</button>;
};

export default NavMenuButton;
