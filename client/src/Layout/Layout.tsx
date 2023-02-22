import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout: React.FC = () => {
  return (
    <div className="container" aria-label="container">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
