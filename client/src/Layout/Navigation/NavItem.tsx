import React from "react";
import { NavLink } from "react-router-dom";

interface NavProp {
  activeClassName: string;
  inactiveClassName: string;
  to: string;
  content: React.ReactNode;
}

const NavItem: React.FC<NavProp> = ({
  activeClassName,
  inactiveClassName,
  to,
  content,
}) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? activeClassName : inactiveClassName
      }
      to={to}
    >
      {content}
    </NavLink>
  );
};

export default NavItem;
