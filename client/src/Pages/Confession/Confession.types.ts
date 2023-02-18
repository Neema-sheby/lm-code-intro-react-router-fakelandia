import { MisdemeanourKind } from "../Misdemeanour/Misdemeanours.types";

export type ConfessionFormDataType = {
  subject: string;
  reason: string | MisdemeanourKind | "I just want to talk";
  details: string;
};
