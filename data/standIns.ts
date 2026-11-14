export type StandIn = {
  src: string;
  alt: string;
  source: string;
  exact: boolean;
};

const media = "/images/official/media";
const vc = (n: number) =>
  `${media}/screenshots-places-vice-city-vice-city-${String(n).padStart(2, "0")}.webp`;
const pg = (n: number) =>
  `${media}/screenshots-places-port-gellhorn-port-gellhorn-0${n}.webp`;
const lk = (n: number) =>
  `${media}/screenshots-places-leonida-keys-leonida-keys-0${n}.webp`;
const gr = (n: number) =>
  `${media}/screenshots-places-grassrivers-grassrivers-0${n}.webp`;
const am = (n: number) =>
  `${media}/screenshots-places-ambrosia-ambrosia-0${n}.webp`;
const mk = (n: number) =>
  `${media}/screenshots-places-mount-kalaga-national-park-mount-kalaga-national-park-0${n}.webp`;

const city = (src: string, where: string): StandIn => ({
  src,
  alt: `Official Rockstar screenshot of ${where}, used as a representative image`,
  source: `Official Rockstar screenshot — ${where}`,
  exact: false,
});

const vehicleSrcs = [
  vc(1), vc(3), vc(4), vc(5), vc(7), vc(9), vc(10), vc(11),
  vc(13), vc(14), vc(15), vc(16), vc(17), vc(18), vc(20), vc(21),
  vc(22), vc(23), vc(24), vc(25), vc(26), vc(27),
  pg(1), pg(2), pg(3), pg(4), pg(5), pg(6), pg(7),
  am(1), am(2), am(3), am(4), am(5), am(6),
  lk(3), lk(7),
  mk(1), mk(4),
  gr(6),
];

const vehicleSlugs = [
  "buckingham-maverick",
  "buckingham-swift",
  "pegassi-bati-801",
  "shitzu-hakuchou",
  "dinka-akuma",
  "western-reever",
  "nagasaki-carbon-rs",
  "docktease-marquis",
  "speedophile-speeder",
  "shitzu-tropic",
  "vapid-dominator",
  "declasse-sabre-turbo",
  "imponte-phoenix",
  "bravado-gauntlet-hellfire",
  "albany-washington",
  "benefactor-schafter",
  "obey-tailgater",
  "karin-intruder",
  "cheval-fugitive",
  "bravado-banshee",
  "bravado-buffalo",
  "annis-euros",
  "grotti-cheetah",
  "grotti-itali-gto",
  "obey-9f",
  "karin-sultan-rs",
  "dewbauchee-massacro",
  "benefactor-schafter-v12",
  "pegassi-ignus",
  "pegassi-zentorno",
  "pegassi-tempesta",
  "overflod-entity-xf",
  "overflod-autarch",
  "truffade-adder",
  "grotti-turismo-r",
  "gallivanter-baller",
  "canis-mesa",
  "benefactor-xls",
  "albany-cavalcade",
  "bravado-gresley",
];

export const vehicleStandIns: Record<string, StandIn> = Object.fromEntries(
  vehicleSlugs.map((slug, index) => [
    slug,
    city(vehicleSrcs[index], "Leonida traffic and streets"),
  ])
);

const makerSlugs = [
  "bravado",
  "pegassi",
  "annis",
  "albany",
  "declasse",
  "canis",
  "gallivanter",
  "pfister",
  "benefactor",
  "obey",
  "karin",
  "western",
  "nagasaki",
  "buckingham",
  "docktease",
  "speedophile",
  "imponte",
  "cheval",
  "dewbauchee",
  "overflod",
  "truffade",
];

export const manufacturerStandIns: Record<string, StandIn> = Object.fromEntries(
  makerSlugs.map((slug, index) => [
    slug,
    {
      src: `/images/official/frames/standin-${String(index + 1).padStart(2, "0")}.webp`,
      alt: "Official Rockstar trailer frame of Leonida traffic, used as a representative image",
      source: "Official trailer frame — Leonida traffic",
      exact: false,
    },
  ])
);

export const activityStandIns: Record<string, StandIn> = {
  pool: city(vc(8), "a Vice City street at night"),
  "zoo-visits": city(gr(7), "Grassrivers wetland"),
  "studying-animals": city(mk(2), "Mount Kalaga woods"),
};

export const animalStandIns: Record<string, StandIn> = {
  manatee: city(lk(1), "Leonida Keys water"),
  "cane-toad": city(gr(2), "Grassrivers wetland"),
  "rhesus-macaque": city(gr(4), "Grassrivers trees"),
  "feral-cat": {
    src: "/images/official/frames/feral-cat.webp",
    alt: "A cat on an ATM in a corner store, Trailer 2 at 0:42",
    source: "Trailer 2 at 0:42",
    exact: true,
  },
  dog: {
    src: vc(19),
    alt: "A dog beside a man in official Vice City screenshot 19. Rockstar has not named a breed.",
    source: "Official Vice City screenshot 19",
    exact: true,
  },
  peacock: city(gr(5), "Grassrivers wetland birds"),
};

export const brandStandIns: Record<string, StandIn> = {
  "burger-shot": city(vc(8), "a Vice City street"),
  "up-n-atom": {
    src: `${media}/screenshots-people-boobie-ike-boobie-ike-02.webp`,
    alt: "A Vice City night storefront from an official Boobie Ike screenshot, used as a representative image",
    source: "Official Boobie Ike screenshot 02 — night storefront",
    exact: false,
  },
  "only-raw-records": {
    src: `${media}/screenshots-people-drequan-priest-drequan-priest-04.webp`,
    alt: "A studio mixing desk from an official Dre'Quan Priest screenshot, not a labeled Only Raw Records storefront",
    source: "Official Dre'Quan Priest screenshot 04 — studio",
    exact: false,
  },
};

export const weaponStandIns: Record<string, StandIn> = {
  "standard-pistol": {
    src: "/images/official/frames/shooting-range.webp",
    alt: "A handgun at the outdoor range in the Extended Look at 18:32, used as a representative image",
    source: "Extended Look at 18:32 — handgun",
    exact: false,
  },
  "compact-pistol": {
    src: "/images/official/frames/jewelry-robbery.webp",
    alt: "Armed figures in the Extended Look jewelry-store robbery, used as a representative image",
    source: "Extended Look at 18:02 — jewelry robbery",
    exact: false,
  },
  "assault-rifle": {
    src: vc(12),
    alt: "A rifle in official Vice City screenshot 12. Rockstar has not published this weapon's name.",
    source: "Official Vice City screenshot 12 — rifle",
    exact: false,
  },
  "pump-shotgun": {
    src: "/images/official/frames/store-robbery.webp",
    alt: "Trailer 1 store robbery, used as a representative image",
    source: "Trailer 1 at 1:10 — store robbery",
    exact: false,
  },
  "sniper-rifle": {
    src: "/images/official/frames/hunting.webp",
    alt: "Rifles in official Mount Kalaga screenshot 03, used as a representative image",
    source: "Official Mount Kalaga screenshot 03 — rifles",
    exact: false,
  },
  "rocket-launcher": city(vc(10), "a Vice City night scene"),
};

export const paradiseGarageStandIn: StandIn = {
  src: "/images/official/vehicles/vapid-dominator-buggy.webp",
  alt: "The '67 Vapid Dominator Buggy Rockstar says can be stored at the Paradise Garage. This is the buggy, not a garage exterior.",
  source: "Official Ultimate Edition art — Dominator Buggy",
  exact: false,
};
