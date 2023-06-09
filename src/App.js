import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Particle from "./components/Particle";
import { Work } from "./components/Work";

function App() {
  setTimeout(() => window.scrollBy(0, 10), 100);
  return (
    <>
      <Particle />
      <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <Work />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
