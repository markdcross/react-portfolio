import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Stack = () => {
  return (
    <Container className="stackBlock hideMobile">
      <Row>
        <Col className="stackCol">
          <h1>Languages & Frameworks</h1>
        </Col>
        <Col className="stackCol">
          <h1>
            Tools & <br />
            Libraries
          </h1>
        </Col>
        <Col className="stackCol">
          <h1>Sales & Operations</h1>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col className="stackCol">
          <h3>Dream it</h3>
        </Col>
        <Col className="stackCol">
          <h3>Build it</h3>
        </Col>
        <Col className="stackCol">
          <h3>Monetize it</h3>
        </Col>
      </Row>

      <hr />
      <Row>
        <Col className="stackCol">
          <ul className="stackUl">
            <li>React</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>C#</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SQL</li>
            <li>NoSQL</li>
          </ul>
        </Col>
        <Col className="stackCol">
          <ul className="stackUl">
            <li>AWS Certified Cloud Practitioner</li>
            <li>Azure DevOps</li>
            <li>Serverless</li>
            <li>SQL Server/PostgreSQL</li>
            <li>DynamoDB/MongoDB</li>
            <li>Microservices</li>
            <li>Progressive Web Apps</li>
            <li>Jest/Mocha/Webdriver.io/Cypress</li>
          </ul>
        </Col>
        <Col className="stackCol">
          <ul className="stackUl">
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
  );
};

export default Stack;
