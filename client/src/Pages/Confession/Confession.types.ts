import { MisdemeanourKind } from "../Misdemeanour/Misdemeanours.types";
import { PostResponseDataType } from "../../Components/GetPostData/DefaultPostData";

export type ConfessionFormDataType = {
  subject: string;
  reason: string | MisdemeanourKind | "I just want to talk";
  details: string;
};

export interface ConfessionProp {
  setPostData: (T: PostResponseDataType) => void;
}
