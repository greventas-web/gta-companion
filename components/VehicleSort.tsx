type VehicleSortProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function VehicleSort({
  value,
  onChange,
}: VehicleSortProps) {
  return (
    <div className="mt-6">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white"
      >
        <option value="default">Default</option>
        <option value="az">Name (A–Z)</option>
        <option value="za">Name (Z–A)</option>
      </select>
    </div>
  );
}