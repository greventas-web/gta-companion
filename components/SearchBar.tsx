"use client";

type SearchBarProps = {
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
};

export default function SearchBar({
  placeholder,
  value = "",
  onChange,
}: SearchBarProps) {
  return (
    <div className="mt-12">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-6 py-4 text-lg text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20"
      />
    </div>
  );
}