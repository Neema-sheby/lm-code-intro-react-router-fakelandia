export const MISDEMEANOURS = [
  "rudeness",
  "vegetables",
  "lift",
  "united",
] as const;
export type MisdemeanourKind = (typeof MISDEMEANOURS)[number];

export const JUST_TALK = "just-talk";
export type JustTalk = typeof JUST_TALK;

export type Misdemeanour = {
  citizenId: number;
  misdemeanour: MisdemeanourKind;
  date: string;
};

export const defaultMisdemeanour: Misdemeanour = {
  citizenId: 0,
  misdemeanour: "rudeness",
  date: "",
};

export type Misdemeanant = {
  misdemeanours: Misdemeanour;
  punishment: {
    src: string;
    alt: string;
  };
  selfConfession: boolean;
  confessionDetails: string;
};

export type SelfConfessionMisdemeanour = {
  misdemeanourInfo: Misdemeanour;
  confessionDetails: string;
};

export const defaultSelfConfessionMisdemeanour: SelfConfessionMisdemeanour = {
  misdemeanourInfo: {
    citizenId: 0,
    misdemeanour: "rudeness",
    date: "",
  },
  confessionDetails: "",
};
