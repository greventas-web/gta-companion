import PageTitle from "@/components/PageTitle";

import {
  Badge,
  Card,
  Container,
  Section,
} from "@/components/ui";

const updates = [
  {
    version: "v0.1.0",
    date: "Initial Release",
    changes: [
      "Project initialized",
      "Design system created",
      "Homepage completed",
      "Navigation implemented",
    ],
  },
  {
    version: "v0.2.0",
    date: "Database Expansion",
    changes: [
      "Vehicles",
      "Manufacturers",
      "Characters",
      "Locations",
      "Businesses",
      "Weapons",
      "Animals",
      "Activities",
      "Brands",
    ],
  },
  {
    version: "v0.3.0",
    date: "Platform Expansion",
    changes: [
      "Dashboard",
      "Profile",
      "Settings",
      "About",
      "Contact",
      "Roadmap",
      "Privacy Policy",
      "Terms of Service",
      "Search",
      "Interactive Map",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <main className="min-h-screen bg-background text-white">

      <Section>

        <Container>

          <Badge>Development Log</Badge>

          <PageTitle
            title="Project Changelog"
            description="Track every major milestone and feature added to GTA Companion."
          />

          <div className="mt-16 space-y-8">

            {updates.map((update) => (

              <Card
                key={update.version}
                className="rounded-[40px] border-zinc-800 bg-zinc-900 p-10"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <h2 className="text-4xl font-black">
                      {update.version}
                    </h2>

                    <p className="mt-2 text-zinc-500">
                      {update.date}
                    </p>

                  </div>

                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2">

                  {update.changes.map((change) => (

                    <div
                      key={change}
                      className="rounded-2xl border border-zinc-800 bg-black px-5 py-4"
                    >
                      ✓ {change}
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