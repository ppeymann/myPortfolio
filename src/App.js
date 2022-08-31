import About from "./Components/about/About";
import Header from "./Components/header/Header";
import Home from "./Components/Home/Home";
import Skill from "./Components/skill/Skill";

function App() {
  return (
  <>
    <Header />
    <main className="main">
    <Home />
    <About />
    <Skill />
    </main>
      </>
  );
}

export default App;
