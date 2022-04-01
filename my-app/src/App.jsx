import "./App.css";
import Navbar from "./components/Navbar";
import Slide from "./components/Slide";
import History from "./components/History";
import Menu from "./components/Menu";

import Contact from "./components/Contact";
import Map from "./components/Map";
import Copyright from "./components/Copyright";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slide />
      <History />
      <Menu />
      <Contact />
      <Map />
      <Copyright />
    </div>
  );
}

export default App;
