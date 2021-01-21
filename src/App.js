import './App.css';
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <NavBar />
      <Jumbotron className='jumbotron'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route  path='/*' component={Home} />
        </Switch>
      </Jumbotron>
      <Footer />
    </Router>
  );
}

export default App;
