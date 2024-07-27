import Card from "@/components/ui/card";

// all components
import HeroTitle from "./components/hero-title";
import EventDate from "./components/event-date";
import EventSubscription from "./components/event-subscription";
import SocialLinks from "./components/social-links";

const Home = () => {
  return (
    <Card>
      <HeroTitle />
      <EventDate />
      <EventSubscription />
      <SocialLinks />
    </Card>
  );
};

export default Home;
