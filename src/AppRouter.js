import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Store from "./components/Store";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";

const AppRouter = () => (
  <Router>
    <NavBar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Gallery" component={Gallery} />
      <Route path="/Store" component={Store} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </Router>
);

export default AppRouter;
