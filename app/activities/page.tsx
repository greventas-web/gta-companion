import ActivityCard from "@/components/ActivityCard";
import PageTitle from "@/components/PageTitle";
import StatsCard from "@/components/StatsCard";

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

          <Badge>Official GTA VI Database</Badge>

          <PageTitle
            title="Activity Database"
            description="Browse every officially confirmed activity, hobby, sport and recreational event available throughout Leonida."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">

            <StatsCard
              label="Activities"
              value={activities.length}
            />

            <StatsCard
              label="Categories"
              value={
                new Set(
                  activities.map(
                    (activity) => activity.category
                  )
                ).size
              }
            />

            <StatsCard
              label="Confirmed"
              value="100%"
            />

          </div>

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