
import './App.css';
import {CV} from "./CV/CV";
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Hero from "./components/Hero"
import More from './components/More';
const { hero, education, experience, languages, habilities, volunteer } = CV;

function App() {
  

  return (
    <>
     <Hero hero = {hero}/>
     <Education education ={education}/>
     <About about = {hero.aboutMe}/>
     <Experience experience = {experience}/>
     <More languages = {languages} habilities = {habilities} volunteer = {volunteer}
      />


    </>
  )
}

export default App
