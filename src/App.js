import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import AboutMe from "./components/AboutMe";

import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutMe />
    </div>
  );
}

export default App;
