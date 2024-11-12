import BlurBackground from "./components/BlurBackground"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <BlurBackground/>
      <Navbar/>
      <main className="antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10">
        <Navbar/>
        <HeroSection/>
        <About/>
        <Projects/>
      </main>
    </>
  
  )
}

export default App