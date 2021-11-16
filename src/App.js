import "./styles.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Background from "./Components/Background";
import { Switch } from "react-router-dom";
import Home from "./Components/Home";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/useBackground">
            <Background />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
