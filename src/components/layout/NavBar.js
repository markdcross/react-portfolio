import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from './Logo';
// import ContactModal from '../contact/ContactModal';
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = props => {
  return (
    <Navbar expand='lg' bg='light' sticky='top'>
      <Navbar.Brand>
        <Logo logo='img/logo.png' logoAlt="Mark's logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='ml-auto' activeKey={window.location.pathname}>
          {/* Links */}

          <LinkContainer to='/'>
            <Nav.Link className='btn-link'>Home</Nav.Link>
          </LinkContainer>

          <LinkContainer to='/portfolio'>
            <Nav.Link className='btn-link'>Portfolio</Nav.Link>
          </LinkContainer>

          <Nav.Link
            href='https://drive.google.com/file/d/1dEob3eecP-uUu-rrFsUMKvKf-3f1CQZA/view?usp=sharing'
            target='_blank'
            rel='noreferrer noopener'
            className='btn-link'
          >
            Resume
          </Nav.Link>

          {/* <ContactModal /> */}

          <Nav.Link
            href='https://github.com/markdcross'
            target='_blank'
            className='githubBtn button ctcLinks'
            rel='noreferrer noopener'
          >
            <span className='icon'>
              <i className='fab fa-github'></i>
            </span>
          </Nav.Link>

          <Nav.Link
            href='https://www.linkedin.com/in/markdcross/'
            target='_blank'
            className='githubBtn button ctcLinks'
            rel='noreferrer noopener'
          >
            <span className='icon'>
              <i className='fab fa-linkedin'></i>
            </span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
