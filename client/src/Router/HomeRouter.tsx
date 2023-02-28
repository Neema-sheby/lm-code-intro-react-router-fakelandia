import React from "react";
import { Route, Routes } from "react-router-dom";
import LayOut from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Misdemeanours from "../Pages/Misdemeanour/Misdemeanours";
import Confession from "../Pages/Confession/Confession";
import NotFound from "../Pages/NotFound/NotFound";
import ConfessionWrapper from "../Components/Wrappers/ConfessionWrapper";

const HomeRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route path="/" element={<Home />} />
        <Route
          path="misdemeanours"
          element={
            <ConfessionWrapper>
              <Misdemeanours />
            </ConfessionWrapper>
          }
        />
        <Route
          path="confession"
          element={
            <ConfessionWrapper>
              <Confession />
            </ConfessionWrapper>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default HomeRouter;
