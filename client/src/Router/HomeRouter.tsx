import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LayOut from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Misdemeanours from "../Pages/Misdemeanour/Misdemeanours";
import Confession from "../Pages/Confession/Confession";
import NotFound from "../Pages/NotFound/NotFound";
import { HomeRouterContext } from "./HomeRouterContext";
import {
  Misdemeanour,
  defaultMisdemeanour,
} from "../Pages/Misdemeanour/Misdemeanours.types";

const HomeRouter = () => {
  const [newMisdemeanourData, addNewMisdemeanourData] =
    useState<Misdemeanour>(defaultMisdemeanour);

  return (
    <HomeRouterContext.Provider value={newMisdemeanourData}>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route path="/" element={<Home />} />
          <Route path="misdemeanours" element={<Misdemeanours />} />
          <Route
            path="confession"
            element={
              <Confession
                addNewMisdemeanourData={(data) => addNewMisdemeanourData(data)}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HomeRouterContext.Provider>
  );
};

export default HomeRouter;
