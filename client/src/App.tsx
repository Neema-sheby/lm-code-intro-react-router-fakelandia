import React from "react";
import { BrowserRouter } from "react-router-dom";
import HomeRouter from "./Router/HomeRouter";

import "./App.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <HomeRouter />
    </BrowserRouter>
  );
};

export default App;
