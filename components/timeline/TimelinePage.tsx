import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, SimpleHero } from "@/components/simple/SimpleCard";

import { timeline } from "../../src/data/timeline/timeline";

export default function TimelinePage() {
  return (
    <PageShell>
      <SimpleHero title="Timeline" />
      <CardGrid count={timeline.length}>
        {timeline.map((event) => (
          <SimpleCard
            key={`${event.date}-${event.title}`}
            title={event.title}
            image={event.image?.src}
            imageAlt={event.image?.alt}
            eyebrow={event.date}
            line={event.description}
          />
        ))}
      </CardGrid>
    </PageShell>
  );
}
