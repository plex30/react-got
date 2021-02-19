import "./App.css";
import { Routes } from "./core/components/Routes/Routes";
import { Menu } from "./core/components/Menu/Menu";

import { BrowserRouter as Router } from "react-router-dom";
import { IntoBar } from "./core/components/Into-Bar/IntoBar";

function App() {
  return (
    <Router>
      <div>
        <Routes></Routes>
      </div>
    </Router>
  );
}

export default App;
