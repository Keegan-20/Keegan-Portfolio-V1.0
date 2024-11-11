import BlurBackground from "./components/BlurBackground"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection";
import About from "./components/About";

const App = () => {
  return (
    <>
      <BlurBackground/>
      <Navbar/>
      <main className="antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10">
        <Navbar/>
        <HeroSection/>
        <About/>
      </main>
    </>
  
  )
}

export default App