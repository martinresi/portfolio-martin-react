import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./Components/navbar";
import { Banner } from "./Components/banner";
import { Skills } from "./Components/skills";
import { Projects } from "./Components/projects";
import { Contact } from "./Components/contact";
import { Footer } from "./Components/footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
