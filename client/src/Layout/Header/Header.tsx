import Nav from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className="header">
      <div className="header__img-box">
        <img
          className="header__img--small"
          src="../../public/Images/justice.png"
          alt="Justice Department of Fakelandia Logo"
        />
        <img
          className="header__img"
          src="../../public/Images/fakelandiaLogo1.png"
          alt="Justice Department of Fakelandia Logo"
        />
      </div>

      <Nav />
    </header>
  );
};

export default Header;
