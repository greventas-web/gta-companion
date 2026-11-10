import TimelinePage from "../../components/timeline/TimelinePage";
import { pageMetadata } from "@/lib/launch";

export const metadata = pageMetadata(
  "GTA 6 timeline",
  "A sourced index of official Grand Theft Auto VI announcements: trailers, the release date, pre-orders, radio, and pre-load. Unofficial fan site."
);

export default function Page() {
  return <TimelinePage />;
}