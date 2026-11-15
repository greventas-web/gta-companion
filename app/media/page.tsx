import MediaPage from "../../components/media/MediaPage";
import { pageMetadata } from "@/lib/launch";

export const metadata = pageMetadata(
  "GTA 6 media",
  "Official Grand Theft Auto VI trailers, screenshots, and artwork. Images: Rockstar Games. Unofficial fan site."
);

export default function Page() {
  return <MediaPage />;
}