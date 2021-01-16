import React from 'react';

export const Stack = props => {

  return (
    <div>
      <div class='row'>
        <article class='col-md-4 stackContent content'>
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
        </article>

        <article class='col-md-4 stackContent content'>
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
        </article>

        <article class='col-md-4 stackContent content'>
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
        </article>
      </div>
    </div>
  );
};

export default Stack;
