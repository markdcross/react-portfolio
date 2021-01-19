import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

const Bio = () => {
  return (
    <Container>
      <Row>
        <article className='col-md-12'>
          <Image src='img/headshot.png' alt='headshot' roundedCircle />
          <div>
            <p>Who is that handsome devil?</p>
            <p>
              I'm Mark Cross and I'm enrolled in the University of Richmond
              Coding Bootcamp. Born and raised in Annapolis, MD, graduate of the
              University of Delaware (go Blue Hens 🐓), and now Richmond local.
              I've spent my career in sales and sales leadership, having
              recently served as the head of sales for Richmond-based startup,
              <a href='https://www.edconnective.com/'>EdConenctive</a>.
            </p>
          </div>
          <i className={`far fa-hand-point-down`}></i>
        </article>
      </Row>
    </Container>
  );
};

export default Bio;
