import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Project from "./Pages/Project"
import Contact from "./Pages/Contact"
const App = () => {
  return (
   <div className="min-h-screen bg-linear-to-br from-slate-200 via-white to-blue-200">

    <Navbar/>
    <Home />
    <Project />
    <About />
    <Contact />
  </div>
  )
}

export default App