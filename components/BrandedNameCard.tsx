import { wordmarkStyle } from "@/lib/media/wordmark";

type Props = {
  name: string;
  className?: string;
  showName?: boolean;
};

export default function BrandedNameCard({
  name,
  className = "",
  showName = true,
}: Props) {
  const style = wordmarkStyle(name || "GTA Companion");
  const background = `linear-gradient(${style.angle}deg, hsl(${style.h1} 72% 38%), hsl(${style.h2} 78% 46%) 52%, hsl(${style.h3} 64% 24%))`;

  return (
    <div
      data-wordmark={name}
      className={`relative flex h-full min-h-0 w-full items-center justify-center overflow-hidden p-4 ${className}`}
      style={{ background, containerType: "size" }}
    >
      <Motif motif={style.motif} hue={style.h2} />
      {showName ? (
        <p
          data-wordmark-title=""
          className="relative z-[1] max-h-full max-w-full text-balance break-words text-center font-black leading-tight text-white"
          style={{ fontSize: "clamp(1.05rem, 12cqi, 2.65rem)" }}
        >
          {name}
        </p>
      ) : null}
    </div>
  );
}

function Motif({ motif, hue }: { motif: number; hue: number }) {
  const glow = `hsl(${hue} 80% 62% / 0.45)`;

  if (motif === 0) {
    return (
      <span
        className="pointer-events-none absolute -left-8 -top-10 h-40 w-40 rounded-full blur-2xl"
        style={{ background: glow }}
      />
    );
  }

  if (motif === 1) {
    return (
      <span
        className="pointer-events-none absolute -bottom-12 -right-8 h-44 w-44 rounded-full blur-2xl"
        style={{ background: glow }}
      />
    );
  }

  if (motif === 2) {
    return (
      <span
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `repeating-linear-gradient(${hue % 2 === 0 ? 135 : 45}deg, transparent, transparent 14px, hsl(${hue} 70% 70% / 0.35) 14px, hsl(${hue} 70% 70% / 0.35) 16px)`,
        }}
      />
    );
  }

  return (
    <span
      className="pointer-events-none absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border-[10px] opacity-40"
      style={{ borderColor: glow }}
    />
  );
}
