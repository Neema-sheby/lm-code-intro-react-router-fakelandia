import React, { useState, createContext } from "react";
import { ConfessionContext } from "./ConfessionContext";
import {
  SelfConfessionMisdemeanour,
  defaultSelfConfessionMisdemeanour,
} from "../../../Pages/Misdemeanour/Misdemeanours.types";

interface ConfessionProviderProp {
  children: React.ReactNode;
}

const ConfessionProvider: React.FC<ConfessionProviderProp> = ({ children }) => {
  const [selfConfessedMisdemeanour, setSelfConfessedMisdemeanour] = useState<
    Array<SelfConfessionMisdemeanour>
  >([]);

  const sharedState = {
    selfConfessedMisdemeanour: selfConfessedMisdemeanour,
    setSelfConfessedMisdemeanour: setSelfConfessedMisdemeanour,
  };

  return (
    <ConfessionContext.Provider value={sharedState}>
      {children}
    </ConfessionContext.Provider>
  );
};

export default ConfessionProvider;
