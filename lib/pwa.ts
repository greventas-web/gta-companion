/** Brand colors for the installed app chrome. The site background stays black. */
export const PWA_THEME_COLOR = "#6d28d9";
export const PWA_BACKGROUND_COLOR = "#1a0a2e";

export const PWA_NAME = "GTA Companion";
export const PWA_SHORT_NAME = "GTA Companion";

export const PWA_DESCRIPTION =
  "Unofficial GTA 6 fan database and community map for Grand Theft Auto VI. Not affiliated with Rockstar Games or Take-Two.";

export const INSTALL_DISMISS_KEY = "gta-companion-install-dismissed";

export const PWA_ICONS = {
  any192: "/icons/icon-night-192.png",
  any512: "/icons/icon-night-512.png",
  maskable192: "/icons/icon-maskable-192.png",
  maskable512: "/icons/icon-maskable-512.png",
  apple: "/icons/apple-touch-icon-night.png",
} as const;

/**
 * Home-screen shortcuts. There is no separate checklist page; unlock times
 * live on /gta-6-launch.
 */
export const PWA_SHORTCUTS = [
  {
    name: "Map",
    short_name: "Map",
    description: "Unofficial Leonida community map",
    url: "/map",
  },
  {
    name: "GTA 6 launch",
    short_name: "Launch",
    description: "Unlock times and launch details for November 19, 2026",
    url: "/gta-6-launch",
  },
  {
    name: "Vehicles",
    short_name: "Vehicles",
    description: "Unofficial GTA 6 vehicle database",
    url: "/vehicles",
  },
] as const;
