import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import InstallCallout from "@/components/pwa/InstallCallout";
import { pageMetadata } from "@/lib/launch";
import { IMAGE_CREDIT, SITE, UNOFFICIAL_DISCLAIMER } from "@/lib/site";

const title = "GTA 6 Companion App";
const description =
  "Install the unofficial GTA 6 Companion app on iPhone, Android, and PC. Fan database and community map for Grand Theft Auto VI. Not affiliated with Rockstar Games or Take-Two.";

export const metadata = pageMetadata(title, description);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: SITE.name,
  alternateName: title,
  url: `${SITE.url}/app`,
  applicationCategory: "ReferenceApplication",
  operatingSystem: "Android, iOS, Windows, macOS, ChromeOS",
  description,
  browserRequirements: "A browser that can install a web app, such as Chrome, Edge, or Safari.",
};

const platforms = [
  {
    id: "iphone",
    title: "iPhone and iPad",
    steps: [
      "Open www.gta-companion.com in Safari.",
      "Tap the Share button.",
      "Tap Add to Home Screen.",
      "Tap Add. The icon is the night-skyline logo.",
    ],
  },
  {
    id: "android",
    title: "Android",
    steps: [
      "Open the site in Chrome.",
      "Tap Install the app when it appears, or open the Chrome menu and tap Install app.",
      "Confirm. GTA Companion opens in its own window and stays on your home screen.",
    ],
  },
  {
    id: "pc",
    title: "PC and Mac",
    steps: [
      "Open the site in Chrome or Edge.",
      "Click Install the app, or the install icon in the address bar.",
      "Confirm. The app opens in its own window.",
      "On Mac Safari, use the Share menu, then Add to Dock.",
    ],
  },
];

export default function AppInstallPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <PageHero
        badge="Unofficial fan app"
        title={title}
        description="Add GTA Companion to your home screen or desktop. The database, launch notes, and live community map open like an app. Grand Theft Auto VI is out on PlayStation 5 and Xbox Series X|S."
      >
        <InstallCallout />
      </PageHero>

      <div className="grid gap-6 lg:grid-cols-3">
        {platforms.map((platform) => (
          <section
            key={platform.id}
            aria-labelledby={`${platform.id}-install`}
            className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6"
          >
            <h2 id={`${platform.id}-install`} className="text-xl font-black text-white">
              {platform.title}
            </h2>
            <ol className="mt-4 space-y-3 text-sm leading-6 text-zinc-300">
              {platform.steps.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6d28d9] text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>

      <section className="mt-8 rounded-[28px] border border-violet-300/20 bg-[#1a0a2e]/80 p-6 sm:p-8">
        <h2 className="text-xl font-black text-white">What stays on your device</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-300">
          After you open a page, you can read it again without a connection.
          Home and this install page are saved with the app. The live map, the
          launch notes, and vehicles are also home-screen shortcuts. New pages
          still load from the network when you have one, so the database stays
          current. Map submissions and admin tools are never saved for
          offline use.
        </p>
      </section>

      <p className="mt-8 max-w-3xl text-sm leading-6 text-zinc-500">
        {UNOFFICIAL_DISCLAIMER} {IMAGE_CREDIT}.
      </p>
    </PageShell>
  );
}
