import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { useState } from "react";

function App() {

  const [bool, setBool] = useState(true)

  return (
    <div className="App">
      <div>
        <Navbar bool={bool} setBool={setBool}/>
        <Home bool={bool} setBool={setBool} />
      </div>
      <div className="reactangle-strip"></div>
    </div>
  );
}

export default App;
