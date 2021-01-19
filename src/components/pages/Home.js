import React, { Fragment } from 'react';
import Landing from '../info/Landing';
import Bio from '../info/Bio';
import Stack from '../info/Stack';

import ScrollAnimation from 'react-animate-on-scroll';

const Home = () => {
  return (
    <Fragment>
      <Landing />
      <ScrollAnimation
        animateIn='fadeIn'
        animateOut='fadeOut'
        offset={500}
        initiallyVisible={false}
      >
        <Bio />
      </ScrollAnimation>
      <ScrollAnimation
        animateIn='fadeIn'
        animateOut='fadeOut'
        offset={500}
        initiallyVisible={false}
      >
        <Stack />
      </ScrollAnimation>
    </Fragment>
  );
};

export default Home;
