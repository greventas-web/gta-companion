import HomeContainer from "../HomeContainer";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import ExploreGrid from "../ExploreGrid";

export default function ExploreSection() {
  return (
    <Section className="relative -mt-10 pb-24 pt-6">

      <HomeContainer>

        <SectionHeader
          badge="Browse by Category"
          title="Explore Everything We Know"
          description="Vehicles, characters, locations, businesses, weapons and every confirmed GTA VI database."
        />

        <div className="mt-12">
          <ExploreGrid />
        </div>

      </HomeContainer>

    </Section>
  );
}