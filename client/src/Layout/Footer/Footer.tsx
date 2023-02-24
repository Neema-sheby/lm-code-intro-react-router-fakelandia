import { NavLink } from "react-router-dom";
import logo1 from "../../Images/justice.png";
import logo2 from "../../Images/fakelandiaLogo1.png";

const Footer = () => {
  return (
    <footer className="footer">
      <NavLink className="footer_nav" to="/">
        <div className="header__img-box">
          <img
            className="footer__img--small"
            src={logo1}
            alt="Justice Department of Fakelandia Logo"
          />
          <img
            className="footer__img"
            src={logo2}
            alt="Justice Department of Fakelandia Logo"
          />
        </div>
      </NavLink>

      <p>
        Copyright © 2023 by Neema. All rights reserved. This website was
        developed as part of the Tech Returners programme
      </p>
    </footer>
  );
};

export default Footer;
