import Nav from "./Navigation";

const Header = () => {
  return (
    <header className="header">
      <img
        className="header__img"
        src="../../public/Images/logo.jpg"
        alt="Justice Department of Fakelandia Logo"
      />
      <Nav />
    </header>
  );
};

export default Header;
