import React from 'react';
import Projects from '../projects/Projects';

import Jumbotron from 'react-bootstrap/Jumbotron';

import ScrollAnimation from 'react-animate-on-scroll';

// TODO Click icon to filter by tech
// TODO on hover, textshadow goldish

const Portfolio = () => (
  <Jumbotron className='jumbotron'>
    <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
      <h1 style={{ textAlign: 'Center' }}>Recent Projects</h1>
      <Projects />
    </ScrollAnimation>
  </Jumbotron>
);

export default Portfolio;
