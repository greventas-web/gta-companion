import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function PageContainer({
  children,
  className = "",
}: Props) {
  return (
    <section
      className={`relative mx-auto w-full max-w-[1600px] px-6 pt-44 pb-32 sm:px-10 lg:px-14 ${className}`}
    >
      {children}
    </section>
  );
}