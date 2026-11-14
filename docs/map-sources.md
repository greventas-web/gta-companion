# Leonida map sources

This page records the official material used for the interactive map at `/map`. The base layer is an original diagram. It is not a trace of a fan map, a leak, or the Florida coastline.

Checked 14 November 2026. Grand Theft Auto VI launches 19 November 2026. Rockstar had not published a readable full in-game map on the pages below.

## How to read the diagram

Published relationships that the drawing follows:

- **North.** Rockstar’s Mount Kalaga copy says the park is “up against the state’s northern border” and offers “room to breathe on the state’s northern fringes.” The top of the sheet is that border.
- **Center.** The Ambrosia copy says “In the heart of Leonida,” and names the Allied Crystal sugar refinery there.
- **Across water from Vice City.** A Grassrivers still is captioned, on Rockstar’s page, “A speed boat drives toward buildings on piers overlooking the water. In the distance is the Vice City skyline.” The wetlands sit across the bay from the city.
- **Keys.** Rockstar calls the Leonida Keys a tropical archipelago. The published still shows islands joined by a bridge, open water, and a high-rise skyline on the horizon. The chain is drawn seaward of Vice City. Rockstar has not published a compass bearing for the chain.
- **Port Gellhorn.** Rockstar calls it “Leonida’s forgotten coast.” It is drawn on a different shore from Vice City. Which compass coast that is has not been published.
- **Vice City neighborhoods** named in Rockstar’s own Vice City paragraph (Ocean Beach, Little Cuba, Tisha-Wocka, VC Port) are pinned inside the city blob. Blocks are not shown.

Everything else on the sheet is approximate. The on-map note says so. The coastline, inlets, barrier islands, marsh marks, and hillshade are stylized texture. They are not surveyed shores, roads, or extra towns.

## Coordinate system

See `src/data/map/config.ts`.

- Origin `(0, 0)` is the southwest corner of the active layer.
- `x` increases east. `y` increases north.
- Leaflet CRS.Simple uses `[y, x]`.
- The schematic is 1200 by 1600 of those units. A pixel `(svgX, svgY)` on the SVG (top-left origin) is map `(svgX, 1600 - svgY)`.

To swap the base on launch day, change `ACTIVE_LAYER_ID` in `src/data/map/config.ts` or point the active layer’s `url` at the new image or tile template. Marker coordinates stay in the same map space. Set `officialImagery: true` when the file is Rockstar’s own map so the page credits “Map imagery: Rockstar Games”.

The `official` and `tiles` entries are ready and inactive. Drop the file at the URL in that config. No component change is required.

## Official sources

### Place copy and stills — Only in Leonida

One Rockstar page, with a section per place. Captions below are the `alt` text in the page payload, fetched 14 November 2026.

| Source | URL | When |
| --- | --- | --- |
| Only in Leonida tour | https://www.rockstargames.com/VI/only-in-leonida | Page live 14 Nov 2026. Intro: “Tour a few of the must-see destinations across the sunshine state.” |
| Vice City | https://www.rockstargames.com/VI/only-in-leonida/vice-city | Same page. “We’re a long way from the ’80s, but Vice City is still the sun and fun capital of America.” Neighborhoods named in the next paragraph: Ocean Beach, Little Cuba, Tisha-Wocka flea market, VC Port. |
| Leonida Keys | https://www.rockstargames.com/VI/only-in-leonida/leonida-keys | “Life in this tropical archipelago isn’t flashy but it’s easy… you are right on the doorstep of some of the most beautiful and dangerous waters in all of America.” Alt: “A seaplane flying over water in the Leonida Keys. In the background a bridge with cars connects two islands.” |
| Grassrivers | https://www.rockstargames.com/VI/only-in-leonida/grassrivers | “Welcome to the Wetlands.” “The untamable jewel of Leonida’s crown.” Mangroves and gators in the body copy. Alt: “A speed boat drives toward buildings on piers overlooking the water. In the distance is the Vice City skyline.” Alt: airboat, dead alligator, Grassrivers. |
| Port Gellhorn | https://www.rockstargames.com/VI/only-in-leonida/port-gellhorn | “This is Leonida’s forgotten coast.” Cheap motels, shut-down attractions, empty strip malls. Alt: “The outside of a motel in Port Gellhorn with the vacancy sign lit up at night.” The sign in that still reads Starlet Motel. |
| Ambrosia | https://www.rockstargames.com/VI/only-in-leonida/ambrosia | “In the heart of Leonida… The Allied Crystal sugar refinery provides the jobs.” Alt: “The Ambrosia skyline at night featuring smoke stacks in the distance.” Alt: motorcycle gang “down a road in Ambrosia.” The street still shows an Ambrosia County Sheriff’s Office sign. |
| Mount Kalaga | https://www.rockstargames.com/VI/only-in-leonida/kalaga | “Room to breathe on the state’s northern fringes.” “A national landmark up against the state’s northern border.” Hunting, fishing, off-road trails. Alt: “A news helicopter flying over a tree-filled ridge in Mount Kalaga National Park.” |

