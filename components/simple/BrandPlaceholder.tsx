/**
 * Branded stand-in image: purple night sky, Vice City-style skyline and palms,
 * with the item name on top. Used wherever an item has no photo yet, so a card
 * never shows a broken or empty box.
 */
type Props = {
  name?: string;
  className?: string;
  /** Hide the name when the card already shows it right under the image. */
  showName?: boolean;
};

const BUILDINGS: [number, number, number][] = [
  // x, width, height (viewBox 0..400 wide, ground at 170)
  [52, 14, 46], [68, 10, 62], [80, 16, 40], [98, 12, 78], [112, 18, 54],
  [132, 10, 92], [144, 16, 66], [162, 12, 48], [176, 20, 104], [198, 12, 72],
  [212, 16, 120], [230, 12, 84], [244, 18, 58], [264, 10, 96], [276, 16, 70],
  [294, 12, 50], [308, 18, 82], [328, 10, 44], [340, 16, 60],
];

function Palm({ x, h, flip = false }: { x: number; h: number; flip?: boolean }) {
  const top = 170 - h;
  const lean = flip ? -6 : 6;
  return (
    <g>
      <path
        d={`M${x} 170 Q${x + lean} ${top + h / 2} ${x + lean * 1.4} ${top}`}
        stroke="currentColor"
        strokeWidth="2.4"
        fill="none"
      />
      {[-60, -25, 10, 45, 80, 120, 160].map((deg) => (
        <path
          key={deg}
          d={`M${x + lean * 1.4} ${top} q ${Math.cos((deg * Math.PI) / 180) * 12} ${-6 + Math.abs(Math.sin((deg * Math.PI) / 180)) * -4} ${Math.cos((deg * Math.PI) / 180) * 22} ${6}`}
          stroke="currentColor"
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
        />
      ))}
    </g>
  );
}

export default function BrandPlaceholder({ name, className = "", showName = true }: Props) {
  return (
    <div
      data-placeholder=""
      className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-b from-[#0d0626] via-[#2a0f55] to-[#5b1a7a] ${className}`}
      style={{ containerType: "size" }}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 400 220"
        preserveAspectRatio="xMidYMax slice"
        className="absolute inset-0 h-full w-full text-[#07030f]"
      >
        <defs>
          <linearGradient id="bp-water" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#3b1366" />
            <stop offset="1" stopColor="#06020d" />
          </linearGradient>
        </defs>
        <circle cx="300" cy="70" r="26" fill="#f472b6" opacity="0.18" />
        <g fill="currentColor">
          {BUILDINGS.map(([x, w, h]) => (
            <rect key={x} x={x} y={170 - h} width={w} height={h} />
          ))}
        </g>
        <g fill="#c084fc" opacity="0.55">
          {BUILDINGS.filter((_, i) => i % 3 === 0).map(([x, w, h]) => (
            <rect key={`w${x}`} x={x + w / 2 - 1} y={170 - h + 8} width="2" height="2" />
          ))}
        </g>
        <Palm x={22} h={78} />
        <Palm x={40} h={58} />
        <Palm x={368} h={82} flip />
        <Palm x={384} h={60} flip />
        <rect x="0" y="170" width="400" height="50" fill="url(#bp-water)" />
        <rect x="150" y="176" width="100" height="1.5" fill="#22d3ee" opacity="0.7" />
      </svg>
      {showName && name ? (
        <p
          className="relative z-[1] max-w-[85%] text-balance break-words text-center font-black leading-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,.8)]"
          style={{ fontSize: "clamp(1rem, 9cqi, 2.4rem)" }}
        >
          {name}
        </p>
      ) : null}
      <span className="absolute bottom-2 right-3 z-[1] text-[9px] font-black uppercase tracking-[0.3em] text-white/50">
        GTA Companion
      </span>
    </div>
  );
}
