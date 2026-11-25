const MASKED = ["fuck", "shit", "bitch", "asshole", "bastard", "dick", "cunt"] as const;

const BLOCKED = ["nigger", "nigga", "faggot", "retard", "kike", "spic", "chink"] as const;

function pattern(words: readonly string[]): RegExp {
  return new RegExp(`\\b(?:${words.join("|")})\\b`, "gi");
}

const maskPattern = pattern(MASKED);
const blockPattern = pattern(BLOCKED);

export function moderateText(value: string): { ok: true; text: string } | { ok: false; error: string } {
  if (blockPattern.test(value)) {
    blockPattern.lastIndex = 0;
    return { ok: false, error: "That language isn't allowed here." };
  }
  blockPattern.lastIndex = 0;
  const text = value.replace(maskPattern, (word) => "•".repeat(Math.max(3, word.length)));
  return { ok: true, text };
}

export function countUrls(text: string): number {
  return text.match(/https?:\/\/[^\s]+/gi)?.length ?? 0;
}
