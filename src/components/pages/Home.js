import React from 'react';
import Landing from '../info/Landing';
import Bio from '../info/Bio';
import Stack from '../info/Stack';

import Jumbotron from 'react-bootstrap/Jumbotron';

import ScrollAnimation from 'react-animate-on-scroll';

// TODO React Reveal

const Home = () => {
  return (
    <Jumbotron className='jumbotron'>
      <Landing />
      <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' offset={300}>
        <Jumbotron className='jumbotron'>
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
