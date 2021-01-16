import React, { Fragment } from 'react';
import Landing from '../info/Landing';
// import Bio from '../user/Bio';
// import Stack from '../user/Stack';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Home = () => {
  return (
    <Fragment>
      <Jumbotron className='jumbotron'>
        <Landing />
        {/* <Bio /> */}
        {/* <Stack /> */}
      </Jumbotron>
    </Fragment>
  );
};

export default Home;
