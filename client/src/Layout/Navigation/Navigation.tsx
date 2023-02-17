import { matchPath, NavLink, useLocation } from "react-router-dom";
import NavItem from "./NavItem";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <NavItem
          inactiveClassName="nav__item"
          activeClassName="nav__item active"
          to="/"
          content={
            <svg className="icon icon-home-outline">
              <use xlinkHref="../../public/Svg/home-outline.svg#icon-home-outline"></use>
            </svg>
          }
        />
        <NavItem
          inactiveClassName="nav__item"
          activeClassName="nav__item active"
          to="/misdemeanours"
          content="Misdemeanours"
        />
        <NavItem
          inactiveClassName="nav__item"
          activeClassName="nav__item active"
          to="/confession"
          content="Confession"
        />
      </ul>
    </nav>
  );
};

export default Nav;
