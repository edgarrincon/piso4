import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Piso1 from "./pages/Piso1";
import Piso2 from "./pages/Piso2";
import Piso3 from "./pages/Piso3";
import Pb from "./pages/Pb";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/piso1" component={Piso1} />
          <Route path="/piso2" component={Piso2} />
          <Route path="/piso3" component={Piso3} />
          <Route path="/pb" component={Pb} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
