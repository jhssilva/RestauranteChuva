import "./App.css";
import Navbar from "./components/Navbar";
import Slide from "./components/Slide";
import History from "./components/History";
import Menu from "./components/Menu";

import Copyright from "./components/Copyright";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slide />
      <History />
      <Menu />
      <Copyright />
    </div>
  );
}

export default App;
