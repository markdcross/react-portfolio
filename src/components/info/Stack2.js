import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Stack = () => {
  return (
    <Container className='stackBlock'>
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
  );
};

export default Stack;
