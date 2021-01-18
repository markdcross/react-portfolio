import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Stack = () => {
  return (
    <Container className="stack">
      <Row>
        <Col>
          <h1 class='title'>Languages & Frameworks</h1>
          <h3 class='subtitle'>Dream it</h3>
          <div class='content'>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>SQL</li>
              <li>NoSQL</li>
            </ul>
          </div>
        </Col>

        <Col>
          <h1 class='title'>Tools & Libraries</h1>
          <h3 class='subtitle'>Build it</h3>
          <div class='content'>
            <ul>
              <li>Git & GitHub</li>
              <li>Bootstrap/Bulma/Materialize</li>
              <li>jQuery/AJAX</li>
              <li>Node.js/Express</li>
              <li>MySQL/MongoDB</li>
              <li>Sequelize/Mongoose</li>
              <li>Jest/Mocha</li>
              <li>Postman</li>
              <li>Heroku/Netlify/Digital Ocean</li>
            </ul>
          </div>
        </Col>

        <Col>
          <h1 class='title'>Sales & Operations</h1>
          <h3 class='subtitle'>Monetize it</h3>
          <div class='content'>
            <ul>
              <li>Solutions Selling</li>
              <li>Challenger Selling</li>
              <li>Lean Six Sigma Yellow Belt</li>
              <li>Salesforce.com & various CRMs</li>
              <li>Outreach.io/SalesLoft</li>
              <li>Marketing automation platforms</li>
              <li>Sales enablement platforms</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Stack;
