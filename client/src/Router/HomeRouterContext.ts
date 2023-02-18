import { createContext } from "react";
import { PostResponseDataType } from "../Pages/Confession/Confession.types";
export const HomeRouterContext = createContext<Array<PostResponseDataType>>([]);
