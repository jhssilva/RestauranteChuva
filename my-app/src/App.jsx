import "./App.css";
import Navbar from "./components/Navbar";
import Slide from "./components/Slide";
import History from "./components/History";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slide />
      <History />
      <Menu />
    </div>
  );
}

export default App;
