export type MarkFrame = "round" | "square" | "cut";

export type ManufacturerMarkIdentity = {
  monogram: string;
  frame: MarkFrame;
};

const marks: Record<string, ManufacturerMarkIdentity> = {
  albany: { monogram: "AL", frame: "square" },
  annis: { monogram: "AN", frame: "round" },
  benefactor: { monogram: "BF", frame: "cut" },
  bravado: { monogram: "BV", frame: "square" },
  buckingham: { monogram: "BK", frame: "cut" },
  canis: { monogram: "CN", frame: "round" },
  cheval: { monogram: "CH", frame: "square" },
  crest: { monogram: "CR", frame: "round" },
  declasse: { monogram: "DC", frame: "cut" },
  dewbauchee: { monogram: "DW", frame: "square" },
  dinka: { monogram: "DK", frame: "round" },
  docktease: { monogram: "DT", frame: "cut" },
  gallivanter: { monogram: "GV", frame: "square" },
  grotti: { monogram: "GR", frame: "round" },
  imponte: { monogram: "IM", frame: "cut" },
  karin: { monogram: "KR", frame: "square" },
  nagasaki: { monogram: "NG", frame: "round" },
  obey: { monogram: "OB", frame: "cut" },
  overflod: { monogram: "OV", frame: "square" },
  pegassi: { monogram: "PG", frame: "round" },
  pfister: { monogram: "PF", frame: "cut" },
  shitzu: { monogram: "SZ", frame: "square" },
  speedophile: { monogram: "SP", frame: "round" },
  truffade: { monogram: "TR", frame: "cut" },
  vapid: { monogram: "VA", frame: "square" },
  western: { monogram: "WN", frame: "round" },
};

function initials(name: string) {
  const parts = name.split(/\s+/).filter(Boolean);

  if (parts.length > 1) {
    return parts
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  }

  return name.slice(0, 2).toUpperCase();
}

export function manufacturerMarkFor(
  slug: string,
  name: string
): ManufacturerMarkIdentity {
  return (
    marks[slug] ?? {
      monogram: initials(name),
      frame: "square",
    }
  );
}
