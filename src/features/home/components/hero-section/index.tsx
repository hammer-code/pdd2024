import Card from "@/components/ui/card";

// all components
import HeroTitle from "./hero-title";
import EventDate from "./event-date";
import SocialLinks from "./social-links";
import Venue from "./venue";

const HeroSection = () => {
  return (
    <Card>
      <HeroTitle />
      <Venue />
      <EventDate />
      {/* <EventSubscription /> */}
      {/* <SocialLinks /> */}
    </Card>
  );
};

export default HeroSection;
