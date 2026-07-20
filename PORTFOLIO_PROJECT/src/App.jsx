import Navbar from "./Components/Navbar"
import Home from "./Section/Home"
import About from "./Section/About"
import Skill from "./Section/Skill"
import Project from "./Section/Project"
import Experience from "./Section/Experience"
import Testimonial from "./Section/Testimonial"
import Contact from "./Section/Contact"
import Footer from "./Section/Footer"
import ParticleBackground from "./Components/ParticleBackground"
const App = () => {
  return (
   <div className="relative gradient text-white">

    <ParticleBackground/>


    <Navbar/>
    <Home />
    <About />
    <Skill />
    <Project />
    <Experience />
    <Testimonial />
    <Contact />
    <Footer />
   </div>
  )
}

export default App