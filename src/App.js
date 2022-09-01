import About from "./Components/about/About";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import Home from "./Components/Home/Home";
import Projects from "./Components/projects/Projects";
import Qualification from "./Components/qualification/Qualification";
import Skill from "./Components/skill/Skill";

function App() {
  return (
  <>
    <Header />
    <main className="main">
    <Home />
    <About />
    <Skill />
    <Qualification />
    <Projects />
    <Contact />
    <Footer />
    </main>
      </>
  );
}

export default App;
