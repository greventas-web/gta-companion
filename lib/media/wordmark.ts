export type WordmarkStyle = {
  h1: number;
  h2: number;
  h3: number;
  angle: number;
  motif: number;
};

/** Purple, pink, and teal only. Orange hues are intentionally absent. */
const hues = [258, 274, 292, 312, 328, 168, 180, 196];

const presets: Record<string, WordmarkStyle> = {
  "Pißwasser": { h1: 278, h2: 322, h3: 190, angle: 128, motif: 0 },
  Sprunk: { h1: 168, h2: 196, h3: 276, angle: 200, motif: 1 },
  eCola: { h1: 328, h2: 292, h3: 174, angle: 145, motif: 2 },
  "Burger Shot": { h1: 312, h2: 258, h3: 186, angle: 220, motif: 3 },
  "Up-n-Atom": { h1: 186, h2: 276, h3: 322, angle: 160, motif: 0 },
  "Only Raw Records": { h1: 292, h2: 174, h3: 328, angle: 110, motif: 1 },
  "High Rollerz Lifestyle": { h1: 258, h2: 328, h3: 188, angle: 240, motif: 2 },
  Nine1Nine: { h1: 198, h2: 312, h3: 274, angle: 175, motif: 3 },
  Fishing: { h1: 172, h2: 292, h3: 258, angle: 135, motif: 1 },
  Basketball: { h1: 324, h2: 188, h3: 276, angle: 210, motif: 2 },
};

function hashName(name: string) {
  let hash = 2166136261;
  for (const char of name) {
    hash ^= char.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

export function wordmarkStyle(name: string): WordmarkStyle {
  const preset = presets[name];
  if (preset) return preset;

  const hash = hashName(name);
  const h1 = hues[hash % hues.length];
  let h2 = hues[(hash >>> 3) % hues.length];
  let h3 = hues[(hash >>> 6) % hues.length];
  if (h2 === h1) h2 = hues[(hash + 3) % hues.length];
  if (h3 === h1 || h3 === h2) h3 = hues[(hash + 5) % hues.length];

  return {
    h1,
    h2,
    h3,
    angle: 110 + (hash % 7) * 18,
    motif: hash % 4,
  };
}
