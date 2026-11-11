type Props = {
  name: string;
  className?: string;
};

export default function BrandedNameCard({ name, className = "" }: Props) {
  return (
    <div
      className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-violet-800 via-fuchsia-600 to-teal-500 p-5 ${className}`}
    >
      <div className="w-full max-w-full rounded-[28px] border border-white/80 px-4 py-6 text-center">
        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-teal-100">
          GTA Companion
        </p>
        <p className="mt-3 break-words text-2xl font-black leading-tight text-white sm:text-3xl">
          {name}
        </p>
      </div>
    </div>
  );
}
