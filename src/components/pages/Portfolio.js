import React from 'react';
import Projects from '../projects/Projects';

import Jumbotron from 'react-bootstrap/Jumbotron';

import Fade from 'react-reveal/Fade';

// TODO Click icon to filter by tech
// TODO on hover, textshadow goldish

const Portfolio = () => (
  <Jumbotron className='jumbotron'>
    <Fade bottom>
      <h1 style={{ textAlign: 'Center' }}>Recent Projects</h1>
      <Projects />
    </Fade>
  </Jumbotron>
);

export default Portfolio;
