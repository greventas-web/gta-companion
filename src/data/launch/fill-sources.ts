/**
 * Sources for the launch-week content fill (prices, stats, store addresses,
 * unlock timing). Every filled value traces back to one of these.
 * Field-by-field log: /workspace/launch-prep/fill-sources.md (never on pages).
 */
export type FillSource = { label: string; href: string };

export const fillSources = {
  // Weapons
  gameChecklistsWeapons: {
    label: "Game-Checklists, all weapons checklist (prices)",
    href: "https://game-checklists.com/gta6/weapons-checklist/",
  },
  clutchbaseWeapons: {
    label: "Clutchbase, weapons guide (store menu prices)",
    href: "https://clutchbase.app/gta6/guides/gta-6-weapons-guide",
  },
  notebookAmmu: {
    label: "GTA 6 Notebook, buying weapons at Ammu-Nation",
    href: "https://gta6notebook.com/weapons/how-to-buy-and-modify-weapons-at-ammu-nation-in-gta-6/",
  },
  // Vehicles
  timesaverCars: {
    label: "Timesaver, GTA 6 cars dataset (CC BY 4.0)",
    href: "https://timesaver.gg/tools/gta-6/cars",
  },
  nettogeFastest: {
    label: "nettoge, fastest cars (in-game stat panel)",
    href: "https://nettoge.com/gta6-fastest-car/",
  },
  notebookVehicles: {
    label: "GTA 6 Notebook, vehicles",
    href: "https://gta6notebook.com/vehicles/",
  },
  gtaWikiVehicles: {
    label: "GTA Wiki, vehicles in GTA VI",
    href: "https://gta.wiki/w/Vehicles_in_GTA_VI",
  },
  gameChecklistsVehicles: {
    label: "Game-Checklists, vehicles checklist",
    href: "https://game-checklists.com/gta6/vehicles-checklist/",
  },
  sportskeedaExpensive: {
    label: "Sportskeeda, most expensive cars (WAiNK values)",
    href: "https://www.sportskeeda.com/esports/expensive-cars-gta-6-prices",
  },
  // Ultimate Edition shops, clothing and salons
  powerpyxUltimate: {
    label: "PowerPyx, how to get Ultimate Edition rewards",
    href: "https://www.powerpyx.com/gta-6-how-to-get-ultimate-edition-rewards/",
  },
  pushSquareUltimate: {
    label: "Push Square, Ultimate Edition items and pre-order bonuses",
    href: "https://www.pushsquare.com/guides/gta-6-how-to-get-ultimate-editon-items-and-pre-order-bonuses",
  },
  powerpyxClothingStores: {
    label: "PowerPyx, all clothing store locations",
    href: "https://www.powerpyx.com/gta-6-all-clothing-stores-locations/",
  },
  sportskeedaClothingStores: {
    label: "Sportskeeda, all clothing store locations",
    href: "https://www.sportskeeda.com/esports/all-gta-6-clothing-store-locations",
  },
  viceGuidesHowDoILook: {
    label: "GTA Vice Guides, How Do I Look? and New Look",
    href: "https://gtaviceguides.com/missions/how-do-i-look/",
  },
  gta6LifeCustomization: {
    label: "GTA6 Life, clothing stores and salons (IGN prices)",
    href: "https://gta6-life.com/en/guides/gta-6-character-customization/",
  },
  gta6ActivitiesClothes: {
    label: "GTA 6 Activities, clothes and outfits",
    href: "https://www.gta6activities.com/activities/clothes",
  },
} as const satisfies Record<string, FillSource>;
