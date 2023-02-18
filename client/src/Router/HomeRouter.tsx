import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LayOut from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Misdemeanours from "../Pages/Misdemeanour/Misdemeanours";
import Confession from "../Pages/Confession/Confession";
import NotFound from "../Pages/NotFound/NotFound";
import { PostResponseDataType } from "../Pages/Confession/Confession.types";
import { HomeRouterContext } from "./HomeRouterContext";

const HomeRouter = () => {
  const [postData, setPostData] = useState<Array<PostResponseDataType>>([]);

  return (
    <HomeRouterContext.Provider value={postData}>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route path="/" element={<Home />} />
          <Route path="misdemeanours" element={<Misdemeanours />} />
          <Route
            path="confession"
            element={<Confession setPostData={(data) => setPostData(data)} />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HomeRouterContext.Provider>
  );
};

export default HomeRouter;
