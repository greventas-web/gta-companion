import { Business } from "@/types/business";

export const businesses: Business[] = [
  {
    id: 1,
    slug: "only-raw-records",
    name: "Only Raw Records",
    category: "Record Label",
    location: "Vice City",
    image:
      "/images/official/media/screenshots-people-drequan-priest-drequan-priest-04.webp",
    imageAlt:
      "Studio mixing desk in an official Dre'Quan Priest screenshot, not a labeled Only Raw Records storefront",
    imageCaption:
      "Studio still of a mixing desk, not a labeled Only Raw Records storefront.",
    description:
      "Vice City label that has signed Real Dimez. Rockstar says they just need a hit. Boobie Ike and Dre'Quan Priest run it as a partnership.",
    firstAppearance: "Rockstar Games Website",
    status: "Officially Confirmed",
    owner: "Boobie Ike and Dre'Quan Priest",
    district: "Vice City",
    type: "Music Label",
    relatedBusinesses: ["jack-of-hearts"],
    gallery: [],
  },

  {
    id: 2,
    slug: "high-rollerz-lifestyle",
    name: "High Rollerz Lifestyle",
    category: "Car culture",
    location: "Vice City",
    image: "/images/official/frames/high-rollerz-lifestyle.webp",
    imageAlt: "In-game social overlay reading High Rollerz Lifestyle and @HighRollerzMag, Trailer 1",
    description:
      "Trailer 1 at 1:08 shows an in-game social overlay reading High Rollerz Lifestyle and @HighRollerzMag, beside cars at night.",
    firstAppearance: "Trailer 1",
    status: "Seen in Trailer 1",
    district: "Vice City",
    type: "Car culture",
    relatedBusinesses: [],
    gallery: [],
  },

  {
    id: 3,
    slug: "jack-of-hearts",
    name: "Jack of Hearts",
    category: "Strip Club",
    location: "Vice City",
    image:
      "/images/official/media/screenshots-people-boobie-ike-boobie-ike-02.webp",
    imageAlt: "Night storefront with a neon Jack of Hearts sign",
    imageCaption: "Night storefront. The neon sign reads Jack of Hearts.",
    description:
      "Boobie Ike's strip club in Vice City. His profile tagline is \"It's all about heart — the Jack of Hearts.\" Dre'Quan Priest books acts there.",
    gallery: [
      {
        src: "/images/official/media/screenshots-people-boobie-ike-boobie-ike-04.webp",
        alt: "Interior with a Jack of Hearts banner",
        caption:
          "Interior still from the same Boobie Ike screenshot set, with a Jack of Hearts banner.",
      },
    ],
    firstAppearance: "Trailer 1",
    status: "Officially Confirmed",
    owner: "Boobie Ike",
    district: "Vice City",
    type: "Nightlife",
    relatedBusinesses: ["only-raw-records"],
  },

  {
    id: 4,
    slug: "brian-boat-works",
    name: "Brian's Boat Works",
    category: "Boat Yard",
    location: "Leonida Keys",
    image: "/images/official/frames/brian-boat-works.webp",
    imageAlt: "Night boatyard sign reading Brian's Boat Works & Marina, Trailer 2",
    description:
      "Trailer 2 at 1:26 shows a night boatyard sign that reads Brian's Boat Works & Marina, with the lines Boat Repairs, Equipment & Storage and 786-555-0109. Rockstar's character text calls it his boat yard. Brian Heder moves product through it with his third wife, Lori.",
    firstAppearance: "Trailer 2",
    status: "Officially Confirmed",
    owner: "Brian Heder",
    district: "Leonida Keys",
    type: "Boat Yard",
    relatedBusinesses: [],
    gallery: [],
  },

  {
    id: 5,
    slug: "nine1nine",
    name: "Nine1Nine",
    category: "Nightclub",
    location: "Vice City",
    image: "/images/official/frames/nine1nine.webp",
    imageAlt: "A plane towing a purple Nine1Nine banner over the Vice City beach, Trailer 1",
    description:
      "Trailer 1 at 0:14 shows a plane towing a purple Nine1Nine banner over the Vice City beach. Trailer 2 shows Jason and Lucia dancing in the club.",
    firstAppearance: "Trailer 1 and Trailer 2",
    status: "Seen in Trailer 1 and Trailer 2",
    district: "Vice City",
    type: "Nightclub",
    relatedBusinesses: [],
    gallery: [],
  },
];