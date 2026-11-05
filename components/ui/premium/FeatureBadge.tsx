type Props = {
  children: React.ReactNode;
};

export default function FeatureBadge({
  children,
}: Props) {
  return (
    <span className="inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-xs font-black uppercase tracking-[0.35em] text-pink-400">
      {children}
    </span>
  );
}