import React from 'react';
import Container from 'react-bootstrap/Container';

import ScrollAnimation from 'react-animate-on-scroll';

const Landing = () => {
  return (
    <Container className='landingBlock'>
      <h1
        style={{
          marginBottom: '3rem'
        }}
      >
        Hi, I'm Mark.
      </h1>

      <ScrollAnimation
        animateIn='fadeIn'
        animateOut='fadeOut'
        delay={1500}
        animateOnce={true}
      >
        <h2
          style={{
            marginBottom: '3rem'
          }}
        >
          Full Stack Developer. Sales Leader. <br />
          Killer Haircut.
        </h2>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn='fadeIn'
        animateOut='fadeOut'
        delay={2000}
        animateOnce={true}
      >
        <h3>
          Get to know me below.&nbsp;
          <i
            className={`far fa-hand-point-down`}
          ></i>
          <br />
          Check out my work and get in touch above.&nbsp;
          <i
            className={`far fa-hand-point-up`}

          ></i>
        </h3>
      </ScrollAnimation>
    </Container>
  );
};

export default Landing;
