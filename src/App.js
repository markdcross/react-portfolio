import './App.css';
import Container from 'react-bootstrap/Container';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Container className='heroDiv'>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/portfolio' component={Portfolio} />
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
