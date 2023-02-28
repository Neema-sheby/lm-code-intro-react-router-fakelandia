import { createContext } from "react";

import {
  SelfConfessionMisdemeanour,
  defaultSelfConfessionMisdemeanour,
} from "../../../Pages/Misdemeanour/Misdemeanours.types";

interface ConfessionContext {
  selfConfessedMisdemeanour: Array<SelfConfessionMisdemeanour>;
  setSelfConfessedMisdemeanour: (T: Array<SelfConfessionMisdemeanour>) => void;
}

export const ConfessionContext = createContext<ConfessionContext>({
  selfConfessedMisdemeanour: [],
  setSelfConfessedMisdemeanour: () => {},
});
