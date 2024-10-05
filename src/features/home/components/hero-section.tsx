import Card from "@/components/ui/card";

// all components
import HeroTitle from "./hero-section/hero-title";
import EventDate from "./hero-section/event-date";
import EventSubscription from "./hero-section/event-subscription";
import SocialLinks from "./hero-section/social-links";

const HeroSection = () => {
  return (
    <Card>
      <HeroTitle />
      <EventDate />
      <EventSubscription />
      {/* <SocialLinks /> */}
    </Card>
  );
};

export default HeroSection;
