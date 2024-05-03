import { FC } from "react";
import NavMenuButton from "./nav-menu-button/nav-menu-button";

import "./nav-menu.scss"

const NavMenu: FC = () => {
  return (
    <div className="nav-menu">
      <NavMenuButton active>Dashboard</NavMenuButton>
      <NavMenuButton>Payment</NavMenuButton>
      <NavMenuButton>Transactions</NavMenuButton>
      <NavMenuButton>Cards</NavMenuButton>
      <NavMenuButton>Invoices</NavMenuButton>
      <NavMenuButton>Insights</NavMenuButton>
    </div>
  );
};

export default NavMenu;
