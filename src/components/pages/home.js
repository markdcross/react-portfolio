import React, {Fragment} from 'react';
import Landing from '../info/landing';
import Bio from '../info/bio';
import Stack from '../info/stack';
import StackMobile from '../info/stackMobile';

import ScrollAnimation from 'react-animate-on-scroll';

const Home = () => {
    return (
        <Fragment>
            <Landing/>
            <ScrollAnimation
                animateIn='fadeIn'
                animateOut='fadeOut'
                offset={500}
                initiallyVisible={false}
            >
                <Bio/>
            </ScrollAnimation>
            <ScrollAnimation
                animateIn='fadeIn'
                animateOut='fadeOut'
                offset={500}
                initiallyVisible={false}
            >
                <Stack/>
                <StackMobile/>
            </ScrollAnimation>
        </Fragment>
    );
};

export default Home;
