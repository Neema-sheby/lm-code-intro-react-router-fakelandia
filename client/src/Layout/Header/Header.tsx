import Nav from "../Navigation/Navigation";
import logo1 from "../../Images/justice.png";
import logo2 from "../../Images/fakelandiaLogo1.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__img-box">
        <NavLink to="/">
          <div className="header__img-box">
            <img
              className="header__img--small"
              src={logo1}
              alt="Justice Department of Fakelandia Logo"
            />
            <img
              className="header__img"
              src={logo2}
              alt="Justice Department of Fakelandia Logo"
            />
          </div>
        </NavLink>
      </div>

      <Nav />
    </header>
  );
};

export default Header;
