import '../css/App.css';
import Header from "./Header";
import Hamburger from "./Hamburger";
import Landing from "./Landing";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Success from "./Success";
import Failure from "./Failure";
import Footer from "./Footer";

function App() {

  return (
    <>
      <div>
        <Header/>
        <Landing/>
        <About />
        <Skills/>
        <Projects/>
        <Footer/>
      </div>
    </>
  )
}

export default App
