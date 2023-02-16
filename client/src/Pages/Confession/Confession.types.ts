import { MisdemeanourKind } from "../Misdemeanour/Misdemeanours.types";

export type ConfessionFormProperties = {
  subject: string;
  reason: string | MisdemeanourKind | "I just want to talk";
  text: string;
};
