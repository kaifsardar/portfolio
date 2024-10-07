import './App.css';
import './components/Navbar.js'
import Navbar from './components/Navbar.js';
import Banner from './components/Banner.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Education from './components/Education.js';
import Contact from './components/Contact.js'
import { IoMdDownload } from "react-icons/io";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <section id="home"><Banner/></section>
      <section id="skills"><Skills/></section>
      <section id="projects"><Projects/></section>
      <section id="education"><Education/></section>
      <a className='resume' href='./assets/new_cv2.pdf' download={true}>
        < IoMdDownload />
        <p>Resume</p>
      </a>
      <Contact/>
      <div className='footer'>
        Made with ♥️ by Kaif
        </div>
    </div>
  );
}

export default App;
