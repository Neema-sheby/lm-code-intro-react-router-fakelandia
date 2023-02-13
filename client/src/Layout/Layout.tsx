import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;

{
  /* <nav>
<NavLink to="/">Home</NavLink>
<NavLink to="misdemeanours">Misdemeanours</NavLink>
<NavLink to="confession">Confession</NavLink>
</nav> */
}
