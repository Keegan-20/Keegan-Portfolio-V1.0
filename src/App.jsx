import BlurBackground from "./components/BlurBackground"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection";
const App = () => {
  return (
    <>
      <BlurBackground/>
      <Navbar/>
      <main className="antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10">
        <Navbar/>
        <HeroSection/>
      </main>
    </>
  
  )
}

export default App