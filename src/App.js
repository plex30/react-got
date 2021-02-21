import "./App.css";
import { Routes } from "./core/components/Routes/Routes";
import { Menu } from "./core/components/Menu/Menu";

import { BrowserRouter as Router } from "react-router-dom";
import { IntoBar } from "./core/components/Into-Bar/IntoBar";
import { useState } from "react";
import { Loading } from "./core/components/Loading/Loading";
import { LoadingContext } from "./core/components/Loading/context/LoadingContext";

function App() {

  const [isLoading, setIsLoading] = useState(false);
  return (
    <Router>
      <div className="prueba">
      <LoadingContext.Provider value={{isLoading, setIsLoading}}>
      <Loading></Loading>
        <Routes></Routes>
      </LoadingContext.Provider> 
      </div>
    </Router>
  );
}

export default App;
