import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/Checkout">
            <h1> checkout</h1>
          </Route>
          <Route path="/login">
            <h1>hii</h1>
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/contact">
            <h1>Contact</h1>
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
