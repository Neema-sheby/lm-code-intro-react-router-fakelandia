import { createContext } from "react";
import {
  Misdemeanour,
  defaultMisdemeanour,
} from "../Pages/Misdemeanour/Misdemeanours.types";
export const HomeRouterContext =
  createContext<Misdemeanour>(defaultMisdemeanour);
