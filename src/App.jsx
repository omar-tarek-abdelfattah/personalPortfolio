
import { useEffect, useState } from 'react'
import './App.css'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Skills from './Components/Skills/Skills.jsx'

function App() {

  const [isLoaded, setIsLoaded] = useState(true)

  useEffect(() => {
    setIsLoaded(true)
  }, [])
  return <>
    <div className={`app ${isLoaded ? "loaded" : ""}`}>
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <Footer />
    </div>

  </>
}

export default App
