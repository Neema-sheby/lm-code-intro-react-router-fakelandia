import React from "react";
import { NavLink } from "react-router-dom";

interface NavProp {
  to: string;
  ariaLabel: string;
  content: React.ReactNode;
  onClick: () => void;
}

const NavItem: React.FC<NavProp> = ({ to, ariaLabel, content, onClick }) => {
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav__item active" : "nav__item"
        }
        to={to}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {content}
      </NavLink>
    </li>
  );
};

export default NavItem;
