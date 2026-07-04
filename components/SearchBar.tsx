type SearchBarProps = {
  placeholder: string;
};

export default function SearchBar({
  placeholder,
}: SearchBarProps) {
  return (
    <div className="mt-12">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-6 py-4 text-lg text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20"
      />
    </div>
  );
}