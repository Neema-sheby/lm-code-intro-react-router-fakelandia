import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/misdemeanours">Misdemeanours</NavLink>
        <NavLink to="/confession">Confession</NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
