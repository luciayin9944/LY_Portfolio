import { useState } from "react"
import './App.css'
import "./index.css"
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { Home } from './components/sections/Home' 
import { About } from './components/sections/About'
import Projects from './components/sections/Projects'
// WRONG: import { Projects } from './components/sections/Projects'
import projectsData from './data/projectsData.json';


function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [projects, setProjects] = useState(projectsData);


  return (
    <>
      {/* <Navbar /> */}
      {!isLoaded && <LoadingScreen onComplete={() => {
        //console.log("Loading complete!")
        setIsLoaded(true)
        }} />}
        {/* <Navbar /> */}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-white text-blac`}
      >
        <Navbar />
        <Home />
        <About />
        <Projects projects={projects}/>
  
      </div>
    </>
  )
}


export default App
