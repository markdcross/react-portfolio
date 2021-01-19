import React from 'react';
import Landing from '../info/Landing';
import Bio from '../info/Bio';
import Stack from '../info/Stack';

import Jumbotron from 'react-bootstrap/Jumbotron';

import ScrollAnimation from 'react-animate-on-scroll';

const Home = () => {
  return (
    <Jumbotron className='jumbotron'>
      <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
        <Landing />
      </ScrollAnimation>
      <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' offset={500}>
        <Jumbotron className='jumbotron bioBlock'>
          <Bio />
        </Jumbotron>
      </ScrollAnimation>
      <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' offset={300}>
        <Jumbotron className='jumbotron'>
          <Stack />
        </Jumbotron>
      </ScrollAnimation>
    </Jumbotron>
  );
};

export default Home;
