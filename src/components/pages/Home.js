import React from 'react';
import Landing from '../info/Landing';
// import Bio from '../user/Bio';
// import Stack from '../user/Stack';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Home = () => {
  return (
    <Jumbotron className='jumbotron'>
      <Landing />
      {/* <Bio /> */}
      {/* <Stack /> */}
    </Jumbotron>
  );
};

export default Home;
