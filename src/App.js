import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Headroom from "react-headroom";

function App() {
  return (
      <div>
          <Headroom>
              <NavBar />
          </Headroom>
          <Home />
          <About />
          <Portfolio />
          <Experience />
          <Contact />

          <SocialLinks />
      </div>
  );
}

export default App;
