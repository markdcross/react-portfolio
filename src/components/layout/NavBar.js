import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from './Logo';
import ContactModal from '../contact/ContactModal';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';

export const NavBar = () => {
  const [mobileNavOpened, setMobileNavOpened] = useState(false);
  const toggleMobileNav = () => setMobileNavOpened(!mobileNavOpened);

  //* Dismiss navbar on link click
  // grab the current route with a React hook
  const location = useLocation();
  // whenever "location" changes, hide our dropdown
  useEffect(() => {
    setMobileNavOpened(false);
  }, [location]);

  return (
    <Navbar className={mobileNavOpened ? 'nav dropdown-opened' : 'nav'}>
      <Navbar.Brand className='logo' href='/'>
        <Logo logo='../img/logo.png' logoAlt="Mark's logo" />
      </Navbar.Brand>
      <button
        className='mobile-dropdown-toggle'
        aria-hidden='true'
        onClick={toggleMobileNav}
      >
        <i className='fas fa-bars'></i>{' '}
      </button>
      <div className='dropdown-link-container'>
        <LinkContainer to='/'>
          <Nav.Link className='links'>Home</Nav.Link>
        </LinkContainer>

        <LinkContainer to='/portfolio'>
          <Nav.Link className='links'>Portfolio</Nav.Link>
        </LinkContainer>

        <Nav.Link
          className='links'
          href='https://drive.google.com/file/d/1dEob3eecP-uUu-rrFsUMKvKf-3f1CQZA/view?usp=sharing'
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
    </Navbar>
  );
};

export default NavBar;
