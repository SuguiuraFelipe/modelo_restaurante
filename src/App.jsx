import About from './assets/components/About/About'
import Hero from './assets/components/Hero/Hero'
import NavBar from './assets/components/Navbar/Navbar'
import Location from './assets/components/Location/Location'
import Quote from './assets/components/Quote/Quote'
import StorySection from './assets/components/StorySection/StorySection'
import MenuTabs from './assets/components/MenuTabs/MenuTabs'
import Team from './assets/components/Team/Team'
import OpenHours from './assets/components/OpenHours/OpenHours'
import Reservation from './assets/components/Reservation/Reservation'
import Footer from './assets/components/Footer/Footer'

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Location />
      <About />
      <Quote />
      <StorySection />
      <MenuTabs />
      <Team />
      <OpenHours />
      <Reservation />
      <Footer />
    </>
  )
}

export default App
