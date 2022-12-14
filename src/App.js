import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
