import React from 'react';
import Container from 'react-bootstrap/Container';

const Bio = () => {
  return (
    <div>
      <div className='row'>
        <article className='col-md-12'>
          <figure className='image is-1x1'>
            <img src='img/headshot.png' alt='headshot' />
            <div>
              <p>Who is that handsome devil?</p>
              <p>
                I'm Mark Cross and I'm enrolled in the University of Richmond
                Coding Bootcamp. Born and raised in Annapolis, MD, graduate of
                the University of Delaware (go Blue Hens 🐓), and now Richmond
                local. I've spent my career in sales and sales leadership,
                having recently served as the head of sales for Richmond-based
                startup,
                <a href='https://www.edconnective.com/'>EdConenctive</a>.
              </p>
            </div>
            <i className={`far fa-hand-point-down`}></i>
          </figure>
        </article>
      </div>
    </div>
  );
};

export default Bio;
