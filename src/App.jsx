import "./App.css";
import { CV } from "./CV/CV.js";
import AboutMe from "./components/AboutMe";
import More from "./components/More";
import Hero from "./components/hero";
import Work from "./components/Work";

const { hero, education, experience, languages, habilities, volunteer } = CV;


function App() {

  return (
    <div className='App'>
      <Hero hero={hero} />
      <AboutMe hero={hero.aboutMe} />
      <Work education={education}  experience={experience}/>
      <More
        languages={languages}
        habilities={habilities}
        volunteer={volunteer}
      />
    </div>
  )
}

export default App
