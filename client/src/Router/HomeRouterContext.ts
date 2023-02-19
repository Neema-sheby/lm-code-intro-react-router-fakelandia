import { createContext } from "react";
import {
  ConfessionFormDataType,
  defaultConfessionFormData,
} from "../Components/Form/ConfessionForm/ConfessionFormDataType.types";
export const HomeRouterContext = createContext<ConfessionFormDataType>(
  defaultConfessionFormData
);
