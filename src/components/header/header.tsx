import { FC } from "react";

import "./header.scss"
import Logos from "./logos/logos";
import NavMenu from "./nav-menu/nav-menu";
import UserMenu from "./user-menu/user-menu";

const Header: FC = () => {
  return (
  <div className="header">
    <Logos/>
    <NavMenu/>
    <UserMenu/>
  </div>
  );
};

export default Header;
