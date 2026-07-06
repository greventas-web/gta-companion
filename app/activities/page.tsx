import ActivityCard from "@/components/ActivityCard";
import PageTitle from "@/components/PageTitle";

import {
  Badge,
  Container,
  Section,
} from "@/components/ui";

import { activities } from "@/data/activities";

export default function ActivitiesPage() {
  return (
    <main className="min-h-screen bg-background text-white">

      <Section>

        <Container>

          <Badge>Official GTA VI Activities</Badge>

          <PageTitle
            title="Activities"
            description="Explore activities and entertainment officially revealed throughout Leonida."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {activities.map((activity) => (
              <ActivityCard
                key={activity.id}
                activity={activity}
              />
            ))}

          </div>

        </Container>

      </Section>

    </main>
  );
}