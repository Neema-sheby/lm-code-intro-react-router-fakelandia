import React from "react";
import NavItem from "./NavItem";

const Nav: React.FC = () => {
  return (
    <>
      <div className="navbtn__container">
        <input id="closeButton" type="checkbox" className="navbtn" />
        <label htmlFor="closeButton" className="navbtn__hamburger-box">
          <span className="navbtn__hamburger"></span>
        </label>
      </div>
      <nav className="nav">
        <ul className="nav__list">
          <NavItem
            to="/"
            ariaLabel="home"
            content={
              <svg className="icon icon-home-outline">
                <use xlinkHref="../../public/Svg/home-outline.svg#icon-home-outline"></use>
              </svg>
            }
          />
          <NavItem
            to="/misdemeanours"
            ariaLabel="misdemeanours"
            content="Misdemeanours"
          />
          <NavItem
            to="/confession"
            ariaLabel="confession"
            content="Confess To Us"
          />
        </ul>
      </nav>
    </>
  );
};

export default Nav;
