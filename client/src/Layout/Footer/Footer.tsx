import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <NavLink className="footer_nav" to="/">
        <img
          className="footer__img"
          src="../../public/Images/logo.jpg"
          alt="Justice Department of Fakelandia Logo"
        />
      </NavLink>

      <p>
        Copyright © 2023 by Neema. All rights reserved. This website was
        developed as part of the Tech Returners programme
      </p>
    </footer>
  );
};

export default Footer;
