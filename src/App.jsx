import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/navbar.jsx";
import { Banner } from "./components/banner.jsx";
import { Skills } from "./components/skills.jsx";
import { Projects } from "./components/projects.jsx";
import { Contacto } from "./components/contacto.jsx";
import { Footer } from "./components/footer.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
