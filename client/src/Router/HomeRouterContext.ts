import { createContext } from "react";
import {
  PostResponseDataType,
  defaultPostData,
} from "../Components/GetPostData/DefaultPostData";
export const HomeRouterContext =
  createContext<PostResponseDataType>(defaultPostData);
