import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Home />
      </div>
      <div className="reactangle-strip"></div>
    </div>
  );
}

export default App;
