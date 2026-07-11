type VehicleSortProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function VehicleSort({
  value,
  onChange,
}: VehicleSortProps) {
  return (
    <div>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-white outline-none transition-all duration-300 hover:border-pink-500/50 focus:border-pink-500"
      >

        <option value="default">
          Default
        </option>

        <option value="az">
          Name (A–Z)
        </option>

        <option value="za">
          Name (Z–A)
        </option>

      </select>

    </div>
  );
}