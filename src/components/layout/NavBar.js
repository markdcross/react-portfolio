import React, { useState } from 'react';
import Logo from './Logo';
import ContactModal from '../contact/ContactModal';
import Hamburger from './Hamburger';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

export const NavBar = () => {
  const [mobileNavOpened, setMobileNavOpened] = useState(false);
  const toggleMobileNav = () => setMobileNavOpened(!mobileNavOpened);

  //* Dismiss navbar on link click

  return (
    <Navbar className={mobileNavOpened ? 'nav dropdown-opened' : 'nav'}>
      <Navbar.Brand className='logo' href='/'>
        <Logo logo='../img/tinified/logo2.jpg' logoAlt="Mark's logo" />
      </Navbar.Brand>

      <Hamburger toggleMobileNav={toggleMobileNav} opened={mobileNavOpened} />

      <div className='dropdown-link-container'>
        <div className='dropdown-links'>
          <LinkContainer to='/'>
            <Nav.Link className='links' onClick={toggleMobileNav}>
              Home
            </Nav.Link>
          </LinkContainer>

          <LinkContainer to='/portfolio'>
            <Nav.Link className='links' onClick={toggleMobileNav}>
              Portfolio
            </Nav.Link>
          </LinkContainer>

          <Nav.Link
            className='links'
            href='https://drive.google.com/file/d/1Rxnp-pGEktrIgEwlOi012DxAKfzH4Yqj/view?usp=sharing'
            target='_blank'
            rel='noreferrer noopener'
          >
            Resume
          </Nav.Link>

          <ContactModal />

          <Nav.Link
            href='https://github.com/markdcross'
            target='_blank'
            className='links'
            rel='noreferrer noopener'
          >
            <span className='icon'>
              <i className='fab fa-github'></i>
            </span>
          </Nav.Link>

          <Nav.Link
            href='https://www.linkedin.com/in/markdcross/'
            target='_blank'
            className='links'
            rel='noreferrer noopener'
          >
            <span className='icon'>
              <i className='fab fa-linkedin'></i>
            </span>
          </Nav.Link>
        </div>
      </div>
    </Navbar>
  );
};

export default NavBar;
