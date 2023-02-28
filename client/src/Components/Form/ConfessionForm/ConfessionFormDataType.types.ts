import {
  MisdemeanourKind,
  Misdemeanour,
  SelfConfessionMisdemeanour,
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

// export interface ConfessionProp {
//   setNewMisdemeanourOfMisdemeanant: (T: SelfConfessionMisdemeanour) => void;
// }
