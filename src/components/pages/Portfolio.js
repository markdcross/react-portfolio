import React from 'react';
import Projects from '../projects/Projects';

import Jumbotron from 'react-bootstrap/Jumbotron';

// TODO Click icon to filter by tech
// TODO on hover, textshadow goldish

const Portfolio = () => (
  <Jumbotron className='jumbotron'>
    <Projects />
  </Jumbotron>
);

export default Portfolio;
