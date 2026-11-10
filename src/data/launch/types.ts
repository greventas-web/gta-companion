export type LaunchStatus = "coming-at-launch" | "to-be-confirmed" | "confirmed";

export type LaunchTopic = {
  id: string;
  title: string;
  summary: string;
  status: Exclude<LaunchStatus, "confirmed">;
};

export type LaunchSection = {
  id: string;
  path: string;
  navLabel: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  heroDescription: string;
};

/** Add a payout only after the amount is confirmed in the game. */
export type MoneyMethod = {
  id: string;
  title: string;
  summary: string;
  status: LaunchStatus;
  payout?: string;
};

/** Add a top speed only after it is published or checked in the game. */
export type FastestCarEntry = {
  id: string;
  name: string;
  note: string;
  status: LaunchStatus;
  topSpeed?: string;
  href?: string;
};

/** Add a pin only after the place is confirmed. */
export type MapLocationEntry = {
  id: string;
  name: string;
  note: string;
  status: LaunchStatus;
  area?: string;
  href?: string;
};

/** Add a code only after the input is confirmed. Do not guess a combo. */
export type CheatEntry = {
  id: string;
  name: string;
  effect: string;
  platforms: string[];
  status: LaunchStatus;
  input?: string;
};
