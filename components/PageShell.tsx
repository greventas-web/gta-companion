import { ReactNode } from "react";

import PageBackground from "@/components/PageBackground";
import PageContainer from "@/components/PageContainer";

type Props = {
  children: ReactNode;
};

export default function PageShell({
  children,
}: Props) {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#040404] text-white">

      <PageBackground />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(236,72,153,.04),transparent_60%)]" />

      <div className="relative z-10">

        <PageContainer>
          {children}
        </PageContainer>

      </div>

    </main>
  );
}