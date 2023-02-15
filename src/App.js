import Home from "./Components/Home/index";
import About from "./Components/About/index";
import Projects from "./Components/Projects/index";
import Experience from "./Components/Experience/index";
import Contact from "./Components/Contact/index";
import Footer from "./Components/Footer/index";

function App() {
  return (
    <div className="overflow-auto">
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
