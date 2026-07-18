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
    <main className="relative min-h-screen overflow-hidden bg-[#040404] text-white">

      <PageBackground />

      <div className="relative z-10">

        <PageContainer>
          {children}
        </PageContainer>

      </div>

    </main>
  );
}