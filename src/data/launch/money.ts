import type { LaunchSection, LaunchTopic, MoneyMethod } from "./types";

export const moneySection: LaunchSection = {
  id: "money",
  path: "/money-making",
  navLabel: "Money",
  title: "Money-Making Methods",
  seoTitle: "GTA 6 Money-Making Methods",
  seoDescription:
    "GTA 6 money-making methods. Payouts are to be confirmed and will be added after launch once they can be checked. Unofficial fan site.",
  heroDescription:
    "Ways to earn money will be listed after launch, when the amounts can be checked in the game. No payout is confirmed on this page yet.",
};

export const moneyTopics: LaunchTopic[] = [
  {
    id: "story-payouts",
    title: "Story payouts",
    status: "coming-at-launch",
    summary:
      "Mission payouts will be listed after launch. No dollar amounts are published here yet.",
  },
  {
    id: "activities",
    title: "Activities and jobs",
    status: "to-be-confirmed",
    summary:
      "Repeatable jobs will be added only after they are confirmed. This page does not name a method or a rate.",
  },
  {
    id: "property",
    title: "Property and businesses",
    status: "to-be-confirmed",
    summary:
      "Income from property or businesses will be added if the game has it and the figures can be checked.",
  },
];

export const moneyMethods: MoneyMethod[] = [];
