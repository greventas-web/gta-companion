import TimelinePage from "../../components/timeline/TimelinePage";
import { pageMetadata } from "@/lib/launch";

export const metadata = pageMetadata(
  "GTA 6 timeline",
  "Unofficial GTA 6 timeline: every trailer, the release date, pre-orders, radio, pre-load, launch week and The Festival."
);

export default function Page() {
  return <TimelinePage />;
}