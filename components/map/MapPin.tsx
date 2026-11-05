type Props = {
  name: string;
  color: string;
  active: boolean;
  onClick: () => void;
};

export default function MapPin({
  name,
  color,
  active,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="group absolute -translate-x-1/2 -translate-y-1/2"
    >
      <div className="relative flex flex-col items-center">

        {/* Pulse */}

        <div
          className={`absolute h-10 w-10 rounded-full blur-xl transition-all duration-500 ${
            active
              ? "scale-150 opacity-100"
              : "scale-100 opacity-0 group-hover:opacity-70"
          }`}
          style={{
            backgroundColor: color,
          }}
        />

        {/* Pin */}

        <div
          className={`relative z-10 h-5 w-5 rounded-full border-[3px] border-white transition-all duration-300 ${
            active
              ? "scale-150"
              : "group-hover:scale-125"
          }`}
          style={{
            backgroundColor: color,
            boxShadow: active
              ? `0 0 30px ${color}`
              : `0 0 12px ${color}`,
          }}
        />

        {/* Label */}

        <div
          className={`mt-3 rounded-full border border-white/10 bg-black/70 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur-xl transition-all duration-300 ${
            active
              ? "border-pink-500/30"
              : "group-hover:border-white/20"
          }`}
        >
          {name}
        </div>

      </div>
    </button>
  );
}