import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./Components/navbar.jsx";
import { Banner } from "./Components/banner.jsx";
import { Skills } from "./Components/skills.jsx";
import { Projects } from "./Components/projects.jsx";
import { Contact } from "./Components/contact.jsx";
import { Footer } from "./Components/footer.jsx";

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
