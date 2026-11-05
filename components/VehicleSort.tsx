import { ArrowDownUp } from "lucide-react";

type VehicleSortProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function VehicleSort({
  value,
  onChange,
}: VehicleSortProps) {
  return (
    <div className="flex items-center gap-4">

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
        <ArrowDownUp
          size={18}
          className="text-pink-400"
        />
      </div>

      <div>

        <div className="mb-2 text-xs font-black uppercase tracking-[0.3em] text-zinc-500">
          Sort Vehicles
        </div>

        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="min-w-[230px] rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-white outline-none transition-all duration-300 hover:border-pink-500/50 focus:border-pink-500 focus:ring-4 focus:ring-pink-500/10"
        >
          <option value="default">
            Default Order
          </option>

          <option value="az">
            Name (A–Z)
          </option>

          <option value="za">
            Name (Z–A)
          </option>

          <option value="manufacturer">
            Manufacturer
          </option>

          <option value="status">
            Status
          </option>

        </select>

      </div>

    </div>
  );
}