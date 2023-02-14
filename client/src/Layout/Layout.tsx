import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
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
