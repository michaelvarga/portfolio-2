import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Education from "./Education";
import Experience from "./Experience";
import Contact from "./Contact";

function App() {
  return (
    <div>
      <header >
        <Home className="fluid-container vh-100 App-header"/>
      </header>
      <About />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
