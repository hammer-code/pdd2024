// all components
import About from './components/about'
import EventSubscription from './components/event-subscription/'
import HeroSection from './components/hero-section'
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
      <Partners />
      {/* <EventSubscription /> */}
      <SocialLinks />
    </>
  )
}

export default Home
