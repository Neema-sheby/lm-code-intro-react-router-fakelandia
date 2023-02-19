import React, { createContext } from "react";
import {
  Misdemeanour,
  defaultMisdemeanour,
} from "../Pages/Misdemeanour/Misdemeanours.types";

export const HomeRouterContext =
  React.createContext<Misdemeanour>(defaultMisdemeanour);
