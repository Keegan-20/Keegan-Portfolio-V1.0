import BlurBackground from "./components/BlurBackground"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import  Skills from "./components/Skills";
import Contact from "./components/Contact";

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
        <Skills/>
        <Contact/>
      </main>
    </>
  
  )
}

export default App