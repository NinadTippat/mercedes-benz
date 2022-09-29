import React from "react";
import "./App.css";
import Company from "./Components/Company";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/company">
            <Company />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
