import React, { useState } from "react";
import NavItem from "./NavItem";
import svg from "../../Svg/home-outline.svg";
import svgOpen from "../../Svg/menu.svg";
import svgClose from "../../Svg/x-circle.svg";

const Nav: React.FC = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [clickedLink, setClickedLink] = useState<boolean>(false);

  return (
    <>
      <div
        className={clicked && !clickedLink ? "hidden" : "nav__menu"}
        onClick={() => {
          setClicked(!clicked);
          setClickedLink(!setClickedLink);
        }}
      >
        <svg className="icon__menu icon-menu">
          <use xlinkHref={`${svgOpen}#icon-menu`}></use>
        </svg>
      </div>
      <div
        className={clicked && !clickedLink ? "nav__menu" : "hidden"}
        onClick={() => {
          setClicked(!clicked);
          setClickedLink(!setClickedLink);
        }}
      >
        <svg className="icon__menu icon-x-circle">
          <use xlinkHref={`${svgClose}#icon-x-circle`}></use>
        </svg>
      </div>
      <nav className={clicked && !clickedLink ? "nav__menuBar" : "hidden"}>
        <ul className="nav__list">
          <NavItem
            to="/"
            ariaLabel="home--menu"
            content={
              <svg className="icon icon-home-outline">
                <use xlinkHref={`${svg}#icon-home-outline`}></use>
              </svg>
            }
            onClick={() => {
              setClickedLink(true);
              setClicked(!clicked);
            }}
          />
          <NavItem
            to="/misdemeanours"
            ariaLabel="misdemeanours--menu"
            content="Misdemeanours"
            onClick={() => {
              setClickedLink(true);
              setClicked(!clicked);
            }}
          />
          <NavItem
            to="/confession"
            ariaLabel="confession--menu"
            content="Confess To Us"
            onClick={() => {
              setClickedLink(true);
              setClicked(!clicked);
            }}
          />
        </ul>
      </nav>

      <nav className="nav">
        <ul className="nav__list">
          <NavItem
            to="/"
            ariaLabel="home"
            content={
              <svg className="icon icon-home-outline">
                <use xlinkHref={`${svg}#icon-home-outline`}></use>
              </svg>
            }
            onClick={() => {}}
          />
          <NavItem
            to="/misdemeanours"
            ariaLabel="misdemeanours"
            content="Misdemeanours"
            onClick={() => {}}
          />
          <NavItem
            to="/confession"
            ariaLabel="confession"
            content="Confess To Us"
            onClick={() => {}}
          />
        </ul>
      </nav>
    </>
  );
};

export default Nav;
