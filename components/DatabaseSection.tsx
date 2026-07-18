import { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export default function DatabaseSection({
  eyebrow,
  title,
  children,
}: Props) {
  return (
    <section className="mt-20">
      <div className="mb-10">
        <div className="text-xs font-black uppercase tracking-[0.4em] text-pink-400">
          {eyebrow}
        </div>

        <h2 className="mt-4 text-5xl font-black text-white">
          {title}
        </h2>
      </div>

      {children}
    </section>
  );
}