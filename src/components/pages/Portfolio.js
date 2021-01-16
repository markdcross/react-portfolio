import React from 'react';
import Projects from '../projects/Projects';

import Jumbotron from 'react-bootstrap/Jumbotron';

const Portfolio = () => (
  <Jumbotron>
    <h1>Recent Projects</h1>
    <Projects />
  </Jumbotron>
);

export default Portfolio;
