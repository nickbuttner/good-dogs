import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./screens/home";
import Breeds from "./screens/breeds";
import Adddog from "./screens/adddog";
import Detail from "./screens/detail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/dogs/:breed/:id">
            <Detail />
          </Route>
          <Route path="/breeds/:breed">
            <Breeds />
          </Route>
          <Route path="/new-good-dog">
            <Adddog />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
