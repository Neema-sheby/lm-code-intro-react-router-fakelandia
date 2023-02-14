import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <NavLink className="nav__item" to="/">
          Home
        </NavLink>
        <NavLink className="nav__item" to="/misdemeanours">
          Misdemeanours
        </NavLink>
        <NavLink className="nav__item" to="/confession">
          Confession
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
