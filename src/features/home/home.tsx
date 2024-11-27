// all components
import About from './components/about'
import EventSubscription from './components/event-subscription/'
import HeroSection from './components/hero-section'
import Rundown from './components/hero-section/rundown';
import SocialLinks from './components/hero-section/social-links'
import Newsletter from './components/newsletter';
import Partners from './components/partners';
import Speakers from './components/speakers'

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Speakers />
      <Newsletter />
      <Rundown />
      <Partners />
      {/* <EventSubscription /> */}
      <SocialLinks />
    </>
  )
}

export default Home
