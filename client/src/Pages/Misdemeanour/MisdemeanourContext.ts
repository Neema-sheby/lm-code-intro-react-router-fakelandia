import { Misdemeanant } from "../../Pages/Misdemeanour/Misdemeanours.types";
import { createContext } from "react";
export const MisdemeanourContext = createContext<Array<Misdemeanant>>([]);
