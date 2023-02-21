import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <NavLink className="footer_nav" to="/">
        <div className="header__img-box">
          <img
            className="footer__img--small"
            src="../../public/Images/justice.png"
            alt="Justice Department of Fakelandia Logo"
          />
          <img
            className="footer__img"
            src="../../public/Images/fakelandiaLogo1.png"
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
