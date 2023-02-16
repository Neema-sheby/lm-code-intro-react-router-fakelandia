import { MisdemeanourKind } from "./Misdemeanours.types";

export const MisdemeanourEmoji = (misdemeanour: MisdemeanourKind) => {
  let emoji = "";
  if (misdemeanour === "rudeness") emoji = "🤪";
  else if (misdemeanour === "lift") emoji = "🗣";
  else if (misdemeanour === "vegetables") emoji = "🥗";
  else if (misdemeanour === "united") emoji = "😈";
  else {
    return emoji;
  }
  return emoji;
};
