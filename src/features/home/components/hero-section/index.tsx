import Card from "@/components/ui/card";

// all components
import HeroTitle from "./hero-title";
import EventDate from "./event-date";
import EventSubscription from "./event-subscription";
import SocialLinks from "./social-links";

const HeroSection = () => {
  return (
    <Card>
      <HeroTitle />
      <EventDate />
      <EventSubscription />
      <SocialLinks />
    </Card>
  );
};

export default HeroSection;
