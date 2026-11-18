import type { MapPlacement } from "@/lib/map/model";
import { ingamePlacements } from "@/lib/ingame";
import { confirmedPlacements } from "@/src/data/map/from-seed";

/**
 * Companion pins on the Leonida map.
 *
 * Confirmed places with gtadb meters are loaded from locations.json.
 * Append another object here to add a pin after launch. x and y are GTA
 * meters (east, north) in the gtadb.org frame, about -16000 to 16000.
 * entityType and entitySlug link the pin to a database page.
 *
 * Do not copy the old 0–100 illustration percentages from location records.
 * Do not add rows from unconfirmed.json here. Those stay pending until a
 * moderator approves them.
 *
 * Examples:
 *
 * { id: "weapon:pump-shotgun:shop", category: "weapons",
 *   entityType: "weapon", entitySlug: "pump-shotgun", role: "where to buy",
 *   title: "Ammu-Nation", x: 0, y: 0 }
 *
 * { id: "vehicle:vapid-dominator:spawn", category: "vehicles",
 *   entityType: "vehicle", entitySlug: "vapid-dominator", role: "spawn",
 *   x: 0, y: 0 }
 */
// Pins confirmed from our own gameplay live in src/data/gameplay/ingame.json
// (scripts/launch/add-data.mjs pin ...).
export const mapPlacements: MapPlacement[] = [...confirmedPlacements(), ...ingamePlacements()];
