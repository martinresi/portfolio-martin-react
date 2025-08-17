import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/navbar.jsx";
import { Banner } from "./components/banner.jsx";
import { Skills } from "./components/skills.jsx";
import { Projects } from "./components/projects.jsx";
import { Contact } from "./components/contact.jsx";
import { Footer } from "./components/footer.jsx";

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
