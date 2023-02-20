import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LayOut from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Misdemeanours from "../Pages/Misdemeanour/Misdemeanours";
import Confession from "../Pages/Confession/Confession";
import NotFound from "../Pages/NotFound/NotFound";
import { HomeRouterContext } from "./HomeRouterContext";
import {
  SelfConfessionMisdemeanour,
  defaultSelfConfessionMisdemeanour,
} from "../Pages/Misdemeanour/Misdemeanours.types";

const HomeRouter: React.FC = () => {
  const [newMisdemeanourOfMisdemeanant, setNewMisdemeanourOfMisdemeanant] =
    useState<SelfConfessionMisdemeanour>(defaultSelfConfessionMisdemeanour);

  return (
    <HomeRouterContext.Provider value={newMisdemeanourOfMisdemeanant}>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route path="/" element={<Home />} />
          <Route path="misdemeanours" element={<Misdemeanours />} />
          <Route
            path="confession"
            element={
              <Confession
                setNewMisdemeanourOfMisdemeanant={
                  setNewMisdemeanourOfMisdemeanant
                }
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
