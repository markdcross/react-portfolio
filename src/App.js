import './App.css';
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { HashRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Footer from './components/layout/Footer';

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Jumbotron className='jumbotron'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/portfolio' component={Portfolio} />
          
        </Switch>
      </Jumbotron>
      <Footer />
    </HashRouter>
  );
}

export default App;
