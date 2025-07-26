import About from './assets/components/About/About'
import Hero from './assets/components/Hero/Hero'
import NavBar from './assets/components/navbar/Navbar'
import Location from './assets/components/Location/Location'
import Quote from './assets/components/Quote/Quote'
import StorySection from './assets/components/StorySection/StorySection'
import MenuTabs from './assets/components/MenuTabs/MenuTabs'
import Team from './assets/components/Team/Team'

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
    </>
  )
}

export default App
