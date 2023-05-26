import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Work from "./Work";
import "../styles/Homepage.css";
import "../styles/bgAnimation.css";

function Welcome() {
  return (
    <div className="App">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      <Home />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default Welcome;
