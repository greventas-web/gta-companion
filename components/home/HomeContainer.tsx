import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function HomeContainer({
  children,
}: Props) {
  return (
    <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
      {children}
    </div>
  );
}