import React, { Fragment } from 'react';
import Landing from '../info/Landing';
import Bio from '../info/Bio';
import Stack from '../info/Stack';

import ScrollAnimation from 'react-animate-on-scroll';

const Home = () => {
  // const [hideLanding, setHideLanding] = useState('');
  // const [hideBio, setHideBio] = useState('hide');
  // const [hideStack, setHideStack] = useState('hide');

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // const handleScroll = event => {
  //   if (window.scrollY < 150) {
  //     setHideLanding('');
  //     setHideBio('hide');
  //     setHideStack('hide');
  //   } else if (window.scrollY >= 150 && window.scrollY < 300) {
  //     setHideLanding('hide');
  //     setHideBio('');
  //     setHideStack('hide');
  //   } else {
  //     setHideLanding('hide');
  //     setHideBio('hide');
  //     setHideStack('');
  //   }
  //   console.log(window.scrollY);
  // };

  return (
    <Fragment>
      <ScrollAnimation
        animateIn='fadeIn'
        animateOut='fadeOut'
        initiallyVisible={true}
        offset={300}
      >
        <Landing />
      </ScrollAnimation>
      <ScrollAnimation
        animateIn='fadeIn'
        animateOut='fadeOut'
        offset={300}
        initiallyVisible={false}
      >
        <Bio />
      </ScrollAnimation>
      <ScrollAnimation
        animateIn='fadeIn'
        animateOut='fadeOut'
        offset={300}
        initiallyVisible={false}
      >
        <Stack />
      </ScrollAnimation>
    </Fragment>
  );
};

export default Home;
