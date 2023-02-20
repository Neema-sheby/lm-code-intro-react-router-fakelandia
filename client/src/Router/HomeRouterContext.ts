import { createContext } from "react";
import {
  SelfConfessionMisdemeanour,
  defaultSelfConfessionMisdemeanour,
} from "../Pages/Misdemeanour/Misdemeanours.types";

export const HomeRouterContext = createContext<SelfConfessionMisdemeanour>(
  defaultSelfConfessionMisdemeanour
);
