type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`rounded-3xl border border-zinc-800 bg-zinc-900/40 ${className}`}
    >
      {children}
    </div>
  );
}