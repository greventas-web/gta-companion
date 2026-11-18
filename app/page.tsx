import HomePageV2 from "@/components/home/v2/HomePageV2";

// Re-render every 5 minutes so the launch-state copy flips on its own.
export const revalidate = 300;

export default function Page() {
  return <HomePageV2 />;
}
