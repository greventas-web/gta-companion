type Props = {
  show?: boolean;
};

export default function RepresentativeMark({ show }: Props) {
  if (!show) return null;

  return (
    <span className="pointer-events-none absolute bottom-3 right-3 z-30 max-w-[calc(100%-1.5rem)] rounded-full bg-black/80 px-2.5 py-1 text-center text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-100">
      Representative image
    </span>
  );
}
