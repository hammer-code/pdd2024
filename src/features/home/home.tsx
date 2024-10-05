// all components
import About from './components/about'
import HeroSection from './components/hero-section'
import SocialLinks from './components/hero-section/social-links'
import Speakers from './components/speakers'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Speakers />
      <SocialLinks />
    </div>
  )
}

export default Home
