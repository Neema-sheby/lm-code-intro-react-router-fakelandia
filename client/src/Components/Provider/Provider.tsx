import React, { useState, createContext } from "react";
import { fakelandiaContext } from "./fakeLandiaContext";
import {
  SelfConfessionMisdemeanour,
  defaultSelfConfessionMisdemeanour,
} from "../../Pages/Misdemeanour/Misdemeanours.types";

interface ProviderProp {
  children: React.ReactNode;
}

const Provider: React.FC<ProviderProp> = ({ children }) => {
  const [selfConfessedMisdemeanour, setSelfConfessedMisdemeanour] = useState<
    Array<SelfConfessionMisdemeanour>
  >([]);

  const sharedState = {
    selfConfessedMisdemeanour: selfConfessedMisdemeanour,
    setSelfConfessedMisdemeanour: setSelfConfessedMisdemeanour,
  };

  return (
    <fakelandiaContext.Provider value={sharedState}>
      {children}
    </fakelandiaContext.Provider>
  );
};

export default Provider;
