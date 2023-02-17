import React from "react";
import { NavLink } from "react-router-dom";

interface NavProp {
  to: string;
  content: React.ReactNode;
}

const NavItem: React.FC<NavProp> = ({ to, content }) => {
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav__item active" : "nav__item"
        }
        to={to}
      >
        {content}
      </NavLink>
    </li>
  );
};

export default NavItem;
