import React from "react";
import { HashRouter } from "react-router-dom";
import HomeRouter from "./Router/HomeRouter";

import "./App.css";

const App: React.FC = () => {
  return (
    <HashRouter>
      <HomeRouter />
    </HashRouter>
  );
};

export default App;
