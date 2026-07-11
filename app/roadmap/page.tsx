import PageTitle from "@/components/PageTitle";

import {
  Badge,
  Card,
  Container,
  Section,
} from "@/components/ui";

const roadmap = [
  {
    version: "Phase 1",
    title: "Foundation",
    status: "Completed",
    items: [
      "Homepage",
      "Database Pages",
      "Navigation",
      "Search",
      "Loading Screen",
      "404 Page",
    ],
  },
  {
    version: "Phase 2",
    title: "Accounts",
    status: "In Progress",
    items: [
      "Authentication",
      "Favorites",
      "Collections",
      "Dashboard",
      "Settings",
    ],
  },
  {
    version: "Phase 3",
    title: "Premium Features",
    status: "Planned",
    items: [
      "Interactive Map",
      "Progress Tracking",
      "Notifications",
      "Achievements",
      "Premium Membership",
    ],
  },
  {
    version: "Phase 4",
    title: "Mobile App",
    status: "Future",
    items: [
      "iOS App",
      "Android App",
      "Cloud Sync",
      "Offline Database",
      "Push Notifications",
    ],
  },
];

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-background text-white">

      <Section>

        <Container>

          <Badge>Development</Badge>

          <PageTitle
            title="GTA Companion Roadmap"
            description="Follow the progress of GTA Companion as we continue building the ultimate companion platform for GTA VI."
          />

          <div className="mt-16 space-y-8">

            {roadmap.map((phase) => (

              <Card
                key={phase.version}
                className="rounded-[40px] border-zinc-800 bg-zinc-900 p-10"
              >

                <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">

                  <div>

                    <p className="text-sm uppercase tracking-[0.35em] text-pink-400">
                      {phase.version}
                    </p>

                    <h2 className="mt-3 text-4xl font-black">
                      {phase.title}
                    </h2>

                  </div>

                  <span className="rounded-full border border-pink-500 px-5 py-2 font-bold text-pink-400">
                    {phase.status}
                  </span>

                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2">

                  {phase.items.map((item) => (

                    <div
                      key={item}
                      className="rounded-2xl border border-zinc-800 bg-black px-5 py-4"
                    >
                      ✓ {item}
                    </div>

                  ))}

                </div>

              </Card>

            ))}

          </div>

        </Container>

      </Section>

    </main>
  );
}