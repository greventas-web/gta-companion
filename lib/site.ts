export const SITE = {
  name: "GTA Companion",
  slogan: "Everything you need for GTA 6",
  description:
    "Everything you need for GTA 6. Unofficial fan site for Grand Theft Auto VI. Not affiliated with Rockstar Games or Take-Two.",
  url: "https://www.gta-companion.com",
  email: "contact@gta-companion.com",
  launchLabel: "November 19, 2026",
  version: "1.0",
  launchStatus: "Pre-Launch",
  officialOnly: true,
} as const;

export const SUPPORT_URL = "https://ko-fi.com/gtacompanion";

export const SOCIAL_PROFILES = [
  {
    id: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@GTACompanion-c5e",
    title: "GTA Companion on YouTube",
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@gtacompanionhub",
    title: "GTA Companion on TikTok",
  },
  {
    id: "x",
    label: "X",
    href: "https://x.com/GTACompanion",
    title: "GTA Companion on X",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61596688830240",
    title: "GTA Companion on Facebook",
  },
  {
    id: "discord",
    label: "Join our Discord",
    href: "https://discord.gg/QBbzqRR3G",
    title: "Join our Discord",
  },
  {
    id: "kofi",
    label: "Ko-fi",
    href: SUPPORT_URL,
    title: "GTA Companion on Ko-fi",
  },
] as const;

export type SocialProfileId = (typeof SOCIAL_PROFILES)[number]["id"];

export const UNOFFICIAL_DISCLAIMER =
  "Unofficial fan site, not affiliated with Rockstar Games or Take-Two.";

export const IMAGE_CREDIT = "Images: Rockstar Games";
