import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Stack = () => {
  return (
    <Fragment>
      <Container className='stackBlock hideMobile'>
        <Row>
          <Col className='stackCol'>
            <h1>Languages & Frameworks</h1>
          </Col>
          <Col className='stackCol'>
            <h1>
              Tools & <br />
              Libraries
            </h1>
          </Col>
          <Col className='stackCol'>
            <h1>Sales & Operations</h1>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className='stackCol'>
            <h3>Dream it</h3>
          </Col>
          <Col className='stackCol'>
            <h3>Build it</h3>
          </Col>
          <Col className='stackCol'>
            <h3>Monetize it</h3>
          </Col>
        </Row>

        <hr />
        <Row>
          <Col className='stackCol'>
            <ul className='stackUl'>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>SQL</li>
              <li>NoSQL</li>
            </ul>
          </Col>
          <Col className='stackCol'>
            <ul className='stackUl'>
              <li>Git & GitHub</li>
              <li>Bootstrap/Bulma/Materialize</li>
              <li>jQuery/AJAX</li>
              <li>Progressive Web Apps</li>
              <li>Node.js/Express</li>
              <li>MySQL/MongoDB</li>
              <li>Sequelize/Mongoose</li>
              <li>Jest/Mocha</li>
              <li>Postman</li>
              <li>Heroku/Netlify/Digital Ocean</li>
            </ul>
          </Col>
          <Col className='stackCol'>
            <ul className='stackUl'>
              <li>Solutions Selling</li>
              <li>Challenger Selling</li>
              <li>Lean Six Sigma Yellow Belt</li>
              <li>Salesforce.com & various CRMs</li>
              <li>Outreach.io/SalesLoft</li>
              <li>Marketing automation platforms</li>
              <li>Sales enablement platforms</li>
            </ul>
          </Col>
        </Row>
      </Container>

      <Container className='stackBlock mobile-dropdown-toggle'>
        <Row>
          <Col>
            <h1>Languages & Frameworks</h1>
            <h3>Dream it</h3>
            <hr />
            <ul style={{ listStyleType: 'none' }}>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>SQL</li>
              <li>NoSQL</li>
            </ul>
            <hr />
          </Col>
          <Col>
            <h1>Tools & Libraries</h1>
            <h3>Build it</h3>
            <hr />

            <ul style={{ listStyleType: 'none' }}>
              <li>Git & GitHub</li>
              <li>Bootstrap/Bulma/Materialize</li>
              <li>jQuery/AJAX</li>
              <li>Progressive Web Apps</li>
              <li>Node.js/Express</li>
              <li>MySQL/MongoDB</li>
              <li>Sequelize/Mongoose</li>
              <li>Jest/Mocha</li>
              <li>Postman</li>
              <li>Heroku/Netlify/Digital Ocean</li>
            </ul>
            <hr />
          </Col>
          <Col>
            <h1>Sales & Operations</h1>
            <h3>Monetize it</h3>
            <hr />

            <ul style={{ listStyleType: 'none', margin: '0', padding: '0' }}>
              <li>Solutions Selling</li>
              <li>Challenger Selling</li>
              <li>Lean Six Sigma Yellow Belt</li>
              <li>Salesforce.com & various CRMs</li>
              <li>Outreach.io/SalesLoft</li>
              <li>Marketing automation platforms</li>
              <li>Sales enablement platforms</li>
            </ul>
            <hr />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Stack;
