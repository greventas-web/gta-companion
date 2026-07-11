import NavLink from "@/components/NavLink";
import ExploreButton from "@/components/navigation/ExploreButton";

export default function DesktopNavigation() {
  return (
    <nav className="hidden items-center gap-8 xl:flex">
      <NavLink href="/">Home</NavLink>

      <ExploreButton />

      <NavLink href="/map">Map</NavLink>

      <NavLink href="/guides">Guides</NavLink>

      <NavLink href="/news">News</NavLink>
    </nav>
  );
}