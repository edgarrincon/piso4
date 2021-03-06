import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePiso4 from "./pages/HomePiso4/HomePiso4";
import Piso1 from "./pages/Piso1/Piso1";
import Piso2 from "./pages/Piso2/Piso2";
import Piso3 from "./pages/Piso3/Piso3";
import Planta from "./pages/Planta/Planta";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePiso4} />
          <Route path="/piso1" component={Piso1} />
          <Route path="/piso2" component={Piso2} />
          <Route path="/piso3" component={Piso3} />
          <Route path="/planta" component={Planta} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
