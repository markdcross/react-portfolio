import "./App.css";
import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/layout/navBar";

import Home from "./components/pages/home";
import Portfolio from "./components/pages/portfolio";
import Footer from "./components/layout/footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Jumbotron className="jumbotron">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route path="/*" component={Home} />
        </Switch>
      </Jumbotron>
      <Footer />
    </Router>
  );
}

export default App;
