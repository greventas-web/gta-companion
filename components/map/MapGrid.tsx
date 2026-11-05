export default function MapGrid() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-[0.08]"
      viewBox="0 0 1200 900"
      preserveAspectRatio="none"
    >
      {/* Vertical */}

      {Array.from({ length: 24 }).map((_, i) => (
        <line
          key={`v-${i}`}
          x1={i * 50}
          y1="0"
          x2={i * 50}
          y2="900"
          stroke="white"
          strokeWidth="1"
        />
      ))}

      {/* Horizontal */}

      {Array.from({ length: 18 }).map((_, i) => (
        <line
          key={`h-${i}`}
          x1="0"
          y1={i * 50}
          x2="1200"
          y2={i * 50}
          stroke="white"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}