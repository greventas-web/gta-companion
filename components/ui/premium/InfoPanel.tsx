import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export default function InfoPanel({
  title,
  children,
}: Props) {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">

      <h3 className="text-2xl font-black">
        {title}
      </h3>

      <div className="mt-6 text-zinc-400 leading-8">
        {children}
      </div>

    </div>
  );
}