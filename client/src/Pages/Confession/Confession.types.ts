import { MisdemeanourKind } from "../Misdemeanour/Misdemeanours.types";

export type ConfessionFormDataType = {
  subject: string;
  reason: string | MisdemeanourKind | "I just want to talk";
  details: string;
};

export type PostResponseDataType = {
  success: boolean;
  justTalked: boolean;
  message: string;
};

export interface ConfessionProp {
  setPostData: (T: Array<PostResponseDataType>) => void;
}
