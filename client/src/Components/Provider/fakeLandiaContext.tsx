import { createContext } from "react";

import {
  SelfConfessionMisdemeanour,
  defaultSelfConfessionMisdemeanour,
} from "../../Pages/Misdemeanour/Misdemeanours.types";

interface FakeLandiaContext {
  selfConfessedMisdemeanour: Array<SelfConfessionMisdemeanour>;
  setSelfConfessedMisdemeanour: (T: Array<SelfConfessionMisdemeanour>) => void;
}

export const fakelandiaContext = createContext<FakeLandiaContext>({
  selfConfessedMisdemeanour: [],
  setSelfConfessedMisdemeanour: () => {},
});
