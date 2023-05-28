import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Work from "../components/Work";
import "../styles/Homepage.css";
import "../styles/bgAnimation.css";

function Welcome() {
  return (
    <div className="App">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      <div className="contain">
        <Home />
        <About />
        <Work />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default Welcome;
