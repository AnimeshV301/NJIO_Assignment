import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "../src/components/Pages/HomePage";
import Channels from "../src/components/Pages/Channels";
import "./App.css";

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/channels" component={Channels} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
