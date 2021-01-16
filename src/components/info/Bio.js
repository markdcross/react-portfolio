import React from 'react';

const Bio = props => {
  return (
    <div>
      <div className='row'>
        <article className='col-md-12'>
          <figure className='image is-1x1'>
            <img id='headshot' src='img/headshot.png' alt='headshot' />
            <div id='introContent'>
              <p className='title'>Who is that handsome devil?</p>
              <p id='bioText'>
                I'm Mark Cross and I'm enrolled in the University of Richmond
                Coding Bootcamp. Born and raised in Annapolis, MD, graduate of
                the University of Delaware (go Blue Hens 🐓), and now Richmond
                local. I've spent my career in sales and sales leadership,
                having recently served as the head of sales for Richmond-based
                startup,
                <a href='https://www.edconnective.com/'>EdConenctive</a>.
              </p>
            </div>
          </figure>
        </article>
      </div>
    </div>
  );
};

export default Bio;
