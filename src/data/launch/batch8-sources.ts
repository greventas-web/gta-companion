/**
 * Sources for content batch 8 (Fast and Furious car, Dexter's apartment,
 * Easter eggs, robbing police cars, petting animals, car trackers, the jet
 * ski at Jason's house).
 * Kept in data only. Pages never show them.
 * Fact check: /workspace/launch-prep/content-batch-8-factcheck.md
 */
export type Batch8Source = { label: string; href: string };

export const batch8Sources = {
  destructoidFastFurious: { label: "Destructoid, Paul Walker's Fast and Furious car", href: "https://www.destructoid.com/how-to-get-paul-walkers-fast-and-furious-car-in-gta-6/" },
  beebomFastFurious: { label: "Beebom, Fast and Furious car location", href: "https://beebom.com/gta-6-paul-walker-fast-and-furious-car-location/" },
  viceFastFurious: { label: "VICE, Paul Walker's 1995 Eclipse location", href: "https://www.vice.com/en/article/gta-6-paul-walker-mitsubishi-eclipse-location/" },
  gamerGuidesFastFurious: {
    label: "Gamer Guides, Paul Walker's Eclipse location",
    href: "https://www.gamerguides.com/grand-theft-auto-vi/guide/vehicles/introduction/paul-walker-s-1995-mitsubishi-eclipse-location",
  },
  gamesradarPopCulture: {
    label: "GamesRadar+, movie and TV Easter eggs",
    href: "https://www.gamesradar.com/games/grand-theft-auto/gta-6-is-a-movie-and-tv-goldmine-as-players-discover-everything-from-fast-and-furious-cars-to-dexters-apartment/",
  },
  insiderEasterEggs: { label: "Insider Gaming, every Easter egg", href: "https://insider-gaming.com/every-easter-egg-gta-6-locations/" },
  gamespotEasterEggs: { label: "GameSpot, Easter eggs list", href: "https://www.gamespot.com/articles/gta-6-easter-eggs-list-and-locations/" },
  looperDexter: { label: "Looper, Dexter Morgan's apartment", href: "https://www.looper.com/2323089/gta-6-how-find-dexter-morgan-apartment/" },
  destructoidPoliceCars: { label: "Destructoid, how to rob police cars", href: "https://www.destructoid.com/how-to-rob-police-cars-in-gta-6/" },
  sportskeedaPoliceCars: { label: "Sportskeeda, steal from police cars", href: "https://www.sportskeeda.com/gta/how-steal-police-cars-gta-6-guns-money-everything-can-get" },
  gamesradarPets: { label: "GamesRadar+, how to pet animals", href: "https://www.gamesradar.com/games/grand-theft-auto/gta-6-pet-animals/" },
  yahooAnimals: { label: "Yahoo Tech, meet the animals of GTA 6", href: "https://tech.yahoo.com/gaming/articles/alligators-pet-snakes-dog-jet-200257949.html" },
  shacknewsTrackers: { label: "Shacknews, disable vehicle trackers", href: "https://www.shacknews.com/article/151427/disable-vehicle-trackers-gta6" },
  shacknewsStealing: { label: "Shacknews, stealing cars explained", href: "https://www.shacknews.com/article/151426/stealing-cars-explained-gta6" },
  gamespotTrackers: { label: "GameSpot, steal cars and remove trackers", href: "https://www.gamespot.com/articles/how-to-steal-cars-and-remove-trackers-in-gta-6/" },
  gamerantJetSki: { label: "Game Rant, jet ski at Jason's house", href: "https://gamerant.com/gta-6-jet-ski-jason-house/" },
  techwiserJetSki: { label: "TechWiser, jet ski at Jason's house", href: "https://techwiser.com/ride-jet-ski-jasons-house-gta-6/" },
} as const satisfies Record<string, Batch8Source>;

const s = batch8Sources;
export const fastFuriousSources = [s.destructoidFastFurious, s.beebomFastFurious, s.viceFastFurious, s.gamerGuidesFastFurious, s.gamesradarPopCulture];
export const dexterSources = [s.looperDexter, s.gamespotEasterEggs, s.gamesradarPopCulture];
export const easterEggSources = [s.gamespotEasterEggs, s.insiderEasterEggs, s.gamesradarPopCulture, s.yahooAnimals];
export const policeCarSources = [s.destructoidPoliceCars, s.sportskeedaPoliceCars];
export const petAnimalSources = [s.gamesradarPets, s.yahooAnimals];
export const trackerSources = [s.shacknewsTrackers, s.gamespotTrackers, s.shacknewsStealing];
export const jetSkiSources = [s.gamerantJetSki, s.techwiserJetSki];
