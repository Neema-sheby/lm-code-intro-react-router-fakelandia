import React from "react";
import { Route, Routes } from "react-router-dom";
import LayOut from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Misdemeanours from "../Pages/Misdemeanour/Misdemeanours";
import Confession from "../Pages/Confession/Confession";
import NotFound from "../Pages/NotFound/NotFound";

const HomeRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route path="/" element={<Home />} />
        <Route path="misdemeanours" element={<Misdemeanours />} />
        <Route path="confession" element={<Confession />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default HomeRouter;
