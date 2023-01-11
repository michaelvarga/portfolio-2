import Home from "./Components/Home/index";
import About from "./Components/About/index";
import Projects from "./Components/Projects/index";
import Experience from "./Components/Experience/index";
import Contact from "./Components/Contact/index";

export const BLUE = '#3626A7'
export const LIME = '#CAFF8A'
export const PURPLE = '#33173B'
export const WHITE = '#F5F5F5'

function App() {
  return (
    <div className="overflow-auto">
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
