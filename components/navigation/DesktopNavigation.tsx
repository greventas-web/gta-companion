import NavLink from "@/components/NavLink";
import ExploreButton from "@/components/navigation/ExploreButton";

export default function DesktopNavigation() {
  return (
    <nav className="hidden items-center gap-8 xl:flex">

      <NavLink href="/">
        Home
      </NavLink>

      <NavLink href="/vehicles">
        Vehicles
      </NavLink>

      <NavLink href="/characters">
        Characters
      </NavLink>

      <NavLink href="/locations">
        Locations
      </NavLink>

      <ExploreButton />

      <NavLink href="/guides">
        Guides
      </NavLink>

      <NavLink href="/news">
        News
      </NavLink>

    </nav>
  );
}