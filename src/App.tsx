
import './App.css'
import { Jumbotron } from './components/jumbotron'
import { AboutMe } from './components/aboutme'
import { Skills } from './components/skills'
import { Projects } from './components/projects'
import { Experiences } from './components/experiences'
import { Testimonials } from './components/testimonials'
import { Contact } from './components/contact'

function App() {


  return (
    <>
     <Jumbotron/>
     <AboutMe/>
     <Skills/>
     <Projects/>
     <Experiences/>
     <Testimonials/>
     <Contact/>
    </>
  )
}

export default App
