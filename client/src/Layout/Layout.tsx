import React from "react";
import Provider from "../Components/Provider/Provider";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout: React.FC = () => {
  return (
    <div className="container" aria-label="container">
      <Header />
      <main className="main">
        <Provider>
          <Outlet />
        </Provider>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