Screenshot downloads, grouped by those six regions: https://www.rockstargames.com/VI/downloads/screenshots

### Videos on the official site

Listed on https://www.rockstargames.com/VI/ with the dates and runtimes Rockstar prints there (fetched 14 November 2026):

| Video | URL | Published | Runtime |
| --- | --- | --- | --- |
| Trailer 1 | https://www.rockstargames.com/VI/ and https://www.youtube.com/watch?v=QdBZY2fkU-0 (Rockstar Games channel) | 4 December 2023 | 1:31 |
| Trailer 2 | https://www.rockstargames.com/VI/ | 6 May 2025 | 2:47 |
| An Extended Look | https://www.youtube.com/watch?v=tJbzMqJGH4k (Rockstar Games channel; also embedded from the VI site) | 27 August 2026 | 26:48 |
| Launch Trailer | https://www.rockstargames.com/VI/ | 15 October 2026 | 1:29 |

No frame of the Extended Look is used as a traced pause-map. The public page does not include a readable full Leonida map. Playback was not used to invent streets.

### Launch gallery and pre-load notes

| Source | URL | When |
| --- | --- | --- |
| Launch Gallery newswire | https://www.rockstargames.com/newswire/article/39ak81277255o9 | 5 November 2026. “Get a stunning look inside Leonida” with new screenshots. |
| Pre-load begins | https://www.rockstargames.com/newswire/article/k4ak9okk485712 | 3 November 2026 note, pre-load date 10 November 2026, launch 19 November 2026. |
| Pre-load now | https://www.rockstargames.com/newswire/article/89834o94713o21 and https://www.rockstargames.com/VI/pre-load-now | 10 November 2026 |

### Edition places named by Rockstar

Copy on https://www.rockstargames.com/VI/ (fetched 14 November 2026):

- Shore Court personal garage, “just a stone’s throw from the glistening sands of Ocean Beach,” for the Vintage Vice City ’55 Vapid Stanier. Also: “garage alongside the world-famous Ocean Beach.”
- PTT Youngin$ compound in “Southside Vice City.”
- Paradise Garage in Watson Bay, for the Mount Kalaga Dominator Buggy. Watson Bay is not placed on the diagram because Rockstar does not say which region it is in.
- One-Eyed Willie’s “in Lake Leonida.” The lake is not placed.
- Stock 305 and Electric Fang are “Stockyard’s” shops. Stockyard is not placed.
- Rideout Customs, Sara’s Unisex Salon, Goodtime Gear, and Wyman’s collection have no map location in that copy.

### Souvenir poster

Rockstar Store, Grand Theft Auto VI: The Goodtime State – Vice City Collection: https://store.rockstargames.com/merchandise/gtavi-goodtime-state-vice-city-collection (HTTP 200 on 14 November 2026).

The store describes a “Double-Sided Souvenir Poster with Map of Leonida” whose back is “a full view of the Leonida map.” The poster image shipped on the VI site as `poster_full` is the illustrated cover, not a readable state map. This diagram does not trace that poster.

### Character lines used for business pins

On the same Only in Leonida page:

- Boobie Ike is “a local Vice City legend” with a strip club. The Boobie Ike still shows a neon sign reading Jack of Hearts.
- Dre'Quan Priest and Only Raw Records are tied to that Vice City scene.
- Brian Heder is “from the golden age of smuggling in the Keys” and is “still moving product through his boat yard.”

## What was not used

Fan-made and leaked maps were not used for the coastline, roads, or pin coordinates. County names read off unofficial photographs of the souvenir poster were not added. Real-world Florida geography was not traced.
