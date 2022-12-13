import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
    </div>
  );
}

export default App;
