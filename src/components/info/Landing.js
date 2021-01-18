import React from 'react';
import Container from 'react-bootstrap/Container';

const Landing = () => {
  return (
    <Container className='landingBlock'>
      <h1>Hi. I'm Mark.</h1>

      <h2>
        Full Stack Developer. Sales Leader. <br />
        Killer Haircut.
      </h2>

      <h3>
        Get to know me below.&nbsp;
        <i className={`far fa-hand-point-down`}></i>
        <br />
        Check out my work and get in touch above.&nbsp;
        <i className={`far fa-hand-point-up`}></i>
      </h3>
    </Container>
  );
};

export default Landing;
