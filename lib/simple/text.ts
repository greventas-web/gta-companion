/**
 * Keeps body copy short and plain: drops sentences that talk about where a fact
 * came from (interviews, trailers, sources, "not published") and caps the
 * number of sentences. The facts themselves stay in the remaining sentences.
 */
const META =
  /\b(PowerPyx|DayOne|IGN|Famitsu|GameSpot|Game ?Informer|TGG|Fandom|gtadb|ScreenRant|Destructoid|GamesRadar|Edge interview|reported by|interview|told [A-Z]|Rob Nelson|has not (been )?(published|announced|confirmed|named|shown|said)|have not (been )?(published|announced)|(is|are|was) not published|not (yet )?published|Official screenshot|Trailer \d|Extended Look|at \d{1,2}:\d{2}\b(?! ?[ap]\.m\.)|this site|this page|map pin is|stand-in|representative image|single-source|according to|confirmed by|community (area|list)|caption|sourced?)\b/i;

const LEAD_IN = /^(Rockstar|PlayStation|Xbox|Take-Two) (says|said|lists|describes|calls|notes|confirms|confirmed)( that)?,?\s+/i;

export function sentences(text: string | undefined | null): string[] {
  if (!text) return [];
  return text
    .replace(/\s+/g, " ")
    .trim()
    .split(/(?<!\b(?:a\.m|p\.m|No|Dr|Mr|Mrs|Ms|St|vs|Jr|Sr|U\.S))(?<=[.!?])\s+(?=["“'$0-9A-Z])/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);
}

function tidy(sentence: string) {
  const stripped = sentence.replace(LEAD_IN, "");
  return stripped.charAt(0).toUpperCase() + stripped.slice(1);
}

/** Up to `max` plain sentences, with sourcing chatter removed. */
export function shortText(text: string | undefined | null, max = 2): string {
  return sentences(text)
    .filter((sentence) => !META.test(sentence))
    .slice(0, max)
    .map(tidy)
    .join(" ");
}

/** One plain sentence for a card. */
export function oneLine(text: string | undefined | null): string {
  return shortText(text, 1);
}

/** "2026-11-17" -> "Nov 17, 2026". Leaves anything else as it is. */
export function shortDate(date: string): string {
  const parsed = new Date(`${date}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
