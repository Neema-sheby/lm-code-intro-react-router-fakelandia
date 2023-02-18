import React from "react";
import { Route, Routes } from "react-router-dom";
import LayOut from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Misdemeanours from "../Pages/Misdemeanour/Misdemeanours";
import Confession from "../Pages/Confession/Confession";

const HomeRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<Home />} />
        <Route path="misdemeanours" element={<Misdemeanours />} />
        <Route path="confession" element={<Confession />} />
      </Route>
    </Routes>
  );
};

export default HomeRouter;
