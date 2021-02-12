import "./App.css";
import { Routes } from "./core/components/Routes/Routes";
import { Menu } from "./core/components/Menu/Menu";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Menu></Menu>
        <Routes></Routes>
      </div>
    </Router>
  );
}

export default App;
