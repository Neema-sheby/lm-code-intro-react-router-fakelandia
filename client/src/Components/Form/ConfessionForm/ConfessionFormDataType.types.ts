import {
  MisdemeanourKind,
  Misdemeanour,
} from "../../../Pages/Misdemeanour/Misdemeanours.types";

export const defaultConfessionFormData = {
  subject: "",
  reason: "",
  details: "",
};

export type ConfessionFormDataType = {
  subject: string;
  reason: string | MisdemeanourKind | "I just want to talk";
  details: string;
};

export interface ConfessionProp {
  addNewMisdemeanourData: (T: Misdemeanour) => void;
}
