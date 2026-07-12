import Contact from "./Page/Contact"
import Home from "./Page/Home"
import Project from "./Page/Project"
import About from "./Page/About"
import Navbar from "./Components/Navbar"

const App = () => {
  return (
    <div className="min-h-screen bg-linear-to-r from-slate-50 via-blue-50 to-indigo-100">

      <Navbar/>

      <Home />
      <Project/>
      <About/>
      <Contact/>


    </div>
  )
}

export default App