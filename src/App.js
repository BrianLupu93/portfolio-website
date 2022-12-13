import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import AboutMe from "./components/AboutMe";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
    </div>
  );
}

export default App;
