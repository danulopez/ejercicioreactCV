
import './App.css';
import "./CV/CV";
import Hero from "./components/Hero"
const { hero, education, experience, languages, habilities, volunteer } = CV;

function App() {
  

  return (
    <>
     <Hero hero = {hero}/>
     <Education education ={education}/>
     

    </>
  )
}

export default App
