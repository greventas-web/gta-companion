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
      className={`relative mx-auto w-full max-w-[1700px] px-8 pt-36 pb-32 lg:px-10 xl:px-12 ${className}`}
    >
      {children}
    </section>
  );
}